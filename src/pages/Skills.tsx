import { motion } from "framer-motion";
import { PageHeader } from "@/components/site-layout";
import { skills } from "@/lib/portfolio-data";

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="A verified toolbox for enterprise CX and automation."
        description="Grouped by discipline, every item below reflects real production work — not aspirational tags."
      />
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">Skill Categories</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06 }}
              className="glass card-hover min-w-0 rounded-3xl p-6"
            >
              <h3 className="font-display text-xl font-semibold">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s} className="min-w-0 max-w-full break-words rounded-xl border border-border bg-surface/60 px-3 py-1.5 text-sm text-foreground/90 transition hover:border-[color:var(--brand)]">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}