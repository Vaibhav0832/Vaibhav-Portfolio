import { motion } from "framer-motion";
import { Download, FileText, Mail } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { experience, profile, skills } from "@/lib/portfolio-data";

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="A concise, verified summary of the last five years."
        description="Preview the highlights inline or download the full PDF."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-24 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold">{profile.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{profile.title} · {profile.location}</p>
            </div>
            <a href="/Vaibhav_Pattewar_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-glow hover:brightness-110">
              <Download className="h-4 w-4" /> View / Download PDF
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{profile.summary}</p>

          <div className="mt-8">
            <h3 className="font-display text-lg font-semibold">Experience</h3>
            {experience.map((e) => (
              <div key={e.role} className="mt-4 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <p className="font-medium">{e.role} — {e.company}</p>
                <p className="text-xs text-muted-foreground">{e.period} · {e.location}</p>
                <p className="mt-1 text-xs text-muted-foreground">Project: {e.project}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {e.highlights.slice(0, 5).map((h) => (
                    <li key={h} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" /><span>{h}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-display text-lg font-semibold">Core skills</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {skills.map((g) => (
                <div key={g.category} className="rounded-2xl border border-border/60 bg-surface/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">{g.category}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white"><FileText className="h-5 w-5" /></div>
              <div>
                <p className="font-display text-base font-semibold">Latest CV</p>
                <p className="text-xs text-muted-foreground">PDF · Updated 2026</p>
              </div>
            </div>
            <a href="/Vaibhav_Pattewar_CV.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-glow hover:brightness-110">
              <Download className="h-4 w-4" /> Open Resume
            </a>
            <a href="/Vaibhav_Pattewar_CV.pdf" target="_blank" rel="noreferrer" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground">
              Open in new tab
            </a>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="font-display text-base font-semibold">Prefer a quick intro?</p>
            <p className="mt-1 text-sm text-muted-foreground">Reach out and I'll respond within a business day.</p>
            <a href={`mailto:${profile.email}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-secondary)] hover:text-foreground">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
          </div>
        </motion.aside>
      </section>
    </>
  );
}