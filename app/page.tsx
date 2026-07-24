import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const services = [
  {
    number: "01",
    title: "Web-to-Print Support",
    description:
      "Support for storefront setup, product configuration, customer portals, order intake, and connected web-to-print workflows.",
    points: ["Customer storefronts", "Product setup", "Order intake"],
    icon: "platform",
  },
  {
    number: "02",
    title: "Print Workflow Automation",
    description:
      "Automate repetitive steps across estimating, artwork, file handling, prepress, approvals, production handoffs, and customer communication.",
    points: ["File routing", "Approval flows", "Production handoffs"],
    icon: "workflow",
  },
  {
    number: "03",
    title: "Storefront & MIS Integration",
    description:
      "Connect storefronts, MIS platforms, CRMs, spreadsheets, production tools, and internal systems so job information moves without constant re-entry.",
    points: [
      "APIs and webhooks",
      "MIS and storefronts",
      "Data synchronization",
    ],
    icon: "integration",
  },
  {
    number: "04",
    title: "File & Order Management",
    description:
      "Improve how incoming files, job details, proofs, approvals, folders, and production information are organized, validated, and routed.",
    points: ["Folder structure", "Order details", "Proof workflows"],
    icon: "strategy",
  },
  {
    number: "05",
    title: "AI-Assisted Operations",
    description:
      "Use AI to summarize customer requests, identify missing order details, draft responses, classify jobs, and support faster internal decisions.",
    points: ["Email summaries", "Data extraction", "Decision support"],
    icon: "ai",
  },
  {
    number: "06",
    title: "Ongoing Technical Support",
    description:
      "Monthly support for maintenance, storefront updates, troubleshooting, workflow improvements, integrations, and continued optimization.",
    points: ["Maintenance support", "Troubleshooting", "System expansion"],
    icon: "support",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Map",
    text: "We map how jobs actually move through your shop, from customer request and artwork to approvals, production, delivery, and follow-up.",
  },
  {
    number: "02",
    title: "Connect",
    text: "We identify where storefronts, MIS data, files, customer communication, and internal workflows should connect more cleanly.",
  },
  {
    number: "03",
    title: "Build",
    text: "We implement, test, document, and launch the workflows, integrations, AI tools, storefront improvements, or support systems your team needs.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We support adoption, fix friction points, improve visibility, and continue refining the system as your print business grows.",
  },
];

const outcomes = [
  {
    title: "Less manual re-entry",
    text: "Reduce the time spent copying the same customer, job, file, and order information between disconnected systems.",
  },
  {
    title: "Cleaner job intake",
    text: "Collect better information upfront so jobs are not delayed by missing specs, unclear details, or repeated follow-ups.",
  },
  {
    title: "Better file organization",
    text: "Create consistent file structures, routing rules, and workflows so your team knows where things are and what happens next.",
  },
  {
    title: "Scalable print operations",
    text: "Handle more order volume, more customers, and more complexity without immediately adding the same amount of overhead.",
  },
];

const industries = [
  {
    title: "Print Shops",
    text: "Order intake, proofs, artwork, prepress, production handoffs, shipping, reporting, and shop floor visibility.",
  },
  {
    title: "Web-to-Print & Storefronts",
    text: "Website support, customer portals, product setup, ecommerce workflows, and storefront-to-production connections.",
  },
  {
    title: "Production-Focused Businesses",
    text: "Connected workflows for teams that need customer requests, files, systems, production data, and support processes to move together.",
  },
];

