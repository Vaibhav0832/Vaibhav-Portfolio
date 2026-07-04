import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes from building, troubleshooting, and learning."
        description="Practical lessons from production support, automation, building with AI, and the ideas I explore beyond my day-to-day work."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover flex h-full flex-col rounded-2xl p-6"
            >
              <span className="w-fit rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
                {post.category}
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[color:var(--brand-secondary)]"
              >
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
