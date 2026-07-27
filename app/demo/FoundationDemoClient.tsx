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

const transformationSteps = [
  {
    phase: "Discover",
    title: "Find the work your team should not have to repeat.",
    text:
      "We identify repetitive tasks, duplicate entry, unclear handoffs, bottlenecks, and disconnected systems that consume time your team could be spending on customers, production, and growth.",
    caption: "Hidden friction becomes visible.",
    highlights: [
      "Map how work moves today",
      "Identify avoidable repetition",
      "Prioritize high-impact improvements",
    ],
  },
  {
    phase: "Connect",
    title: "Connect the tools, people, and information already in place.",
    text:
      "We design a practical solution around the systems that already support your business, combining automation, integrations, improved file handling, cleaner interfaces, and AI where it provides real value.",
    caption: "The process becomes one connected workflow.",
    highlights: [
      "Connect existing platforms",
      "Improve routing and communication",
      "Create clear and consistent next steps",
    ],
  },
  {
    phase: "Operate",
    title: "Give your team a clearer system and a partner behind it.",
    text:
      "Your team gets a repeatable workflow with better visibility, clear ownership, and less administrative friction. Foundation Automation remains available for support, improvements, and new opportunities as your business evolves.",
    caption: "Your team stays informed, supported, and ready for what comes next.",
    highlights: [
      "Clear ownership and visibility",
      "Ongoing support when needed",
      "A system that grows with the business",
    ],
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


        <section className={styles.journeySection} id="walkthrough">
          <div className={`${styles.journeyIntro} ${styles.reveal}`}>
            <span className={styles.kicker}>How transformation happens</span>
            <h2>Watch scattered work become a connected operation.</h2>
            <p>
              The goal is not to add more software for the sake of it. The goal is to
              understand the work, connect the right pieces, and leave your team with a
              system that feels simpler every time they use it.
            </p>
          </div>

          <div className={styles.journeyLayout}>
            <div className={styles.journeyStageWrap}>
              <div className={styles.journeyStage}>
                <div className={styles.journeyStageHeader}>
                  <span>Live workflow preview</span>
                  <strong>0{activeStep + 1} / 03</strong>
                </div>

                <div className={styles.journeyProgress} aria-hidden="true">
                  <span style={{ width: `${((activeStep + 1) / 3) * 100}%` }} />
                </div>

                <div className={styles.journeyViewport}>
                  <div
                    className={`${styles.journeyScene} ${
                      activeStep === 0 ? styles.journeySceneActive : ""
                    }`}
                  >
                    <div className={styles.scatterCanvas}>
                      <div className={`${styles.scatterItem} ${styles.scatterEmail}`}>
                        <small>Email</small>
                        <strong>New request</strong>
                      </div>
                      <div className={`${styles.scatterItem} ${styles.scatterSheet}`}>
                        <small>Spreadsheet</small>
                        <strong>Job details</strong>
                      </div>
                      <div className={`${styles.scatterItem} ${styles.scatterFiles}`}>
                        <small>Files</small>
                        <strong>Artwork folder</strong>
                      </div>
                      <div className={`${styles.scatterItem} ${styles.scatterApproval}`}>
                        <small>Approval</small>
                        <strong>Waiting on reply</strong>
                      </div>
                      <div className={styles.scatterCenter}>
                        <span />
                        <strong>Disconnected handoffs</strong>
                        <small>Important details are spread across people and systems</small>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.journeyScene} ${
                      activeStep === 1 ? styles.journeySceneActive : ""
                    }`}
                  >
                    <div className={styles.routeCanvas}>
                      <div className={styles.routeTrack}>
                        <span className={styles.routeTrackFill} />
                        <i className={`${styles.routeDot} ${styles.routeDotOne}`} />
                        <i className={`${styles.routeDot} ${styles.routeDotTwo}`} />
                        <i className={`${styles.routeDot} ${styles.routeDotThree}`} />
                      </div>

                      {[
                        ["01", "Intake", "Request captured"],
                        ["02", "Validate", "Details checked"],
                        ["03", "Route", "Right system updated"],
                        ["04", "Notify", "Team sees next step"],
                      ].map(([number, title, detail]) => (
                        <div className={styles.routeNode} key={number}>
                          <span>{number}</span>
                          <strong>{title}</strong>
                          <small>{detail}</small>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${styles.journeyScene} ${
                      activeStep === 2 ? styles.journeySceneActive : ""
                    }`}
                  >
                    <div className={styles.resultCanvas}>
                      <div className={styles.resultMetrics}>
                        <div>
                          <small>On track</small>
                          <strong>94%</strong>
                          <span className={styles.metricLine}><i style={{ width: "94%" }} /></span>
                        </div>
                        <div>
                          <small>Repetitive steps streamlined</small>
                          <strong>12</strong>
                          <span className={styles.metricLine}><i style={{ width: "76%" }} /></span>
                        </div>
                        <div>
                          <small>Workflow status</small>
                          <strong className={styles.connectedStatus}>Connected</strong>
                          <span className={styles.metricLine}><i style={{ width: "100%" }} /></span>
                        </div>
                      </div>

                      <div className={styles.activityPanel}>
                        <div className={styles.activityHeader}>
                          <span>Current work</span>
                          <small>Live view</small>
                        </div>
                        {["Request received", "Files validated", "Production notified"].map(
                          (label, index) => (
                            <div className={styles.activityRow} key={label}>
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              <strong>{label}</strong>
                              <i />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.journeyStageFooter}>
                  <div>
                    <small>{transformationSteps[activeStep].phase}</small>
                    <strong>{transformationSteps[activeStep].caption}</strong>
                  </div>
                  <span>Scroll to continue ↓</span>
                </div>
              </div>
            </div>

            <div className={styles.journeySteps}>
              {transformationSteps.map((step, index) => (
                <article
                  data-story-step={index}
                  className={`${styles.journeyStep} ${
                    activeStep === index ? styles.journeyStepActive : ""
                  }`}
                  key={step.phase}
                >
                  <div className={styles.journeyStepNumber}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i />
                  </div>
                  <span className={styles.kicker}>{step.phase}</span>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>

                  <div className={styles.stepHighlights}>
                    {step.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>

                  {index === 0 && (
                    <div className={`${styles.mobileJourneyVisual} ${styles.mobileScatter}`}>
                      <span>Email</span>
                      <span>Spreadsheet</span>
                      <span>Files</span>
                      <strong>Manual handoffs</strong>
                    </div>
                  )}

                  {index === 1 && (
                    <div className={`${styles.mobileJourneyVisual} ${styles.mobileRoute}`}>
                      <span>Intake</span>
                      <i />
                      <span>Validate</span>
                      <i />
                      <span>Route</span>
                    </div>
                  )}

                  {index === 2 && (
                    <div className={`${styles.mobileJourneyVisual} ${styles.mobileResult}`}>
                      <div><small>On track</small><strong>94%</strong></div>
                      <div><small>Status</small><strong>Connected</strong></div>
                      <span><i /></span>
                    </div>
                  )}
                </article>
              ))}
            </div>
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
