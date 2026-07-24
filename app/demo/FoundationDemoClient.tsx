"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./foundation-demo.module.css";

const services = [
  {
    number: "01",
    title: "Workflow Automation",
    description:
      "Reduce repetitive tasks, manual handoffs, duplicate entry, and the day-to-day work that slows your team down.",
    label: "Less manual work",
  },
  {
    number: "02",
    title: "System Integration",
    description:
      "Connect the tools your business already uses so information moves between platforms without being re-entered.",
    label: "Connected systems",
  },
  {
    number: "03",
    title: "Operational Optimization",
    description:
      "Identify bottlenecks, simplify processes, and create a clearer operational flow from intake through completion.",
    label: "Better efficiency",
  },
  {
    number: "04",
    title: "AI Implementation",
    description:
      "Use practical AI for email handling, data processing, decision support, and other high-impact internal workflows.",
    label: "Practical AI",
  },
  {
    number: "05",
    title: "File & Order Management",
    description:
      "Create structured systems for files, jobs, orders, approvals, and production-ready handoffs.",
    label: "Cleaner handoffs",
  },
  {
    number: "06",
    title: "Websites & Storefronts",
    description:
      "Build modern websites, client storefronts, e-commerce experiences, and connected platforms that fit your operation.",
    label: "Modern experiences",
  },
];

const outcomes = [
  "Reduced manual workload and fewer errors",
  "Faster turnaround times and improved efficiency",
  "Better communication between systems and teams",
  "More scalable operations without additional staff",
  "Simplified and more organized workflows",
  "Better reporting and visibility into what is happening",
];

const process = [
  {
    title: "Discovery & Workflow Analysis",
    text: "We review your current systems, processes, and bottlenecks, then map how you want the operation to flow.",
  },
  {
    title: "Implementation",
    text: "We design and implement the highest-impact automations, integrations, website improvements, and system changes first.",
  },
  {
    title: "Ongoing Support",
    text: "We stay available for maintenance, improvements, new integrations, and additional automation as your business evolves.",
  },
];

const comparisonRows = [
  {
    label: "Commitment",
    hire: "Permanent annual payroll",
    foundation: "Project or support engagement",
  },
  {
    label: "Skill coverage",
    hire: "Usually one primary specialty",
    foundation: "Design, development, integration, automation, and operations",
  },
  {
    label: "Ramp-up",
    hire: "Recruiting, onboarding, training",
    foundation: "Start with discovery and defined priorities",
  },
  {
    label: "Scalability",
    hire: "More work may require more staff",
    foundation: "Expand the system without immediately expanding payroll",
  },
];

