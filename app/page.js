import BackgroundCanvas from "./components/BackgroundCanvas";
import SectionShell from "./components/SectionShell";
import Logo from "./components/Logo";
import CTAButton from "./components/CTAButton";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundCanvas />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="section-container pt-6 sm:pt-8 lg:pt-9 flex items-center justify-between">
          <Logo />
          <nav className="hidden sm:flex items-center gap-7 text-[11px] uppercase tracking-[0.28em] text-adastra-muted/80">
            <a href="#what-is-ai" className="hover:text-white transition-colors">
              What is AI
            </a>
            <a href="#examples" className="hover:text-white transition-colors">
              Examples
            </a>
            <a href="#impact" className="hover:text-white transition-colors">
              Impact
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <main className="flex-1">
          <section className="section-container flex flex-col items-center justify-center py-24 sm:py-32 lg:py-40 text-center">
            <div className="max-w-3xl space-y-9">
              <Logo />
              <div className="space-y-3">
                <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.6rem] font-semibold tracking-tight leading-[1.05]">
                  Adastra Systems
                </h1>
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-adastra-muted/80">
                  AI Automation Services
                </p>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-adastra-muted leading-relaxed">
                Elegant, production-grade automation that connects your
                existing tools, reduces manual work, and unlocks scalable
                operational efficiency.
              </p>
              <div className="pt-2">
                <CTAButton>Book an appointment</CTAButton>
              </div>
            </div>
          </section>

          {/* WHAT IS AI AUTOMATION */}
          <SectionShell id="what-is-ai">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-[1.9rem] lg:text-[2.2rem] font-semibold tracking-tight mb-6">
                What Is AI Automation?
              </h2>
              <div className="space-y-4 text-sm sm:text-[0.97rem] lg:text-base text-adastra-muted leading-relaxed">
                <p>
                  AI automation uses intelligent systems to handle repetitive
                  tasks that would otherwise require manual effort. By
                  implementing automated workflows, businesses can reduce
                  manual data entry, streamline customer communications, and
                  process information at scale.
                </p>
                <p>
                  Modern automation tools can connect your existing software
                  platforms to create seamless processes that run
                  continuously with minimal supervision. From scheduling
                  appointments to generating reports, AI automation helps
                  reduce errors, save time, and support growth without a
                  proportional increase in staffing.
                </p>
                <p>
                  This technology allows your team to spend less time on
                  routine operations and more time on the work that drives
                  real value.
                </p>
              </div>
            </div>
          </SectionShell>

          {/* AUTOMATION DONE RIGHT */}
          <SectionShell id="technology">
            <div className="space-y-8">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight mb-3">
                  Automation done right
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  We work with a focused set of modern platforms that are
                  reliable, well-supported, and capable of powering robust
                  end-to-end automations.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                {[
                  { name: "OpenAI", iconSrc: "/images/openAI.png" },
                  { name: "Zapier", iconSrc: "/images/zapier.png" },
                  { name: "Python", iconSrc: "/images/python.png" },
                  { name: "Airtable", iconSrc: "/images/airtable.png" }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5/0 backdrop-blur-xl px-4 py-5 sm:px-5 sm:py-6 shadow-soft-glow"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-adastra-accent/18 opacity-80" />
                    <div className="relative flex h-full flex-col items-center justify-center gap-3">
                      {item.iconSrc && (
                        <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-2xl bg-black/40 border border-white/10">
                          <Image
                            src={item.iconSrc}
                            alt={`${item.name} logo`}
                            fill
                            className="object-contain p-1.5"
                          />
                        </div>
                      )}
                      <span className="text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-white/90">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>

          {/* HOW AUTOMATION TRANSFORMS YOUR BUSINESS */}
          <SectionShell id="process">
            <div className="space-y-10">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight mb-3">
                  How Automation Transforms Your Business
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  A structured, end-to-end engagement that takes you from
                  discovery to fully operational, optimised automations.
                </p>
              </div>
              <ol className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    step: "01",
                    title: "Identify Opportunities",
                    body:
                      "We analyse your current workflows to identify repetitive, time-consuming tasks that are ideal for automation."
                  },
                  {
                    step: "02",
                    title: "Design Solutions",
                    body:
                      "We create automation strategies tailored to your business, your goals, and your existing systems."
                  },
                  {
                    step: "03",
                    title: "Implement & Test",
                    body:
                      "We build and thoroughly test each workflow to ensure reliability, accuracy, and seamless integration."
                  },
                  {
                    step: "04",
                    title: "Scale & Optimise",
                    body:
                      "Once deployed, we monitor and refine your automations to maximise long-term efficiency and performance."
                  }
                ].map((item) => (
                  <li
                    key={item.step}
                    className="relative rounded-3xl border border-white/8 bg-adastra-soft/70 px-6 py-6 sm:px-7 sm:py-7 backdrop-blur-xl"
                  >
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-adastra-muted/85">
                      {item.step}
                    </div>
                    <h3 className="mb-2 text-[1.02rem] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm text-adastra-muted leading-relaxed">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </SectionShell>

          {/* EXAMPLES OF AUTOMATION */}
          <SectionShell id="examples">
            <div className="space-y-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight mb-3">
                  Examples of Automation in Practice
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  Clear, business-focused workflows that quietly run in the
                  background—turning routine operations into reliable,
                  automated systems.
                </p>
              </div>

              <div className="space-y-8">
                {/* Example 1 */}
                <AutomationExample
                  title="Operational Reporting Automation"
                  description="A daily operational reporting workflow that automatically processes tracking data and distributes insights to management."
                  steps={[
                    "Daily Tracking Data Received",
                    "Automated Data Processing",
                    "Operations Report Generated",
                    "Report Sent to Management"
                  ]}
                  outcome="Reduces manual reporting work and ensures leadership receives accurate operational updates every day."
                />
                {/* Example 2 */}
                <AutomationExample
                  title="Automated Lead Intelligence System"
                  description="A fully automated workflow that identifies potential business opportunities, gathers decision-maker information, and generates tailored outreach insights every day."
                  steps={[
                    "Regulatory Data Pulled Daily",
                    "Low-Rated Organisations Identified",
                    "Director Information Retrieved",
                    "Contact Details Enriched",
                    "Tailored Lead Insight Generated"
                  ]}
                  outcome="Transforms public data into enriched business leads automatically every day, ready for targeted outreach."
                />
              </div>
            </div>
          </SectionShell>

          {/* IMPACT */}
          <SectionShell id="impact">
            <div className="space-y-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight mb-3">
                  The Impact of Automation
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  Measurable improvements across time, accuracy, and
                  capacity—without adding headcount.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    metric: "40% Time Saved",
                    detail:
                      "Typical reduction in time spent on routine administrative tasks"
                  },
                  {
                    metric: "85% Error Reduction",
                    detail:
                      "Fewer manual mistakes through more consistent workflows"
                  },
                  {
                    metric: "3× Productivity Gain",
                    detail:
                      "Greater output capacity without increasing headcount"
                  }
                ].map((item) => (
                  <div
                    key={item.metric}
                    className="rounded-3xl border border-white/10 bg-adastra-soft/70 px-6 py-6 backdrop-blur-xl"
                  >
                    <div className="mb-2 text-[1.2rem] sm:text-[1.4rem] font-semibold">
                      {item.metric}
                    </div>
                    <p className="text-sm text-adastra-muted leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="max-w-3xl text-sm sm:text-base text-adastra-muted leading-relaxed">
                <p className="mb-4">
                  Businesses that implement AI automation often see measurable
                  improvements across their operations. Teams spend less time
                  on repetitive admin, which allows them to focus on
                  higher-value work that supports growth.
                </p>
                <p>
                  Reducing manual input also improves consistency, data
                  quality, and customer experience, while increased
                  efficiency helps businesses scale more effectively.
                </p>
              </div>
            </div>
          </SectionShell>

          {/* WHY CHOOSE ADASTRA SYSTEMS */}
          <SectionShell id="why-adastra">
            <div className="space-y-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight mb-3">
                  Why Choose Adastra Systems
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  A partner that combines deep technical capability with a
                  clear understanding of commercial priorities.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Tailored Approach",
                    body:
                      "Every solution is designed around your business, your processes, and your goals."
                  },
                  {
                    title: "Technical Expertise",
                    body:
                      "Strong knowledge of modern automation platforms, APIs, and AI-powered workflows."
                  },
                  {
                    title: "Ongoing Support",
                    body:
                      "Continued maintenance and optimisation to keep your systems running smoothly over time."
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-adastra-soft/70 px-6 py-6 backdrop-blur-xl"
                  >
                    <h3 className="mb-2 text-[1.02rem] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm text-adastra-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>

          {/* MEET THE FOUNDER */}
          <SectionShell id="founder">
            <div className="grid gap-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] items-center">
              <div className="flex justify-center md:justify-start">
                {/*
                  FOUNDER IMAGE
                  Using your uploaded headshot at /public/images/founder-benjamin.jpeg
                */}
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full border border-white/15 bg-white/5 p-[3px] shadow-soft-glow">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-black/60">
                    <Image
                      src="/images/founder-benjamin.jpeg"
                      alt="Portrait of Benjamin Mohaci"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight">
                  Meet the Founder
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  With a Master of Science in Artificial Intelligence and a
                  background in business development, Benjamin Mohaci founded
                  Adastra Systems to build practical AI-driven automations
                  that solve real operational problems.
                </p>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  His work sits at the intersection of technology and
                  business, helping teams streamline workflows, reduce
                  manual effort, and implement intelligent systems that
                  create measurable operational improvements.
                </p>
              </div>
            </div>
          </SectionShell>

          {/* READY TO AUTOMATE */}
          <SectionShell id="ready">
            <div className="space-y-10">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight">
                  Ready to Automate?
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  Book a consultation to discuss your business needs and
                  discover which processes are ready for automation. We will
                  assess your current workflows and provide clear
                  recommendations for AI-powered solutions that can deliver
                  measurable results.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-adastra-soft/70 px-6 py-7 sm:px-8 sm:py-8 backdrop-blur-xl space-y-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-adastra-muted">
                  Engagement roadmap
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-1 flex-wrap items-center justify-between gap-3 sm:gap-4 md:justify-start">
                    {[
                      "Discovery Call",
                      "Workflow Analysis",
                      "Implementation Roadmap"
                    ].map((step, index, arr) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 text-adastra-muted"
                      >
                        <div className="rounded-full border border-white/18 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
                          {step}
                        </div>
                        {index < arr.length - 1 && (
                          <span className="hidden text-xs text-adastra-muted sm:inline">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="md:self-end">
                    <CTAButton>Book an appointment</CTAButton>
                  </div>
                </div>
              </div>

              <p className="max-w-3xl text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                Most businesses uncover several automation opportunities in
                the very first conversation. Let&apos;s explore what is
                possible for your organisation.
              </p>
            </div>
          </SectionShell>

          {/* CONTACT */}
          <SectionShell id="contact">
            <div className="space-y-10">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl sm:text-[1.9rem] font-semibold tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                  A straightforward, business-focused conversation about how
                  automation could support your operations.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
                <div className="space-y-4">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-adastra-muted">
                    Contact Information
                  </h3>
                  <p className="text-sm sm:text-[0.97rem] leading-relaxed">
                    Email:{" "}
                    <a
                      href="mailto:benjamin@adastrasystems.co.uk"
                      className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      benjamin@adastrasystems.co.uk
                    </a>
                  </p>
                  <p className="text-sm text-adastra-muted leading-relaxed">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-adastra-muted">
                    Book Your Consultation
                  </h3>
                  <p className="text-sm sm:text-[0.97rem] text-adastra-muted leading-relaxed">
                    Schedule a free 30-minute consultation to discuss your
                    automation needs. No obligation and no pressure, just a
                    straightforward conversation about how AI and automation
                    could support your business.
                  </p>
                  <CTAButton>Book an appointment</CTAButton>
                </div>
              </div>
            </div>
          </SectionShell>
        </main>

        <footer className="section-container pb-10 pt-7 text-[11px] text-adastra-muted flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5 mt-4">
          <p>© {new Date().getFullYear()} Adastra Systems. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">
            Intelligent. Measurable. Operational.
          </p>
        </footer>
      </div>
    </div>
  );
}

function AutomationExample({ title, description, steps, outcome }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-adastra-soft/80 px-5 py-6 sm:px-8 sm:py-8 backdrop-blur-xl space-y-6 sm:space-y-7 shadow-soft-glow">
      <div className="space-y-2.5 sm:space-y-3">
        <h3 className="text-[1.02rem] sm:text-xl font-medium">{title}</h3>
        <p className="text-[0.92rem] sm:text-[0.97rem] text-adastra-muted leading-relaxed">
          {description}
        </p>
      </div>
      <div className="relative">
        <div className="hidden md:flex items-center justify-between gap-4">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-1 items-center gap-3">
              <div className="relative flex-1 rounded-2xl border border-white/12 bg-white/5/0 bg-gradient-to-br from-white/6 via-white/2 to-transparent px-4 py-3 text-xs text-adastra-muted">
                <span className="block text-[10px] uppercase tracking-[0.26em] text-adastra-muted/70 mb-1">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/90">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex h-full items-center">
                  <div className="h-px w-6 bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Stacked layout on mobile */}
        <div className="flex flex-col gap-3.5 md:hidden">
          {steps.map((step, index) => (
            <div key={step} className="flex items-start gap-3">
              <div className="mt-1.5 h-7 w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/4 via-white/1 to-transparent px-4 py-3.5 text-[0.8rem] text-adastra-muted">
                <span className="block text-[10px] uppercase tracking-[0.26em] text-adastra-muted/70 mb-1">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/90">{step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[0.92rem] sm:text-sm text-adastra-muted leading-relaxed">
        {outcome}
      </p>
    </div>
  );
}

