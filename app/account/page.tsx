import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import {
  clientPayments,
  clientStripeCustomerIds,
  formatUSD,
} from "@/lib/clientPayments";

export default async function AccountPage() {
  const user = await currentUser();

  const email =
    user?.emailAddresses?.[0]?.emailAddress?.toLowerCase() || "";

  const paymentOptions = email ? clientPayments[email] ?? [] : [];
  const stripeCustomerId = email ? clientStripeCustomerIds[email] : undefined;

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
                {email || "Not signed in"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          {paymentOptions.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {paymentOptions.map((option) => (
                <article
                  key={option.id}
                  className="group rounded-[28px] border border-[#cfdbdf] bg-white p-7 shadow-[0_15px_50px_rgba(8,44,67,.04)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(8,44,67,.11)] sm:p-8"
                >
                  <div className="flex min-h-[270px] flex-col">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#12627e]">
                        {option.type === "subscription"
                          ? "Recurring Payment"
                          : "One-Time Payment"}
                      </p>

                      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#082c43]">
                        {option.title}
                      </h2>

                      <p className="mt-5 text-[15px] leading-7 text-[#647984]">
                        {option.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-8">
                      <p className="mb-5 text-4xl font-semibold tracking-[-0.04em] text-[#082c43]">
                        {formatUSD(option.amountCents)}
                        {option.type === "subscription" && (
                          <span className="text-base font-semibold text-[#647984]">
                            /{option.interval ?? "month"}
                          </span>
                        )}
                      </p>

                      <form
                        action="/api/create-checkout-session"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="paymentId"
                          value={option.id}
                        />

                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-full bg-[#06283d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0a354e]"
                        >
                          {option.type === "subscription"
                            ? "Set Up Monthly Payment"
                            : "Pay Now"}
                        </button>
                      </form>
                    </div>
                  </div>
                </article>
              ))}

              {stripeCustomerId && (
                <article className="rounded-[28px] border border-[#cfdbdf] bg-white p-7 shadow-[0_15px_50px_rgba(8,44,67,.04)] sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#12627e]">
                    Billing Portal
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#082c43]">
                    Manage Billing
                  </h2>

                  <p className="mt-5 text-[15px] leading-7 text-[#647984]">
                    Update payment methods, view invoices, and manage existing
                    subscription billing.
                  </p>

                  <form
                    action="/api/create-billing-portal"
                    method="POST"
                    className="mt-8"
                  >
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#06283d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0a354e]"
                    >
                      Open Billing Portal
                    </button>
                  </form>
                </article>
              )}
            </div>
          ) : (
            <div className="rounded-[28px] border border-[#cfdbdf] bg-white p-8 shadow-[0_15px_50px_rgba(8,44,67,.04)]">
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#082c43]">
                No active payment items
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#647984]">
                There are currently no assigned payments for this account. If
                you believe this is incorrect, contact Foundation Automation
                support.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#06283d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0a354e]"
              >
                Contact Support
              </a>
            </div>
          )}
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