const printCapabilities = [
  "Web-to-print storefronts",
  "Workflow Automation",
  "Order intake workflows",
  "File routing and organization",
  "Proof and approval workflows",
  "Prepress and production handoffs",
  "MIS and storefront integrations",
  "Reporting and workflow visibility",
  "Ongoing technical support",
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7">
      {name === "strategy" && (
        <>
          <path {...common} d="M5 25V11l11-6 11 6v14" />
          <path {...common} d="M10 25v-8h12v8M12 12h8" />
        </>
      )}
      {name === "integration" && (
        <>
          <rect {...common} x="3.5" y="5" width="9" height="8" rx="2" />
          <rect {...common} x="19.5" y="19" width="9" height="8" rx="2" />
          <path
            {...common}
            d="M12.5 9h5a4 4 0 0 1 4 4v6M19.5 23h-5a4 4 0 0 1-4-4v-6"
          />
        </>
      )}
      {name === "workflow" && (
        <>
          <circle {...common} cx="7" cy="8" r="3" />
          <circle {...common} cx="25" cy="24" r="3" />
          <rect {...common} x="12" y="12" width="8" height="8" rx="2" />
          <path {...common} d="M10 8h6v4M20 16h5v5M7 11v9a4 4 0 0 0 4 4h11" />
        </>
      )}
      {name === "ai" && (
        <>
          <rect {...common} x="7" y="7" width="18" height="18" rx="4" />
          <path {...common} d="M12 19l2.8-7h2.4l2.8 7M13.2 16h5.6M22 12v7" />
          <path
            {...common}
            d="M11 3v4M21 3v4M11 25v4M21 25v4M3 11h4M25 11h4M3 21h4M25 21h4"
          />
        </>
      )}
      {name === "platform" && (
        <>
          <rect {...common} x="4" y="5" width="24" height="18" rx="3" />
          <path {...common} d="M4 10h24M12 28h8M16 23v5" />
          <circle cx="8" cy="7.5" r=".8" fill="currentColor" />
          <circle cx="11" cy="7.5" r=".8" fill="currentColor" />
        </>
      )}
      {name === "support" && (
        <>
          <path {...common} d="M16 4a12 12 0 1 0 12 12" />
          <path {...common} d="M16 9a7 7 0 1 0 7 7" />
          <path {...common} d="M16 14a2 2 0 1 0 2 2" />
          <path {...common} d="M22 4v6h6M21 11l7-7" />
        </>
      )}
    </svg>
  );
}

