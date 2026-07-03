import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { certifications } from "@/lib/portfolio-data";

export default function CertsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Verified cloud, data, and engineering credentials."
        description="Every certificate below is verifiable via the linked issuer where a public verification URL exists."
      />
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass card-hover flex h-full flex-col rounded-2xl p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white shadow-glow">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">{c.date}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              {c.detail && <p className="mt-1 text-xs text-muted-foreground">{c.detail}</p>}
              <div className="mt-auto pt-4">
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--brand-secondary)] hover:text-foreground">
                    Verify credential <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground/70">Verification not public</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}