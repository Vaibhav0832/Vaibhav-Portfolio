import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Calendar, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site-layout";

const timeline = [
  { year: "2018", title: "SSC | Vijay High School", detail: "Foundational schooling completed with GPA 9.2." },
  { year: "2018–2020", title: "Intermediate (MPC) | SR Junior College", detail: "Mathematics, Physics, and Chemistry with 76.1%." },
  { year: "2020–2024", title: "B.Tech, Computer Science & Engineering | Malla Reddy University", detail: "Graduated with GPA 7.1." },
  { year: "Aug 2025–Present", title: "Executive, Infrastructure Services | CS Infocomm", detail: "Supporting the Teleperformance-managed Indian Bank project within a large-scale, multi-site, business-critical Genesys Cloud CX production environment." },
];

const workAreas = [
  { title: "Production Operations", body: "Support availability, stability, production continuity, operational troubleshooting, incident handling, and day-to-day health of business-critical Genesys Cloud CX environments." },
  { title: "Campaigns & Contact Center Systems", body: "Create, configure, maintain, and troubleshoot outbound and IVR-driven campaign workflows including Preview, Progressive, Blaster, Dynamic IVR, and DTMF-based campaigns. Monitor campaign health, channel availability, interaction flow, and operational behavior to identify failures and maintain reliable production operations." },
  { title: "Automation & Reliability", body: "Build PowerShell automation, monitoring, diagnostic, and troubleshooting utilities that reduce repetitive operational effort and improve system reliability." },
  { title: "Incident Investigation & Coordination", body: "Investigate complex production issues, perform structured root cause analysis, coordinate with client IT teams and Genesys Product Support, and drive issues toward resolution." },
];

const impact = [
  { title: "Screen Recording Reliability", body: "Improved reliability from approximately 65% to over 98% through PowerShell-based service recovery automation." },
  { title: "Proactive Campaign Monitoring", body: "Built real-time monitoring and alerting for critical EFRM campaign failures using PowerShell, webhooks, and Windows Server." },
  { title: "Faster Production Diagnostics", body: "Developed automated log collection tooling that gathers required diagnostic data in a single execution and reduces troubleshooting and RCA effort." },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Engineering reliability across enterprise contact center systems."
        description="A professional journey from computer science foundations to supporting business-critical Genesys Cloud CX production environments."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Career Journey</h2>
        <div className="relative mt-8 md:mx-auto md:max-w-3xl">
          <div className="absolute left-3 top-0 h-full w-px bg-border" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[image:var(--gradient-brand)] shadow-glow" />
                <div className="pl-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">{t.year}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Current Role Overview</h2>
        <div className="mt-6 glass rounded-2xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold">Executive – Infrastructure Services</h3>
              <p className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> CS Infocomm</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Chennai & Mohali, India</span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> Aug 2025 – Present
            </span>
          </div>
          <ul className="mt-4 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
            <li><span className="text-foreground">Client:</span> Teleperformance</li>
            <li><span className="text-foreground">Project:</span> Indian Bank</li>
            <li><span className="text-foreground">Domain:</span> Enterprise Contact Center Infrastructure</li>
            <li><span className="text-foreground">Platform:</span> Genesys Cloud CX</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">What I Work On</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {workAreas.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="font-display text-base font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Selected Engineering Impact</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {impact.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Collaboration & Knowledge Sharing</h2>
        <div className="mt-6 glass rounded-2xl p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
              <span>Collaborate with client IT teams and Genesys Product Support during critical production incidents.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
              <span>Share practical technical knowledge and mentor engineers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
              <span>Designed and delivered an internal Genesys Cloud CX learning initiative for junior engineers.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Interested in the systems behind reliable customer experiences?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[color:var(--brand)]"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
