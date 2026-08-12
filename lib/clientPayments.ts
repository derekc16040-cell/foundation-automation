export type ClientPayment = {
  id: string;
  title: string;
  description: string;
  amountCents: number;
  type: "one_time" | "subscription";
  interval?: "month" | "year";
};

export const clientPayments: Record<string, ClientPayment[]> = {
  "don@gpidirect.com": [
    {
      id: "don-monthly-support-1000",
      title: "Monthly Technical Support",
      description:
        "Recurring monthly support for OnPrintShop assistance, troubleshooting, workflow improvements, and ongoing technical help.",
      amountCents: 0.00,
      type: "subscription",
      interval: "month",
    },
  ],

  "derekc16040@gmail.com": [
    {
      id: "Scott-new-project-balance-4500",
      title: "Project Balance",
      description:
        "Balance for OnPrintShop and Pace integration project.",
      amountCents: 1000,
      type: "one_time",
    },
    {
      id: "Scott-monthly-support-0",
      title: "Monthly Support",
      description:
        "TBD - Recurring monthly support",
      amountCents: 0.00,
      type: "subscription",
      interval: "month",
    }, 
  ],

  "client@example.com": [
    {
      id: "client-project-payment-5000",
      title: "Project Payment",
      description:
        "Approved one-time project payment for Foundation Automation consulting, automation, integration, or web-to-print support services.",
      amountCents: 500000,
      type: "one_time",
    },
  ],

  "scott@rcpionline.com": [
    {
      id: "Scott-project-balance-4500",
      title: "Project Balance",
      description:
        "Balance for OnPrintShop and Pace integration project.",
      amountCents: 450000,
      type: "one_time",
    },
    {
      id: "Scott-monthly-support-0",
      title: "Monthly Support",
      description:
        "TBD - Recurring monthly support",
      amountCents: 0.00,
      type: "subscription",
      interval: "month",
    }, 
  ],
};

export const clientStripeCustomerIds: Record<string, string> = {
  // Add Stripe customer IDs here later if you want the billing portal to work.
  // Example:
  // "don@gpidirect.com": "cus_XXXXXXXXXXXXXX",
  // "derekc16040@gmail.com": "cus_XXXXXXXXXXXXXX",
};

export function formatUSD(amountCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amountCents / 100);
}