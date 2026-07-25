import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { clientStripeCustomerIds } from "@/lib/clientPayments";

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
  const customerId = clientStripeCustomerIds[email];

  if (!customerId) {
    return NextResponse.redirect(new URL("/account", request.url), 303);
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  const stripe = getStripe();

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${siteUrl}/account`,
  });

  return NextResponse.redirect(portalSession.url, 303);
}