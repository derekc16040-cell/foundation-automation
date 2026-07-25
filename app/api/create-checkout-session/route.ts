import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { clientPayments } from "@/lib/clientPayments";

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
  }

  return new Stripe(secretKey);
}

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/client-sign-in", request.url), 303);
  }

  const email = user.emailAddresses?.[0]?.emailAddress?.toLowerCase() || "";

  const formData = await request.formData();
  const paymentId = String(formData.get("paymentId") || "");

  const paymentOptions = clientPayments[email] ?? [];
  const payment = paymentOptions.find((item) => item.id === paymentId);

  if (!payment) {
    return NextResponse.redirect(new URL("/account", request.url), 303);
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: payment.type === "subscription" ? "subscription" : "payment",
    customer_email: email,
    line_items: [
      {
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
                  interval: payment.interval ?? "month",
                },
              }
            : {}),
        },
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/account?payment=success`,
    cancel_url: `${siteUrl}/account?payment=cancelled`,
  });

  if (!session.url) {
    return NextResponse.redirect(new URL("/account", request.url), 303);
  }

  return NextResponse.redirect(session.url, 303);
}