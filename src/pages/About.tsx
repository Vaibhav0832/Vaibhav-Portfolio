import { motion } from "framer-motion";
import { PageHeader } from "@/components/site-layout";
import { education, profile, timeline } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineering reliable enterprise contact centers."
        description={profile.summary}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm {profile.name}, a Genesys Cloud CX Engineer based in {profile.location}. My work sits at the intersection of enterprise contact center operations, IVR development, SIP telephony, and infrastructure automation — the systems that quietly decide whether a customer gets an answer in seconds or waits on hold.
          </p>
          <p>
            Day to day I run end-to-end Genesys Cloud CX operations for a 500-agent, dual-site deployment powering one of India's largest public sector banks. That means designing IVR call flows in Genesys Architect that survive millions of interactions, tuning outbound Preview and Progressive campaigns, and keeping SIP telephony, CRM screen pop, and data actions all working in lockstep under real production load.
          </p>
          <p>
            The part I love most is turning painful, repetitive problems into small, well-engineered automation. A PowerShell service-restart utility I built lifted screen recording reliability from 65% to over 98% across the entire agent fleet. A real-time PowerShell + Webhooks monitor now catches critical EFRM campaign failures the moment they happen. An automated log collector cut RCA time down to one command.
          </p>
          <p>
            Alongside client work I built and maintain <a href={profile.website} className="text-foreground underline decoration-[color:var(--brand)] underline-offset-4">NexCX.in</a>, an AI-powered technical knowledge platform. I also mentor — I designed and delivered an internal Genesys Cloud CX curriculum for 25 junior engineers.
          </p>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Strengths</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {[
                "Enterprise-scale Genesys Cloud CX operations",
                "IVR architecture in Genesys Architect",
                "SIP telephony troubleshooting & DTMF diagnostics",
                "PowerShell automation for Windows-heavy stacks",
                "Production RCA under high-severity incidents",
                "CRM integration, data actions, and screen pop reliability",
                "Building internal training and enablement programs",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Education</h3>
            <ul className="mt-3 space-y-3">
              {education.map((e) => (
                <li key={e.school} className="text-sm">
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-muted-foreground">{e.school}</p>
                  <p className="text-xs text-muted-foreground">{e.period} · {e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Career journey</h2>
        <div className="relative mt-10">
          <div className="absolute left-3 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative grid gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <span className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[image:var(--gradient-brand)] shadow-glow md:left-1/2" />
                <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">{t.year}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}