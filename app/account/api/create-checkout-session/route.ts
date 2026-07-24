import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { clientPayments } from "@/lib/clientPayments";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/client-sign-in", request.url));
  }

  const email = user.emailAddresses?.[0]?.emailAddress?.toLowerCase();

  if (!email) {
    return NextResponse.redirect(new URL("/account?error=no-email", request.url));
  }

  const formData = await request.formData();
  const paymentId = formData.get("paymentId")?.toString();
  const payment = clientPayments[email]?.find((item) => item.id === paymentId);

  if (!payment) {
    return NextResponse.redirect(
      new URL("/account?error=payment-not-found", request.url),
    );
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: payment.type === "subscription" ? "subscription" : "payment",
    customer_email: email,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: payment.amountCents,
          product_data: {
            name: payment.title,
            description: payment.description,
          },
          ...(payment.type === "subscription"
            ? {
                recurring: {
                  interval: payment.interval || "month",
                },
              }
            : {}),
        },
      },
    ],
    success_url: `${baseUrl}/account?success=true`,
    cancel_url: `${baseUrl}/account?canceled=true`,
  });

  if (!session.url) {
    return NextResponse.redirect(
      new URL("/account?error=stripe-session-failed", request.url),
    );
  }

  return NextResponse.redirect(session.url, 303);
}