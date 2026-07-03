import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Products, platforms, and automations I've shipped."
        description="Every project below solves a real, load-bearing problem for enterprise contact center operations or engineering productivity."
      />

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover overflow-hidden rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
                    {p.tag}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{p.name}</h2>
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground hover:border-[color:var(--brand)] hover:text-foreground">
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-brand)] px-3 py-1.5 text-xs font-semibold text-white shadow-glow hover:brightness-110">
                      <ExternalLink className="h-3.5 w-3.5" /> Visit
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-base text-muted-foreground">{p.overview}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  { label: "Problem", value: p.problem },
                  { label: "Solution", value: p.solution },
                  { label: "Business Impact", value: p.impact },
                  { label: "Key Learnings", value: p.learnings },
                ].map((sec) => (
                  <div key={sec.label} className="rounded-2xl border border-border/70 bg-surface/40 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">{sec.label}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{sec.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}