export default async function Home() {
  const user = await currentUser();
  const isSignedIn = !!user;
  return (
    <main
      id="top"
      className="site-shell min-h-screen overflow-hidden bg-[#f4f7f8] text-[#082c43]"
    >
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06283d]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            aria-label="Foundation Automation home"
            className="relative z-10 flex items-center"
          >
            <img
              src="/images/FA_Logo_White_Long2.png"
              alt="Foundation Automation"
              className="h-[62px] w-auto object-contain sm:h-[68px]"
            />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {[
              ["Expertise", "#expertise"],
              ["Approach", "#approach"],
              ["Impact", "#impact"],
              ["Industries", "#industries"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="nav-link text-sm font-medium text-white/78"
              >
                {label}
              </a>
            ))}

            {isSignedIn ? (
              <>
                <a
                  href="/account"
                  className="nav-link text-sm font-medium text-white/78"
                >
                  Account
                </a>
                <UserButton />
              </>
            ) : (
              <a
                href="/client-sign-in"
                className="nav-link text-sm font-medium text-white/78"
              >
                Client Login
              </a>
            )}

            <a
              href="/contact"
              className="header-cta group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#07324b]"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </nav>

          <details className="mobile-menu relative lg:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 text-white"
            >
              <span className="sr-only">Open menu</span>
              <span className="menu-icon" aria-hidden="true">
                <i />
                <i />
              </span>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 w-[min(88vw,330px)] rounded-2xl border border-white/10 bg-[#06283d] p-3 shadow-2xl"
            >
              {[
                ["Expertise", "#expertise"],
                ["Approach", "#approach"],
                ["Impact", "#impact"],
                ["Industries", "#industries"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              ))}

              {isSignedIn ? (
                <a
                  href="/account"
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Account
                </a>
              ) : (
                <a
                  href="/client-sign-in"
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Client Login
                </a>
              )}
            </nav>
          </details>
        </div>
      </header>

      <section className="hero-section relative min-h-[860px] bg-[#06283d] pt-[78px] text-white lg:min-h-[900px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/images/hero-image.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div
          className="hero-grid absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[782px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid w-full items-end gap-14 lg:grid-cols-[1.45fr_.55fr]">
            <div className="max-w-5xl">
              <div className="hero-reveal hero-delay-1 mb-8 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.19em] text-white/85 backdrop-blur-md sm:text-sm">
                <span className="signal-dot" />
                Web-to-print, automation, integrations, and AI
              </div>

              <h1 className="hero-title hero-reveal hero-delay-2 max-w-[1100px] text-[clamp(3.35rem,7.2vw,7.2rem)] font-semibold leading-[.9] tracking-[-0.065em]">
                Modernize the workflows
                <span className="block text-white/55">
                  your print shop depends on.
                </span>
              </h1>

              <div className="hero-reveal hero-delay-3 mt-9 grid max-w-4xl gap-8 border-l border-white/24 pl-6 md:grid-cols-[1fr_auto] md:items-end md:pl-8">
                <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  Foundation Automation helps print businesses streamline
                  web-to-print, storefront, order intake, file management, and
                  production workflows through automation, integrations, AI, and
                  ongoing technical support.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="primary-button group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#07324b] sm:px-7"
                  >
                    Schedule a workflow review
                    <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#expertise"
                    className="secondary-button inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm"
                  >
                    Explore print solutions
                  </a>
                </div>
              </div>
            </div>

            <aside className="hero-reveal hero-delay-4 hidden justify-self-end lg:block">
              <div className="capability-panel w-[285px] rounded-[28px] border border-white/16 bg-[#06283d]/58 p-6 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7cd5e6]">
                  Built for print
                </p>
                <div className="mt-6 space-y-0">
                  {["Storefronts", "Orders", "Files", "Production", "AI"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-t border-white/12 py-4 first:border-t-0 first:pt-0"
                      >
                        <span className="text-base font-semibold text-white/90">
                          {item}
                        </span>
                        <span className="text-xs font-mono text-white/35">
                          0{index + 1}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/12 bg-[#06283d]/60 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <span>Print technology should move production forward</span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-white/75">
              <span>Discover</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#73d0e2] md:block" />
              <span>Design</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#73d0e2] md:block" />
              <span>Implement</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#73d0e2] md:block" />
              <span>Optimize</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f4f7f8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="section-kicker">The real challenge</p>
            <div className="mt-10 hidden h-px w-full bg-[#b9c9d0] lg:block" />
          </div>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.1rem)] font-semibold leading-[1.01] tracking-[-0.055em] text-[#082c43]">
              Most print shops do not need more disconnected tools. They need
              storefronts, order data, artwork, and production workflows to{" "}
              <span className="text-[#3c8ba2]">work together.</span>
            </h2>
            <div className="mt-10 grid gap-7 border-t border-[#b9c9d0] pt-8 sm:grid-cols-2">
              <p className="text-base leading-8 text-[#49616e]">
                Disconnected print systems create invisible costs: duplicate
                entry, missing job details, file confusion, approval delays,
                unclear handoffs, and teams spending too much time chasing
                information instead of producing work.
              </p>
              <p className="text-base leading-8 text-[#49616e]">
                We operate between print operations and technology. That means
                we do not stop at recommendations. We help map the workflow,
                connect the systems, build the solution, and support it as your
                shop grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="section-kicker">What we deliver</p>
              <p className="mt-5 max-w-md text-base leading-8 text-[#647984]">
                A connected set of services designed around real print shop
                problems: storefronts, files, orders, approvals, production
                handoffs, support, and visibility.
              </p>
            </div>
            <h2 className="text-[clamp(2.8rem,5.5vw,5.7rem)] font-semibold leading-[.98] tracking-[-0.06em] text-[#082c43]">
              Automation and integration.
              <br />
              <span className="text-[#8ba1aa]">
                Built for modern print businesses.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid border-l border-t border-[#d8e1e5] md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="service-card group relative min-h-[430px] border-b border-r border-[#d8e1e5] p-7 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#91a4ad]">
                    {service.number}
                  </span>
                  <span className="service-icon flex h-12 w-12 items-center justify-center rounded-full border border-[#bed0d7] text-[#12627e] transition-all duration-500 group-hover:border-[#12627e] group-hover:bg-[#12627e] group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </span>
                </div>
                <div className="mt-20">
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[#082c43]">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#607681]">
                    {service.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-[#d8e1e5] pt-6">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-semibold text-[#355565]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4fb2c8]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <div>
              <p className="section-kicker">Built for print businesses</p>
              <p className="mt-6 max-w-sm text-base leading-8 text-[#647984]">
                Your shop already has people, software, equipment, and customer
                expectations moving fast. The opportunity is making those pieces
                work together more reliably.
              </p>
            </div>
            <div>
              <h2 className="max-w-5xl text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[1.01] tracking-[-0.055em] text-[#082c43]">
                From customer request to production, your workflow should not
                depend on manual chasing.
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f737d]">
                Foundation Automation helps bridge the gaps between storefronts,
                order details, artwork, approvals, production notes, internal
                systems, and customer communication so your team can spend less
                time moving information and more time getting work produced.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {printCapabilities.map((item) => (
              <div
                key={item}
                className="group flex items-center justify-between rounded-2xl border border-[#cfdbdf] bg-white p-6 text-base font-bold text-[#0e3f5f] shadow-[0_15px_50px_rgba(8,44,67,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(8,44,67,.1)]"
              >
                <span>{item}</span>
                <ArrowIcon className="h-5 w-5 -rotate-45 text-[#9aabb2] transition duration-300 group-hover:rotate-0 group-hover:text-[#12627e]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 bg-[#06283d] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="section-kicker section-kicker-light">How we work</p>
            </div>
            <div>
              <h2 className="max-w-5xl text-[clamp(2.8rem,5.6vw,5.8rem)] font-semibold leading-[.98] tracking-[-0.06em]">
                From operational friction to a system your team can trust.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                Every engagement is grounded in the way your shop actually runs.
                We combine workflow analysis, technical implementation,
                storefront support, integration work, and long term operational
                improvement.
              </p>
            </div>
          </div>

          <div className="process-grid relative mt-20 grid gap-0 border-t border-white/15 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="process-card relative border-b border-white/15 px-0 py-9 md:px-7 xl:border-b-0 xl:border-r xl:px-8 first:pl-0 last:border-r-0"
              >
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#6fc6d8]">
                  {step.number}
                </span>
                <h3 className="mt-14 text-3xl font-semibold tracking-[-0.035em]">
                  {step.title}
                </h3>
                <p className="mt-5 text-[15px] leading-7 text-white/55">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="scroll-mt-24 bg-[#edf2f4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-kicker">Designed for impact</p>
              <h2 className="mt-8 max-w-xl text-[clamp(2.7rem,4.7vw,5rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#082c43]">
                Better workflows change how the whole print business performs.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f737d] lg:justify-self-end">
              The goal is not automation for the sake of automation. The goal is
              a print operation that runs with fewer manual steps, cleaner job
              information, stronger consistency, better visibility, and more
              capacity for growth.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <article
                key={outcome.title}
                className="outcome-card group rounded-[26px] border border-[#cfdbdf] bg-white p-7 shadow-[0_15px_50px_rgba(8,44,67,.04)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(8,44,67,.11)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f2f5] font-mono text-xs font-bold text-[#12627e]">
                    0{index + 1}
                  </span>
                  <ArrowIcon className="h-5 w-5 -rotate-45 text-[#9aabb2] transition duration-300 group-hover:rotate-0 group-hover:text-[#12627e]" />
                </div>
                <h3 className="mt-20 text-2xl font-semibold tracking-[-0.03em] text-[#082c43]">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#647984]">
                  {outcome.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="industries"
        className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="section-kicker">Where we create value</p>
              <p className="mt-6 max-w-sm text-base leading-8 text-[#647984]">
                Our strongest work is in print environments where storefronts,
                files, customer requests, job information, production, and
                support all need to move together.
              </p>
            </div>
            <div className="border-t border-[#ccd8dd]">
              {industries.map((industry, index) => (
                <article
                  key={industry.title}
                  className="industry-row group grid gap-5 border-b border-[#ccd8dd] py-8 sm:grid-cols-[75px_1fr_1fr_auto] sm:items-center"
                >
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#93a5ad]">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#082c43] transition group-hover:translate-x-2">
                    {industry.title}
                  </h3>
                  <p className="max-w-md text-[15px] leading-7 text-[#647984]">
                    {industry.text}
                  </p>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bfd0d7] text-[#12627e] transition group-hover:border-[#12627e] group-hover:bg-[#12627e] group-hover:text-white">
                    <ArrowIcon className="h-5 w-5 -rotate-45 transition group-hover:rotate-0" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a354e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div
          className="cta-grid absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="cta-glow absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#4ab1c8]/20 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <div>
            <p className="section-kicker section-kicker-light">
              Start with the right problem
            </p>
            <h2 className="mt-8 max-w-5xl text-[clamp(3rem,6.2vw,6.4rem)] font-semibold leading-[.92] tracking-[-0.065em]">
              Your print shop’s next stage of growth needs a stronger workflow
              foundation.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg leading-8 text-white/62">
              Tell us where jobs are getting stuck, where systems are
              disconnected, or where your team is losing time. We will help you
              identify the most valuable place to begin.
            </p>
            <a
              href="/contact"
              className="primary-button group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#07324b]"
            >
              Contact
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#041f30] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 border-b border-white/12 pb-9 md:flex-row md:items-center md:justify-between">
            <a href="#top" aria-label="Foundation Automation home">
              <img
                src="/images/FA_Logo_White_Long2.png"
                alt="Foundation Automation"
                className="h-16 w-auto object-contain"
              />
            </a>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/65"
            >
              <a className="transition hover:text-white" href="#expertise">
                Expertise
              </a>
              <a className="transition hover:text-white" href="#approach">
                Approach
              </a>
              <a className="transition hover:text-white" href="#impact">
                Impact
              </a>
              <a className="transition hover:text-white" href="#industries">
                Industries
              </a>
              <a className="transition hover:text-white" href="/contact">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Foundation Automation. All rights
              reserved.
            </p>
            <p>
              Print workflow automation • Web-to-print support • Systems
              integration
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}