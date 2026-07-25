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
      id: "don-onprintshop-project-balance-2000",
      title: "OnPrintShop Project Balance",
      description:
        "Remaining balance for approved OnPrintShop project work, storefront support, workflow assistance, and technical consulting.",
      amountCents: 200000,
      type: "one_time",
    },
    {
      id: "don-monthly-support-1000",
      title: "Monthly Technical Support",
      description:
        "Recurring monthly support for OnPrintShop assistance, troubleshooting, workflow improvements, and ongoing technical help.",
      amountCents: 100000,
      type: "subscription",
      interval: "month",
    },
  ],

  "derekc16040@gmail.com": [
    {
      id: "derek-onprintshop-project-balance-2000",
      title: "OnPrintShop Project Balance",
      description:
        "Remaining balance for approved OnPrintShop project work, storefront support, workflow assistance, and technical consulting.",
      amountCents: 200000,
      type: "one_time",
    },
    {
      id: "derek-monthly-support-1000",
      title: "Monthly Technical Support",
      description:
        "Recurring monthly support for OnPrintShop assistance, troubleshooting, workflow improvements, and ongoing technical help.",
      amountCents: 100000,
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