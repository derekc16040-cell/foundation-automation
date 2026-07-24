import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const paymentOptions = [
  {
    title: "One-Time Payment",
    description:
      "Use this for project deposits, remaining balances, one-off fixes, or approved custom work.",
    buttonText: "Make One-Time Payment",
    href: "https://buy.stripe.com/3cI8wI2Wo5CQ2rv2SW8Ra00",
  },
  {
    title: "Monthly Support",
    description:
      "Set up recurring monthly support, maintenance, optimization, or platform assistance.",
    buttonText: "Set Up Monthly Payment",
    href: "PASTE_STRIPE_MONTHLY_PAYMENT_LINK_HERE",
  },
  {
    title: "Manage Billing",
    description:
      "Update payment methods, view invoices, and manage existing subscription billing.",
    buttonText: "Open Billing Portal",
    href: "PASTE_STRIPE_CUSTOMER_PORTAL_LINK_HERE",
  },
];

export default async function AccountPage() {
  const user = await currentUser();

  return (
    <main className="min-h-screen bg-[#f4f7f8] text-[#082c43]">
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06283d]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" aria-label="Foundation Automation home">
            <img
              src="/images/FA_Logo_White_Long2.png"
              alt="Foundation Automation"
              className="h-[62px] w-auto object-contain sm:h-[68px]"
            />
          </a>

          <div className="flex items-center gap-5">
            <a
              href="/"
              className="hidden text-sm font-semibold text-white/75 transition hover:text-white sm:block"
            >
              Home
            </a>
            <UserButton />
          </div>
        </div>
      </header>

      <section className="px-5 pb-16 pt-[135px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-kicker">Client Account</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-[clamp(2.7rem,5.2vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#082c43]">
                Welcome back
                {user?.firstName ? `, ${user.firstName}` : ""}.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f737d]">
                Manage Foundation Automation payments, monthly support, billing,
                and client support from one place.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#cfdbdf] bg-white p-7 shadow-[0_15px_50px_rgba(8,44,67,.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#12627e]">
                Signed in as
              </p>
              <p className="mt-3 text-xl font-semibold text-[#082c43]">
                {user?.emailAddresses?.[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-3">
          {paymentOptions.map((option) => (
            <article
              key={option.title}
              className="group rounded-[28px] border border-[#cfdbdf] bg-white p-7 shadow-[0_15px_50px_rgba(8,44,67,.04)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(8,44,67,.11)] sm:p-8"
            >
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#082c43]">
                {option.title}
              </h2>

              <p className="mt-5 min-h-[112px] text-[15px] leading-7 text-[#647984]">
                {option.description}
              </p>

              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#06283d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0a354e]"
              >
                {option.buttonText}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 rounded-[32px] bg-[#06283d] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7cd5e6]">
              Need help?
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">
              Have a billing or project question?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
              Send a message and I’ll help you with payment setup, project
              status, support requests, or billing questions.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#07324b] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}