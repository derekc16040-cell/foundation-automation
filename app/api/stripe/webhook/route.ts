import { NextResponse } from "next/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
  }

  return new Stripe(secretKey);
}

export async function POST(request: Request) {
  const stripe = getStripe();

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("Missing STRIPE_WEBHOOK_SECRET environment variable.");

    return NextResponse.json(
      { error: "Webhook secret not configured." },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature." },
      { status: 400 }
    );
  }

  const body = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);

    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const clerkUserId = session.metadata?.clerkUserId;
    const paymentId = session.metadata?.paymentId;
    const paymentType = session.metadata?.paymentType;

    if (
      paymentType === "one_time" &&
      session.payment_status === "paid" &&
      clerkUserId &&
      paymentId
    ) {
      const client = await clerkClient();

      await client.users.updateUserMetadata(clerkUserId, {
        privateMetadata: {
          paidPayments: {
            [paymentId]: {
              paid: true,
              amountCents: session.amount_total ?? 0,
              stripeSessionId: session.id,
              paidAt: new Date(event.created * 1000).toISOString(),
            },
          },
        },
      });

      console.log(
        `Marked payment ${paymentId} as paid for Clerk user ${clerkUserId}`
      );
    }
  }

  return NextResponse.json({ received: true });
}