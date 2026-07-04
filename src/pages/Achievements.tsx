import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Radar, Sparkles, Trophy } from "lucide-react";
import { PageHeader } from "@/components/site-layout";

const featured = [
  { icon: Trophy, title: "Production Reliability Improvement", body: "Improved screen recording reliability from approximately 65% to over 98% by engineering a PowerShell-based service recovery solution for a large-scale production environment." },
  { icon: Radar, title: "Proactive Production Monitoring", body: "Built a real-time monitoring and alerting solution for critical EFRM campaign failures, improving visibility into production issues and enabling faster operational response." },
  { icon: Sparkles, title: "Technical Knowledge Initiative", body: "Designed and delivered an internal Genesys Cloud CX learning initiative for 25 junior engineers, translating production knowledge into practical technical enablement." },
];

const additional = [
  "Built automated diagnostic log collection tooling to simplify production troubleshooting and RCA workflows.",
  "Resolved complex Genesys–CRM integration failures affecting screen-pop and customer-context delivery.",
  "Contributed to critical incident resolution through coordination with client IT teams and Genesys Product Support.",
];

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones that reflect growth, impact, and initiative."
        description="Selected outcomes from production engineering, technical problem-solving, and knowledge sharing."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white shadow-glow">
                <a.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Additional Contributions</h2>
        <div className="mt-6 glass rounded-2xl p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {additional.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Interested in the engineering work behind these outcomes?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            View Experience <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[color:var(--brand)]"
          >
            View Projects
          </Link>
        </div>
      </section>
    </>
  );
}
