"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./gibson-demo.module.css";

const services = [
  {
    number: "01",
    title: "Catalogs & Publications",
    description:
      "Polished catalogs, manuals, newsletters, and publications produced with consistent color and dependable finishing.",
    tag: "Multi-page print",
  },
  {
    number: "02",
    title: "Labels & Packaging",
    description:
      "Product labels and packaging pieces designed to look sharp on the shelf and stay consistent across every run.",
    tag: "Brand-ready",
  },
  {
    number: "03",
    title: "Banners & Show Graphics",
    description:
      "Large-format graphics, event displays, and banners that help brands stand out from across the room.",
    tag: "Large format",
  },
  {
    number: "04",
    title: "Business Essentials",
    description:
      "Business cards, stationery, sales sheets, and everyday print materials that keep teams looking professional.",
    tag: "Everyday print",
  },
  {
    number: "05",
    title: "Branded Merchandise",
    description:
      "Apparel and promotional products that turn logos into memorable, useful brand experiences.",
    tag: "Promotional",
  },
  {
    number: "06",
    title: "Custom Print Projects",
    description:
      "A flexible path for unique sizes, materials, finishing, kitting, and projects that do not fit a standard template.",
    tag: "Built around you",
  },
];

const steps = [
  {
    label: "Tell us what you need",
    text: "Choose a product, share specifications, and upload artwork through one clean request.",
  },
  {
    label: "Review your proof",
    text: "Approve the details with a clear digital proof before anything moves into production.",
  },
  {
    label: "We produce and deliver",
    text: "Your project moves forward with fewer emails, clearer updates, and one accountable print partner.",
  },
];

const featuredProducts = [
  "Catalogs",
  "Labels",
  "Packaging",
  "Business Cards",
  "Large Format",
  "Branded Merchandise",
  "Custom Projects",
];

