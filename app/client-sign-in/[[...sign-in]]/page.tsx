import { SignIn } from "@clerk/nextjs";

export default function ClientSignInPage() {
  return (
    <main className="min-h-screen bg-[#06283d] px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/12 bg-white shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
          <section className="relative hidden overflow-hidden bg-[#06283d] p-10 text-white lg:block">
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:54px_54px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <a href="/" aria-label="Foundation Automation home">
                <img
                  src="/images/FA_Logo_White_Long2.png"
                  alt="Foundation Automation"
                  className="h-16 w-auto object-contain"
                />
              </a>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#7cd5e6]">
                  Client Portal
                </p>

                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em]">
                  Manage your account, payments, and support.
                </h1>

                <p className="mt-6 max-w-md text-base leading-8 text-white/65">
                  Sign in to access billing options, one-time payments,
                  recurring support plans, and client support resources.
                </p>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center bg-[#f4f7f8] p-6 sm:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:hidden">
                <a href="/" aria-label="Foundation Automation home">
                  <img
                    src="/images/FA_Logo_White_Long2.png"
                    alt="Foundation Automation"
                    className="mx-auto h-16 w-auto object-contain"
                  />
                </a>
              </div>

              <SignIn
                routing="path"
                path="/client-sign-in"
                signUpUrl="/client-sign-in"
                forceRedirectUrl="/account"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}