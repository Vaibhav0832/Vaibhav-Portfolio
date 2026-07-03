import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { experience } from "@/lib/portfolio-data";

const focusAreas = [
  "Genesys Cloud CX",
  "IVR Development",
  "Genesys Architect",
  "PowerShell Automation",
  "REST APIs",
  "SIP Telephony",
  "CRM Integration",
  "Infrastructure Automation",
  "Production Support",
  "Root Cause Analysis",
  "Monitoring",
  "Windows Server",
  "Active Directory",
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Running enterprise contact centers, one automation at a time."
        description="A closer look at the responsibilities, systems, and measurable wins from my current role."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="glass rounded-2xl p-4">
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border" />
          <div className="space-y-8">
            {experience.map((role, idx) => (
              <motion.article
                key={role.role + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <span className="absolute left-2.5 top-3 h-3 w-3 rounded-full bg-[image:var(--gradient-brand)] shadow-glow" />
                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl font-semibold">{role.role}</h2>
                      <p className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> {role.company}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {role.location}</span>
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">Project: {role.project}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {role.period}
                    </span>
                  </div>
                  <ul className="mt-6 grid gap-3">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}