export default function FoundationDemoClient() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [salary, setSalary] = useState(85000);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(`.${styles.reveal}`);
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    const storyNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-story-step]")
    );

    let storyFrame = 0;

    const updateStoryStep = () => {
      window.cancelAnimationFrame(storyFrame);
      storyFrame = window.requestAnimationFrame(() => {
        if (!storyNodes.length) return;

        const focusLine = window.innerHeight * 0.52;
        let closestStep = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        storyNodes.forEach((node, index) => {
          const rect = node.getBoundingClientRect();
          const nodeCenter = rect.top + rect.height / 2;
          const distance = Math.abs(nodeCenter - focusLine);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestStep = index;
          }
        });

        setActiveStep(closestStep);
      });
    };

    updateStoryStep();
    window.addEventListener("scroll", updateStoryStep, { passive: true });
    window.addEventListener("resize", updateStoryStep);

    return () => {
      revealObserver.disconnect();
      window.cancelAnimationFrame(storyFrame);
      window.removeEventListener("scroll", updateStoryStep);
      window.removeEventListener("resize", updateStoryStep);
    };
  }, []);

  const loadedCost = useMemo(() => Math.round(salary * 1.25), [salary]);
  const monthlyCost = useMemo(() => Math.round(loadedCost / 12), [loadedCost]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className={styles.demoPage}>
      <div className={styles.progressBar} aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <main>
        <section className={styles.hero} id="demo-top">
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span />
              Foundation Automation interactive walkthrough
            </div>

            <h1>
              Modernize the way your business works
              <em> without enterprise-sized overhead.</em>
            </h1>

            <p>
              We help businesses automate workflows, connect systems, integrate AI,
              improve operations, and build modern digital experiences without forcing
              them into oversized software stacks or unnecessary payroll.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#the-problem">
                Begin the walkthrough
                <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.secondaryButton} href="#cost-comparison">
                Compare the cost
              </a>
            </div>

            <div className={styles.heroMetrics}>
              <div>
                <strong>One partner</strong>
                <span>Strategy through implementation</span>
              </div>
              <div>
                <strong>Built around you</strong>
                <span>No forced one-size-fits-all stack</span>
              </div>
              <div>
                <strong>Designed to scale</strong>
                <span>Improve operations before adding overhead</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="Foundation Automation workflow preview">
            <div className={styles.brandMark}>
              <div className={styles.brandBars}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.brandCircuit}>
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className={styles.systemWindow}>
              <div className={styles.windowHeader}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <small>Connected Operations</small>
              </div>

              <div className={styles.systemCanvas}>
                <div className={`${styles.systemNode} ${styles.nodeOne}`}>
                  <span>01</span>
                  <strong>Customer request</strong>
                  <small>Form, email, order, or file</small>
                </div>
                <div className={`${styles.systemNode} ${styles.nodeTwo}`}>
                  <span>02</span>
                  <strong>Automated routing</strong>
                  <small>Rules, data, approvals</small>
                </div>
                <div className={`${styles.systemNode} ${styles.nodeThree}`}>
                  <span>03</span>
                  <strong>Team visibility</strong>
                  <small>Status, reporting, next step</small>
                </div>

                <div className={`${styles.connector} ${styles.connectorOne}`}>
                  <span />
                </div>
                <div className={`${styles.connector} ${styles.connectorTwo}`}>
                  <span />
                </div>
              </div>
            </div>

            <div className={styles.floatingCardOne}>
              <span>Manual steps removed</span>
              <strong>12</strong>
            </div>
            <div className={styles.floatingCardTwo}>
              <span>Workflow status</span>
              <strong>Connected</strong>
            </div>
          </div>
        </section>

        <section className={styles.problemSection} id="the-problem">
          <div className={`${styles.sectionHeading} ${styles.reveal}`}>
            <span className={styles.kicker}>The problem</span>
            <h2>Small inefficiencies become expensive systems of work.</h2>
            <p>
              Most operational problems do not begin as major failures. They begin as
              repeated emails, duplicated data entry, disconnected software, lost files,
              unclear ownership, and work that only one person knows how to complete.
            </p>
          </div>

          <div className={styles.problemGrid}>
            <article className={`${styles.problemCard} ${styles.reveal}`}>
              <span className={styles.cardNumber}>01</span>
              <h3>Manual work keeps growing</h3>
              <p>As volume increases, the same repetitive process takes more people and more time.</p>
              <div className={styles.miniWorkload}>
                <span style={{ height: "28%" }} />
                <span style={{ height: "42%" }} />
                <span style={{ height: "64%" }} />
                <span style={{ height: "88%" }} />
              </div>
            </article>

            <article className={`${styles.problemCard} ${styles.reveal}`}>
              <span className={styles.cardNumber}>02</span>
              <h3>Systems do not communicate</h3>
              <p>Teams copy information between email, spreadsheets, software, folders, and websites.</p>
              <div className={styles.disconnectedGraphic}>
                <span />
                <span />
                <span />
              </div>
            </article>

            <article className={`${styles.problemCard} ${styles.reveal}`}>
              <span className={styles.cardNumber}>03</span>
              <h3>Visibility arrives too late</h3>
              <p>Issues are discovered after deadlines slip instead of while there is still time to act.</p>
              <div className={styles.visibilityGraphic}>
                <span />
                <i />
              </div>
            </article>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyVisualWrap}>
            <div className={styles.storyVisual}>
              <div className={styles.storyTopline}>
                <span>Transformation preview</span>
                <strong>0{activeStep + 1} / 03</strong>
              </div>

              <div className={styles.storyScreen}>
                <div className={`${styles.storyScene} ${activeStep === 0 ? styles.sceneActive : ""}`}>
                  <div className={styles.inboxScene}>
                    <div className={styles.sceneSidebar} />
                    <div className={styles.emailStack}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className={styles.storyCaption}>
                    <small>Before</small>
                    <strong>Requests arrive everywhere.</strong>
                  </div>
                </div>

                <div className={`${styles.storyScene} ${activeStep === 1 ? styles.sceneActive : ""}`}>
                  <div className={styles.flowScene}>
                    <div className={styles.flowNode}>Intake</div>
                    <span className={styles.flowArrow}>→</span>
                    <div className={styles.flowNode}>Rules</div>
                    <span className={styles.flowArrow}>→</span>
                    <div className={styles.flowNode}>Action</div>
                  </div>
                  <div className={styles.storyCaption}>
                    <small>During</small>
                    <strong>The process becomes structured.</strong>
                  </div>
                </div>

                <div className={`${styles.storyScene} ${activeStep === 2 ? styles.sceneActive : ""}`}>
                  <div className={styles.dashboardScene}>
                    <div className={styles.dashboardMetric}>
                      <span>Open work</span>
                      <strong>18</strong>
                    </div>
                    <div className={styles.dashboardMetric}>
                      <span>On track</span>
                      <strong>94%</strong>
                    </div>
                    <div className={styles.dashboardRows}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className={styles.storyCaption}>
                    <small>After</small>
                    <strong>Your team knows what happens next.</strong>
                  </div>
                </div>
              </div>

              <div className={styles.storyDots}>
                {[0, 1, 2].map((index) => (
                  <span className={activeStep === index ? styles.dotActive : ""} key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.storySteps}>
            <article
              data-story-step="0"
              className={`${styles.storyStep} ${activeStep === 0 ? styles.storyStepActive : ""}`}
            >
              <span className={styles.kicker}>Step 01</span>
              <h2>Find the work that should not require a person.</h2>
              <p>
                We start by identifying repetitive tasks, duplicate entry, unclear handoffs,
                bottlenecks, and places where your team is compensating for disconnected systems.
              </p>
            </article>

            <article
              data-story-step="1"
              className={`${styles.storyStep} ${activeStep === 1 ? styles.storyStepActive : ""}`}
            >
              <span className={styles.kicker}>Step 02</span>
              <h2>Connect the process instead of replacing everything.</h2>
              <p>
                The best solution may combine automation, integration, a new interface,
                improved file handling, and practical AI around the tools you already use.
              </p>
            </article>

            <article
              data-story-step="2"
              className={`${styles.storyStep} ${activeStep === 2 ? styles.storyStepActive : ""}`}
            >
              <span className={styles.kicker}>Step 03</span>
              <h2>Create a system your team can actually operate.</h2>
              <p>
                The finished workflow should be easier to understand, easier to manage,
                and more scalable without relying on additional people for every increase in volume.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.servicesSection} id="capabilities">
          <div className={`${styles.sectionHeading} ${styles.reveal}`}>
            <span className={styles.kicker}>What we build</span>
            <h2>One partner across design, systems, automation, and operations.</h2>
            <p>
              Instead of coordinating separate designers, developers, software vendors,
              and consultants, Foundation Automation can design the full experience around
              one operational goal.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <article
                className={`${styles.serviceCard} ${styles.reveal}`}
                style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
                key={service.title}
              >
                <div className={styles.serviceTopline}>
                  <span>{service.number}</span>
                  <i>↗</i>
                </div>
                <div className={styles.serviceBottom}>
                  <small>{service.label}</small>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workflowSection}>
          <div className={`${styles.workflowCopy} ${styles.reveal}`}>
            <span className={styles.kicker}>A connected operation</span>
            <h2>Turn scattered actions into one visible flow.</h2>
            <p>
              A project can begin with a website request, email, order, uploaded file, or
              internal task. From there, information can be validated, routed, updated,
              and reported without your team manually rebuilding the same job in every system.
            </p>

            <div className={styles.outcomeList}>
              {outcomes.map((outcome, index) => (
                <div key={outcome}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{outcome}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.workflowBoard} ${styles.reveal}`}>
            <div className={styles.boardHeader}>
              <div>
                <span />
                <span />
                <span />
              </div>
              <small>Automation map</small>
            </div>

            <div className={styles.boardCanvas}>
              <div className={`${styles.boardNode} ${styles.boardNodeA}`}>
                <small>Input</small>
                <strong>Website / Email</strong>
              </div>
              <div className={`${styles.boardNode} ${styles.boardNodeB}`}>
                <small>Process</small>
                <strong>Validation & Routing</strong>
              </div>
              <div className={`${styles.boardNode} ${styles.boardNodeC}`}>
                <small>System</small>
                <strong>MIS / CRM / Files</strong>
              </div>
              <div className={`${styles.boardNode} ${styles.boardNodeD}`}>
                <small>Output</small>
                <strong>Status & Reporting</strong>
              </div>

              <div className={`${styles.boardLine} ${styles.lineA}`}><span /></div>
              <div className={`${styles.boardLine} ${styles.lineB}`}><span /></div>
              <div className={`${styles.boardLine} ${styles.lineC}`}><span /></div>
            </div>
          </div>
        </section>

        <section className={styles.costSection} id="cost-comparison">
          <div className={`${styles.costIntro} ${styles.reveal}`}>
            <span className={styles.kicker}>A lower-overhead model</span>
            <h2>Get the capabilities without immediately adding another full-time salary.</h2>
            <p>
              Hiring a full-time designer, developer, or automation specialist can create a
              permanent annual cost before the first project is delivered. Foundation Automation
              is scoped around the work your business actually needs.
            </p>
          </div>

          <div className={styles.costLayout}>
            <div className={`${styles.costCalculator} ${styles.reveal}`}>
              <div className={styles.costCalculatorHeader}>
                <span>Internal hire cost example</span>
                <strong>{formatMoney(loadedCost)} / year</strong>
              </div>

              <label htmlFor="salary-range">
                Base salary assumption
                <strong>{formatMoney(salary)}</strong>
              </label>
              <input
                id="salary-range"
                type="range"
                min="70000"
                max="100000"
                step="2500"
                value={salary}
                onChange={(event) => setSalary(Number(event.target.value))}
              />

              <div className={styles.costScale}>
                <span>$70K</span>
                <span>$100K</span>
              </div>

              <div className={styles.costBreakdown}>
                <div>
                  <span>Estimated monthly employer cost</span>
                  <strong>{formatMoney(monthlyCost)}</strong>
                </div>
                <div>
                  <span>Estimated loaded annual cost</span>
                  <strong>{formatMoney(loadedCost)}</strong>
                </div>
              </div>

              <p>
                Illustration uses a 25% loading factor for taxes, benefits, and overhead.
                Actual employment costs vary by role and company.
              </p>
            </div>

            <div className={`${styles.costAlternative} ${styles.reveal}`}>
              <span className={styles.costBadge}>Foundation Automation</span>
              <h3>Pay for the solution, not a permanent seat.</h3>
              <p>
                Engagements are custom-scoped around priority, impact, and the systems that
                need to be improved. That gives smaller businesses access to broader capabilities
                without taking on a full-time designer, developer, integrator, and operations hire.
              </p>

              <div className={styles.costHighlights}>
                <div>
                  <strong>Custom scope</strong>
                  <span>Built around your highest-impact needs</span>
                </div>
                <div>
                  <strong>Broader coverage</strong>
                  <span>Design, development, automation, and integration</span>
                </div>
                <div>
                  <strong>Flexible support</strong>
                  <span>Implementation first, ongoing help when needed</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.comparisonTable} ${styles.reveal}`}>
            <div className={styles.comparisonHeader}>
              <span />
              <strong>Hiring internally</strong>
              <strong>Foundation Automation</strong>
            </div>
            {comparisonRows.map((row) => (
              <div className={styles.comparisonRow} key={row.label}>
                <strong>{row.label}</strong>
                <span>{row.hire}</span>
                <span>{row.foundation}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.processSection} id="process">
          <div className={`${styles.processIntro} ${styles.reveal}`}>
            <span className={styles.kicker}>How it works</span>
            <h2>A clear path from operational problem to working solution.</h2>
          </div>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <article
                className={`${styles.processCard} ${styles.reveal}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                key={item.title}
              >
                <span>0{index + 1}</span>
                <div className={styles.processLine}><i /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaGrid} />
          <div className={`${styles.ctaContent} ${styles.reveal}`}>
            <span className={styles.kicker}>Your next step</span>
            <h2>Show us where the work gets stuck.</h2>
            <p>
              We will help identify the highest-impact opportunity and map a practical path
              toward a faster, cleaner, more connected operation.
            </p>
            <div className={styles.ctaActions}>
              <a href="mailto:derekc@foundationautomation.org" className={styles.ctaPrimary}>
                Start a conversation
                <span>↗</span>
              </a>
              <a href="tel:+17244213542" className={styles.ctaSecondary}>
                (724) 421-3542
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
