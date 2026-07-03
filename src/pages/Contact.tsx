import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site-layout";
import { profile } from "@/lib/portfolio-data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`Hi Vaibhav,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something reliable together."
        description="Available for Genesys Cloud CX engagements, infrastructure automation, and thoughtful full-stack collaborations."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-24 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="glass rounded-3xl p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
            <Field label="Email" required type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@company.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder="Genesys Cloud CX consulting" />
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Message</label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              placeholder="Tell me a little about your project or role..."
              className="mt-2 w-full rounded-2xl border border-border bg-surface/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-[color:var(--brand)] focus:outline-none"
            />
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && <p className="mt-3 text-xs text-[color:var(--brand-secondary)]">Opening your email client…</p>}
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Direct channels</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} />
              <ContactRow icon={MapPin} label="Location" value={profile.location} />
              <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/vaibhav0803" href={profile.linkedin} />
              <ContactRow icon={Github} label="GitHub" value="github.com/Vaibhav0832" href={profile.github} />
              <ContactRow icon={Globe} label="Website" value="NexCX.in" href={profile.website} />
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Response time</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Messages typically get a reply within one business day. For urgent production topics, email is fastest.
            </p>
          </div>
        </motion.aside>
      </section>
    </>
  );
}

function Field({ label, value, onChange, placeholder, required, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; type?: string; }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-surface/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-[color:var(--brand)] focus:outline-none"
      />
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; }) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface/60 text-[color:var(--brand-secondary)]">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block rounded-xl p-1 transition hover:bg-white/5">
        {inner}
      </a>
    </li>
  ) : (
    <li className="p-1">{inner}</li>
  );
}