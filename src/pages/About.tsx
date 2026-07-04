import { motion } from "framer-motion";
import { PageHeader } from "@/components/site-layout";

const storyParagraphs = [
  "My professional journey has taught me that technical knowledge alone is not enough. I enjoy understanding difficult problems, asking the right questions, and staying involved until there is a clear path forward.",
  "I'm naturally reserved outside work, but professional situations bring out a different side of me. I enjoy technical discussions, coordinating with people across different roles, sharing ideas, and helping teams move toward solutions.",
  "I approach growth with intention. I continuously learn, experiment with AI and new technologies, build practical projects, and enjoy sharing knowledge with others whenever I can help.",
];

const driveItems = [
  { title: "Curiosity", body: "I like understanding why something works, why it failed, and whether there is a better way to solve it." },
  { title: "Ownership", body: "When I take responsibility for something, I prefer to investigate it thoroughly, involve the right people when needed, and follow it toward a clear outcome." },
  { title: "Continuous Learning", body: "I actively explore AI and new technologies, experiment with ideas, build practical projects, and keep developing my technical and problem-solving abilities." },
  { title: "Knowledge Sharing", body: "I enjoy explaining technical topics, helping others understand problems, and sharing what I learn through practical guidance and mentoring." },
];

const beyondWorkItems = [
  { title: "AI & Building", body: "Exploring AI tools, learning new technologies, and turning ideas into practical digital projects." },
  { title: "Cricket", body: "Enjoy playing and watching cricket in my free time." },
  { title: "Travel", body: "Enjoy exploring new places and taking a break from routine." },
  { title: "Movies & Friends", body: "Action, thriller, and comedy films, along with spending time with friends." },
];

const snapshotItems = [
  { label: "Based in", value: "Hyderabad, India" },
  { label: "Languages", value: "Telugu · Hindi · English" },
  { label: "Current Focus", value: "Growing in enterprise technology, AI, problem solving, and building practical solutions." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The person behind the engineer."
        description="I'm Vaibhav Pattewar, a technology professional based in Hyderabad who enjoys solving difficult problems, taking ownership when things go wrong, and finding better ways to work. I value curiosity, reliability, clear communication, continuous learning, and helping others grow."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">My Story</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          {storyParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">What Drives Me</h2>
        <div className="mt-6 glass rounded-2xl p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {driveItems.map((it) => (
              <li key={it.title} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
                <span>
                  <span className="font-medium text-foreground">{it.title}:</span> {it.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Beyond Work</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {beyondWorkItems.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="font-display text-base font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Personal Snapshot</h2>
        <div className="mt-6 glass rounded-2xl p-6">
          <ul className="space-y-2 text-sm">
            {snapshotItems.map((s) => (
              <li key={s.label}>
                <span className="font-medium text-foreground">{s.label}:</span>{" "}
                <span className="text-muted-foreground">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
