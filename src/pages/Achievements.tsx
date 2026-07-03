import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { achievements } from "@/lib/portfolio-data";

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Wins that moved the needle in production."
        description="Real outcomes from real deployments — the kind that show up in on-call dashboards, not just slide decks."
      />
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white shadow-glow">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}