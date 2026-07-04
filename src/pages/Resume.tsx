import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { PageHeader } from "@/components/site-layout";
import { profile } from "@/lib/portfolio-data";

const RESUME_PDF = "/Vaibhav_Pattewar_CV.pdf";

const whatsInside = [
  { title: "Experience", body: "Enterprise contact center operations and production engineering.", to: "/experience" },
  { title: "Technical Skills", body: "Genesys Cloud CX, automation, telephony, infrastructure, and development tools.", to: "/skills" },
  { title: "Projects & Engineering Work", body: "Practical automation, monitoring, troubleshooting, and NexCX development.", to: "/projects" },
  { title: "Certifications & Education", body: "Professional certifications and academic background.", to: "/certifications" },
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Everything important, in one document."
        description="View my resume for a concise overview of my experience, technical capabilities, projects, and professional background."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 text-center md:p-8"
        >
          <h2 className="font-display text-2xl font-bold">{profile.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Executive – Infrastructure Services</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Genesys Cloud CX · Contact Center Engineering · Infrastructure Automation
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume in a new tab"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:w-auto"
            >
              View Resume <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={RESUME_PDF}
              download
              aria-label="Download Resume PDF"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[color:var(--brand)] sm:w-auto"
            >
              Download PDF <Download className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">PDF Document · Updated 2026</p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">What's Inside</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {whatsInside.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={item.to} className="glass card-hover block rounded-2xl p-5">
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 md:pb-20 text-center">
        <div className="glass rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold">Recruiter Shortcut</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Short on time? The resume provides the fastest overview of my professional profile.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume in a new tab"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:w-auto"
            >
              View Resume <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground sm:w-auto"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