export default function GibsonDemoClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!quoteOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuoteOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [quoteOpen]);

  const openQuote = () => {
    setSubmitted(false);
    setQuoteOpen(true);
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.site}>
      <div className={styles.demoRibbon}>
        <span>Private website concept</span>
        <span className={styles.ribbonDivider} />
        <span>Prepared by Foundation Automation</span>
      </div>

      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="Gibson Print Source home">
          <span className={styles.logoMain}>Gibson</span>
          <span className={styles.logoSub}>PRINT SOURCE</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Capabilities
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <button type="button" className={styles.navCta} onClick={openQuote}>
            Start a project
          </button>
        </nav>
      </header>

      <main>
        <section className={styles.hero} id="top">
          <div className={styles.heroNoise} />
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Print expertise, made easier
            </div>

            <h1>
              Print that makes
              <span> your brand impossible to overlook.</span>
            </h1>

            <p className={styles.heroText}>
              From everyday business essentials to custom publications,
              packaging, displays, and branded merchandise, Gibson Print Source
              helps turn ideas into polished physical experiences.
            </p>

            <div className={styles.heroActions}>
              <button type="button" className={styles.primaryButton} onClick={openQuote}>
                Request a quote
                <span aria-hidden="true">↗</span>
              </button>
              <a className={styles.secondaryButton} href="#services">
                Explore capabilities
              </a>
            </div>

            <div className={styles.heroProof}>
              <div>
                <strong>One partner</strong>
                <span>from concept to delivery</span>
              </div>
              <div>
                <strong>Clear process</strong>
                <span>with fewer back-and-forth emails</span>
              </div>
              <div>
                <strong>Flexible production</strong>
                <span>for routine and custom work</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="Animated print product preview">
            <div className={styles.visualGrid} />
            <div className={styles.visualHalo} />

            <div className={styles.mockupBoard}>
              <div className={styles.boardHeader}>
                <span className={styles.boardChip}>Print collection</span>
                <div className={styles.boardControls}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.boardGrid}>
                <div className={styles.boardFeature}>
                  <div className={styles.featureSheet}>
                    <div className={styles.featureSheetInner}>
                      <span className={styles.featureTag}>Catalog</span>
                      <div className={styles.featureLines}>
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className={styles.featureDiagonal} />
                    </div>
                  </div>

                  <div className={styles.featureAccent}>
                    <div className={styles.featureAccentBlock} />
                    <div className={styles.featureAccentLines}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.featureMiniSwatches}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className={styles.boardSidebar}>
                  <div className={styles.labelPanel}>
                    <span className={styles.panelTag}>Labels</span>
                    <div className={styles.labelGrid}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.bannerPanel}>
                    <span className={styles.panelTag}>Large format</span>
                    <div className={styles.bannerPreview}>
                      <div className={styles.bannerPreviewBar}>Show graphics</div>
                      <div className={styles.bannerPreviewLines}>
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.floatingSwatches}>
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className={styles.orbitOne} />
            <div className={styles.orbitTwo} />
          </div>
        </section>

        <section className={styles.marqueeSection} aria-label="Featured print products">
          <div className={styles.marqueeTrack}>
            {[0, 1].map((groupIndex) => (
              <div
                className={styles.marqueeGroup}
                aria-hidden={groupIndex === 1}
                key={groupIndex}
              >
                {[...featuredProducts, ...featuredProducts].map(
                  (product, productIndex) => (
                    <div
                      className={styles.marqueeItem}
                      key={`${groupIndex}-${product}-${productIndex}`}
                    >
                      <span>{product}</span>
                      <i />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.servicesSection} id="services">
          <div className={`${styles.sectionIntro} ${styles.reveal}`}>
            <div>
              <span className={styles.sectionKicker}>Capabilities</span>
              <h2>Everything your brand needs to show up consistently.</h2>
            </div>
            <p>
              A clearer service structure helps customers quickly understand
              what Gibson can produce, then move directly into a quote or
              artwork-upload workflow.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article
                className={`${styles.serviceCard} ${styles.reveal}`}
                style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
                key={service.title}
              >
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <span className={styles.serviceArrow}>↗</span>
                </div>
                <span className={styles.serviceTag}>{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.experienceSection} id="experience">
          <div className={`${styles.experienceCopy} ${styles.reveal}`}>
            <span className={styles.sectionKicker}>A better customer experience</span>
            <h2>Modern on the outside. More efficient behind the scenes.</h2>
            <p>
              The strongest redesign does more than look current. It gives
              customers a simpler way to browse, request pricing, upload files,
              approve proofs, and understand what happens next.
            </p>

            <ul className={styles.checkList}>
              <li>
                <span>01</span>
                Product paths organized around how customers actually shop
              </li>
              <li>
                <span>02</span>
                Quote requests that collect usable production information
              </li>
              <li>
                <span>03</span>
                Clear next steps for artwork, proofs, payment, and delivery
              </li>
            </ul>
          </div>

          <div className={`${styles.workflowPreview} ${styles.reveal}`}>
            <div className={styles.previewHeader}>
              <div>
                <span className={styles.previewDot} />
                <span className={styles.previewDot} />
                <span className={styles.previewDot} />
              </div>
              <span>New project request</span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.previewStatus}>
                <span>Project setup</span>
                <strong>75% complete</strong>
              </div>
              <div className={styles.progressTrack}>
                <span />
              </div>

              <div className={styles.previewFields}>
                <div>
                  <small>Product</small>
                  <strong>Custom product catalog</strong>
                </div>
                <div>
                  <small>Quantity</small>
                  <strong>2,500</strong>
                </div>
                <div>
                  <small>Artwork</small>
                  <strong className={styles.readyText}>Files uploaded</strong>
                </div>
                <div>
                  <small>Requested date</small>
                  <strong>August 14</strong>
                </div>
              </div>

              <div className={styles.previewAction}>
                <span>Ready for Gibson review</span>
                <button type="button" onClick={openQuote}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection} id="process">
          <div className={`${styles.processHeading} ${styles.reveal}`}>
            <span className={styles.sectionKicker}>Simple by design</span>
            <h2>A print process customers can understand at a glance.</h2>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article
                className={`${styles.step} ${styles.reveal}`}
                key={step.label}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className={styles.stepNumber}>0{index + 1}</span>
                <div className={styles.stepLine}>
                  <span />
                </div>
                <h3>{step.label}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={`${styles.aboutStatement} ${styles.reveal}`}>
            <span>GIBSON PRINT SOURCE</span>
            <p>
              A local print partner should feel knowledgeable, responsive, and
              easy to work with. This concept brings that same personal
              experience into a cleaner digital storefront.
            </p>
          </div>

          <div className={`${styles.aboutPanel} ${styles.reveal}`}>
            <div className={styles.aboutMark}>G</div>
            <div>
              <span className={styles.sectionKicker}>Built for real relationships</span>
              <h2>Professional print without the impersonal process.</h2>
              <p>
                The new site direction positions Gibson as a capable, modern
                production partner while keeping the approachable service that
                matters to small businesses and local organizations.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} id="quote">
          <div className={styles.ctaPattern} />
          <div className={`${styles.ctaContent} ${styles.reveal}`}>
            <span className={styles.sectionKicker}>Have a project in mind?</span>
            <h2>Let&apos;s make something worth holding onto.</h2>
            <p>
              Share the basics and Gibson can help shape the right materials,
              quantities, finishing, and production plan.
            </p>
            <button type="button" className={styles.lightButton} onClick={openQuote}>
              Start your project
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div>
            <a className={`${styles.logo} ${styles.footerLogo}`} href="#top">
              <span className={styles.logoMain}>Gibson</span>
              <span className={styles.logoSub}>PRINT SOURCE</span>
            </a>
            <p>
              Print, packaging, graphics, and branded materials produced with
              care and made easier to order.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div>
              <strong>Explore</strong>
              <a href="#services">Capabilities</a>
              <a href="#experience">Customer experience</a>
              <a href="#process">Our process</a>
            </div>
            <div>
              <strong>Get started</strong>
              <button type="button" onClick={openQuote}>
                Request a quote
              </button>
              <a href="#about">About Gibson</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Gibson Print Source LLC</span>
          <span>Private website concept by Foundation Automation</span>
        </div>
      </footer>

      {quoteOpen && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setQuoteOpen(false);
            }
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            <button
              type="button"
              className={styles.modalClose}
              aria-label="Close quote request"
              onClick={() => setQuoteOpen(false)}
            >
              ×
            </button>

            {!submitted ? (
              <>
                <span className={styles.sectionKicker}>Interactive demo</span>
                <h2 id="quote-modal-title">Start a print project</h2>
                <p className={styles.modalIntro}>
                  This sample form shows how the finished site could collect
                  cleaner project details before Gibson follows up.
                </p>

                <form className={styles.quoteForm} onSubmit={handleSubmit}>
                  <label>
                    Your name
                    <input name="name" type="text" placeholder="Jane Smith" required />
                  </label>

                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </label>

                  <label>
                    What are you looking to print?
                    <select name="product" defaultValue="" required>
                      <option value="" disabled>
                        Select a product
                      </option>
                      <option>Catalog or publication</option>
                      <option>Labels or packaging</option>
                      <option>Banner or show graphic</option>
                      <option>Business essentials</option>
                      <option>Branded merchandise</option>
                      <option>Custom project</option>
                    </select>
                  </label>

                  <div className={styles.formRow}>
                    <label>
                      Estimated quantity
                      <input name="quantity" type="text" placeholder="Example: 500" />
                    </label>
                    <label>
                      Needed by
                      <input name="deadline" type="date" />
                    </label>
                  </div>

                  <label>
                    Project notes
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Tell us about size, materials, finishing, delivery, or anything else that matters."
                    />
                  </label>

                  <button className={styles.formSubmit} type="submit">
                    Preview submission
                    <span aria-hidden="true">↗</span>
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successState} aria-live="polite">
                <div className={styles.successIcon}>✓</div>
                <span className={styles.sectionKicker}>Demo complete</span>
                <h2>That was the easy part.</h2>
                <p>
                  In the production version, this request could be routed to
                  Gibson&apos;s inbox, CRM, job-management platform, or an automated
                  follow-up workflow.
                </p>
                <button type="button" onClick={() => setQuoteOpen(false)}>
                  Return to the website
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
