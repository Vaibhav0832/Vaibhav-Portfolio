import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import portrait from "@/assets/vaibhav-portrait.png";
import { heroStats, profile } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_circle_at_20%_10%,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3 w-3 text-[color:var(--brand-secondary)]" />
              Available for enterprise contact center engineering
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ")[1]}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-xl text-lg text-muted-foreground"
            >
              {profile.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-1 max-w-xl text-sm text-muted-foreground/80"
            >
              {profile.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 max-w-xl text-base text-muted-foreground/90"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/Vaibhav_Pattewar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                <Download className="h-4 w-4" /> View Resume
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[color:var(--brand)]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a href={`mailto:${profile.email}`} className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-30 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={portrait}
                alt="Vaibhav Pattewar"
                className="aspect-square w-full rounded-3xl object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass card-hover rounded-2xl p-5"
            >
              <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
              <p className="mt-1 text-sm font-medium">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Contact Center", body: "Genesys Cloud CX, Architect, SIP telephony, ACD & outbound campaigns at scale." },
            { title: "Automation", body: "PowerShell tooling, monitoring, and reliability engineering across Windows Server fleets." },
            { title: "Integration", body: "Webhooks, CRM Screen Pop, Genesys optimizing solutions implemented, and site stability & overall platform health maintenance." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
