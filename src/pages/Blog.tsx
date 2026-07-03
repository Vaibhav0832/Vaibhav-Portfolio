import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { blogPosts } from "@/lib/portfolio-data";

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Field notes from enterprise CX engineering."
        description="Practical writing on the technologies I work with every day — from Genesys Architect to PowerShell to AI-assisted tooling."
      />
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-secondary)]">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}