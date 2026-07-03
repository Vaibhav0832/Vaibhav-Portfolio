import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, Github, Linkedin, Mail, Menu, Moon, Sun, X, Globe } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [light, setLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [light]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-[image:var(--gradient-brand)]"
      />

      <header className="fixed inset-x-0 top-0 z-50 pt-3">
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass flex items-center justify-between rounded-2xl px-4 py-2.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
            <Link to="/" className="group flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-white shadow-glow">
                VP
              </span>
              <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
                Vaibhav Pattewar
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-1.5 text-sm transition-colors hover:text-foreground ${isActive ? "bg-white/5 text-foreground" : "text-muted-foreground"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setLight((v) => !v)}
                aria-label="Toggle theme"
                className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <Link
                to="/contact"
                className="hidden rounded-lg bg-[image:var(--gradient-brand)] px-3.5 py-1.5 text-sm font-medium text-white shadow-glow transition hover:brightness-110 md:inline-flex"
              >
                Let's talk
              </Link>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-white/5 hover:text-foreground lg:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-2 grid gap-1 rounded-2xl border border-white/10 bg-[#0B1120]/98 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
              >
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[color:var(--brand)]/20 hover:text-white ${isActive ? "bg-[color:var(--brand)]/25 text-white" : "text-white/85"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-1 rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow"
                >
                  Let's talk
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="pt-24">{children}</main>

      <footer className="mt-24 border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-white">VP</span>
              <span className="font-display text-base font-semibold">{profile.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {profile.title} — building reliable contact center experiences and infrastructure automation for enterprise operations.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Navigate</h4>
            <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="mt-3 flex gap-2">
              {[
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.github, icon: Github, label: "GitHub" },
                { href: profile.website, icon: Globe, label: "Website" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition hover:border-[color:var(--brand)] hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{profile.location}</p>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <span>Designed and Developed by Vaibhav Pattewar.</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-white shadow-glow transition hover:brightness-110"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}