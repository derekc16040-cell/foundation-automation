export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#0e3f5f]">
      <header className="fixed top-0 z-50 w-full bg-[#0e3f5f]/95 backdrop-blur">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">
          <a href="/" aria-label="Go back home">
            <img
              src="/images/FA_Logo_white_Long2.png"
              alt="Foundation Automation"
              className="h-20 w-auto object-contain"
            />
          </a>

          <nav className="hidden gap-10 text-base font-semibold text-white md:flex">
            <a href="/#about" className="hover:text-white/70 transition">
              About
            </a>
            <a href="/#services" className="hover:text-white/70 transition">
              Services
            </a>
            <a href="/#outcomes" className="hover:text-white/70 transition">
              Outcomes
            </a>
            <a href="/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-slate-50 px-6 pb-20 pt-[150px]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xl font-bold uppercase tracking-[0.3em] md:text-2xl">
            Contact
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#08263d] md:text-6xl">
            Let’s Build Smarter Systems For Your Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you need automation, integrations, AI implementation,
            website improvements, or operational support, reach out and we can
            talk through the best place to start.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0e3f5f]">
              Send a Message
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Fill out the form below with a little information about what you
              need help with. I’ll review it and get back to you as soon as I can.
            </p>

            <form
                action="https://formspree.io/f/xzdqoapo"
                method="POST"
                className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0e3f5f]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0e3f5f] focus:ring-2 focus:ring-[#0e3f5f]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0e3f5f]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0e3f5f] focus:ring-2 focus:ring-[#0e3f5f]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0e3f5f]">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0e3f5f] focus:ring-2 focus:ring-[#0e3f5f]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0e3f5f]">
                  What do you need help with?
                </label>
                <select
                  name="service"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0e3f5f] focus:ring-2 focus:ring-[#0e3f5f]/20"
                >
                  <option>Workflow Automation</option>
                  <option>Systems Integration</option>
                  <option>AI Implementation</option>
                  <option>Website or Storefront Development</option>
                  <option>Operational Optimization</option>
                  <option>Ongoing Support</option>
                  <option>All of The Above</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#0e3f5f]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your current process, issue, or project..."
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0e3f5f] focus:ring-2 focus:ring-[#0e3f5f]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0e3f5f] px-8 py-4 font-bold text-white transition hover:bg-[#08263d]"
            >
                Send Message
            </button>

            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-[#0e3f5f] p-8 text-white shadow-sm">
              <h2 className="text-3xl font-bold">Schedule a Consultation</h2>

              <p className="mt-4 leading-7 text-white/80">
                Book a time to walk through your workflow, current systems, and
                where automation or integration could make the biggest impact.
              </p>

              <a
                href="https://calendly.com/derekc-foundationautomation-migc/foundation-automation-informational-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-white px-8 py-4 font-bold text-[#0e3f5f] transition hover:bg-slate-100"
              >
                Schedule an Appointment
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-[#0e3f5f]">
                Contact Directly
              </h2>

              <div className="mt-6 space-y-5 text-slate-600">
                <div>
                  <p className="text-sm font-bold uppercase text-[#0e3f5f]">
                    Email
                  </p>
                  <a
                    href="mailto:derekc@foundationautomation.org"
                    className="mt-2 inline-block text-lg font-semibold text-slate-700 hover:text-[#0e3f5f]"
                  >
                    derekc@foundationautomation.org
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-[#0e3f5f]">
                    Business
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-700">
                    Foundation Automation
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-[#0e3f5f]">
                    Services
                  </p>
                  <p className="mt-2 leading-7">
                    Automation, integrations, AI implementation, website
                    development, and operational optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0e3f5f]">
                Not sure where to start?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                That’s okay. Most businesses know something is inefficient but
                are not always sure what needs to change first. We can start by
                reviewing your current workflow and identifying the highest value
                opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}