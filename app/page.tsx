export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-[#0e3f5f]">
      <header className="fixed top-0 z-50 w-full bg-[#0e3f5f]/95 backdrop-blur">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">
          <a href="#top" aria-label="Go back to top">
            <img
              src="/images/FA_Logo_white_Long2.png"
              alt="Foundation Automation"
              className="h-20 w-auto object-contain"
            />
          </a>

          <nav className="hidden gap-10 text-base font-semibold text-white md:flex">
            <a href="#about" className="hover:text-white/70 transition">
              About
            </a>
            <a href="#services" className="hover:text-white/70 transition">
              Services
            </a>
            <a href="#outcomes" className="hover:text-white/70 transition">
              Outcomes
            </a>
            <a href="/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative bg-white pt-[82px]">
        <div className="relative h-[610px] overflow-visible">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/images/hero-image.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-[-95px] left-1/2 z-20 w-[90%] max-w-4xl -translate-x-1/2 bg-white px-8 py-10 text-center shadow-xl md:px-16">
            <p className="mb-4 text-xl font-semibold text-black md:text-2xl">
              Technology is Evolving, Your Business Should Too.
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#08263d] md:text-6xl">
              Set Your Business Up
              <br />
              For Success
            </h1>

            <a
              href="/contact"
              className="mt-8 inline-block border-2 border-[#0e3f5f] px-8 py-3 font-bold text-[#0e3f5f] transition hover:bg-[#0e3f5f] hover:text-white"
            >
              Get Started!
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-20 px-6 pb-28 pt-72 md:grid-cols-3"
      >
        {[
          {
            title: "Services",
            text: "We automate workflows, connect systems, implement AI, develop websites, and optimize operations to reduce manual work and improve efficiency.",
            link: "/services",
          },
          {
            title: "Outcomes",
            text: "Our solutions help businesses reduce bottlenecks, improve visibility, save time, lower costs, and build scalable systems for long-term growth.",
            link: "/outcomes",
          },
          {
            title: "Why Us?",
            text: "We provide enterprise-level automation and integration support without the cost of large consulting firms or additional full-time staff.",
            link: "/why-us",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex min-h-[260px] flex-col items-center text-center"
          >
            <h2 className="mb-8 text-3xl font-light uppercase tracking-[0.2em]">
              {item.title}
            </h2>

            <p className="mx-auto max-w-sm flex-grow text-base leading-8 text-slate-600">
              {item.text}
            </p>

            <a
              href={item.link}
              className="mt-8 hidden border border-[#0e3f5f] px-7 py-3 text-sm font-bold text-[#0e3f5f] transition duration-300 hover:-translate-y-1 hover:bg-[#0e3f5f] hover:text-white hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        ))}
      </section>

      <section id="services" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-xl font-bold uppercase tracking-[0.3em] md:text-2xl">
            Our Services
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold md:text-6xl">
            Solutions That Streamline, Automate & Scale Your Business
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Workflow Automation",
                text: "Automate repetitive tasks, approvals, notifications, file movement, and operational workflows.",
              },
              {
                title: "Systems Integration",
                text: "Connect CRMs, websites, storefronts, databases, APIs, and business applications.",
              },
              {
                title: "AI Implementation",
                text: "Use AI to improve communication, handle data, reduce admin work, and support decisions.",
              },
              {
                title: "Website & Storefront Development",
                text: "Build and improve business websites, ecommerce storefronts, portals, and client experiences.",
              },
              {
                title: "Operational Optimization",
                text: "Identify bottlenecks and implement smarter processes that improve productivity and scalability.",
              },
              {
                title: "Ongoing Support",
                text: "Provide continued support, troubleshooting, system maintenance, and future improvements.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-slate-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-[#0e3f5f]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xl font-bold uppercase tracking-[0.3em] md:text-2xl">
              Outcomes
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Built To Reduce Waste And Improve Efficiency
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our work is focused on measurable improvements: fewer manual steps,
              better visibility, reduced errors, faster turnaround, and stronger
              operational systems.
            </p>
          </div>

          <div className="mt-16 grid items-start gap-6 md:grid-cols-4">
            {[
              {
                title: "Reduced Manual Work",
                text: "Replace repetitive tasks, duplicate entry, manual file handling, and unnecessary back-and-forth with automated workflows that save time every day.",
              },
              {
                title: "Improved Data Flow",
                text: "Connect disconnected systems so customer data, orders, files, updates, and operational information move cleanly between the tools your business already uses.",
              },
              {
                title: "Fewer Process Errors",
                text: "Standardize important steps, add validation checks, reduce missed details, and create more consistent workflows that lower the chance of costly mistakes.",
              },
              {
                title: "Scalable Operations",
                text: "Build systems that can handle more work, more customers, and more complexity without needing to constantly add more manual labor or overhead.",
              },
            ].map((outcome) => (
              <div
                key={outcome.title}
                className="group relative min-h-[120px] overflow-hidden border-l-4 border-[#0e3f5f] bg-slate-50 p-6 pb-20 shadow-sm transition-all duration-500 hover:min-h-[300px] hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#0e3f5f]">
                  {outcome.title}
                </h3>

                <p className="mt-0 max-h-0 translate-y-4 overflow-hidden pr-2 text-sm leading-7 text-slate-600 opacity-0 transition-all duration-500 group-hover:mt-6 group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                  {outcome.text}
                </p>

                <span className="absolute bottom-4 left-6 text-3xl font-light leading-none text-[#0e3f5f] transition duration-500 group-hover:rotate-180">
                  ⌄
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0e3f5f] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-4xl font-bold">
              Ready to build smarter systems?
            </h2>

            <p className="mt-3 text-white/75">
              Let’s talk through your workflows and find the best place to start.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-white px-8 py-4 font-bold text-[#0e3f5f] transition hover:bg-slate-100"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}