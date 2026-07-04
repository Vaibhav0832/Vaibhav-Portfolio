import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import NotFound from "@/pages/NotFound";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
        {post.category}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
        {post.content.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-10 glass rounded-2xl p-6">
        <h2 className="font-display text-lg font-semibold">Key Takeaways</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {post.takeaways.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/blog"
        className="mt-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
      </Link>
    </section>
  );
}
