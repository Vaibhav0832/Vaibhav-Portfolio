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
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06 }}
              className="glass card-hover rounded-3xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">Category</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s} className="rounded-xl border border-border bg-surface/60 px-3 py-1.5 text-sm text-foreground/90 transition hover:border-[color:var(--brand)]">
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