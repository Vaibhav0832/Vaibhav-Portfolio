export const profile = {
  name: "Vaibhav Pattewar",
  title: "Genesys Cloud CX Engineer",
  subtitle: "Enterprise Contact Center Operations & Automation",
  location: "Hyderabad, India",
  email: "pattewarvaibhav02@gmail.com",
  phone: "+91 9121923012",
  linkedin: "https://linkedin.com/in/vaibhav0803",
  github: "https://github.com/Vaibhav0832",
  website: "https://NexCX.in",
  summary:
    "Genesys Cloud CX Engineer trusted with business-critical production operations, complex incident investigations, and cross-functional technical coordination. I build automation and monitoring solutions that improve reliability, drive critical issues toward resolution with Genesys Product Support, and mentor engineers through internal Genesys learning initiatives.",
};

export const heroStats = [
  { label: "Genesys Cloud CX", value: "Enterprise", detail: "Production operations across multiple sites" },
  { label: "Production Engineering", value: "Automation", detail: "Monitoring, reliability & troubleshooting solutions" },
  { label: "Incident & RCA Ownership", value: "Key POC", detail: "Complex investigations, stakeholder coordination & Genesys Product Support" },
  { label: "Genesys Learning Initiative", value: "Mentor", detail: "Created and delivered internal training for engineers interested in Genesys Cloud CX" },
];

export const experience = [
  {
    role: "Genesys Cloud CX Engineer",
    company: "CS Infocomm — Executive, Infrastructure Services",
    project: "Indian Bank (Client: Teleperformance)",
    location: "Chennai & Mohali, India",
    period: "Aug 2025 — Present",
    highlights: [
      "Administer end-to-end Genesys Cloud CX operations for a 500-agent, dual-site deployment supporting high-volume inbound and outbound banking interactions for one of India's largest public sector banks.",
      "Design and maintain large-scale IVR call flows in Genesys Architect for banking campaigns, supporting millions of customer interactions across inbound routing and outbound dialer scenarios.",
      "Engineered PowerShell automation to auto-restart core services, improving screen recording reliability from 65% to over 98% and eliminating daily failures across the entire 500-agent environment.",
      "Diagnose and resolve SIP-based telephony failures, including call routing breakdowns and DTMF errors, maintaining near-zero downtime for mission-critical contact center operations.",
      "Identified and resolved critical Genesys–CRM integration failures causing screen-pop breakdowns by tracing root cause to data mapping and timing mismatches, restoring full agent context delivery at scale.",
      "Configure outbound dialer campaigns (Preview, Progressive) and validate IVR-to-agent data flow integrity, ensuring campaign compliance and accurate customer context delivery.",
      "Built a Critical EFRM Campaign Monitoring solution using PowerShell, Webhooks, and Windows Server for proactive, real-time failure detection and instant alerting.",
      "Developed an Automated Troubleshooting Log Collection utility in PowerShell that gathers all required diagnostic logs in a single execution, reducing RCA and resolution time.",
      "Coordinate with client IT teams and Genesys global support to resolve critical production incidents through structured root cause analysis and permanent fixes.",
      "Designed and delivered an internal Genesys Cloud CX training curriculum for 25 junior engineers, covering IVR design, outbound campaigns, SIP telephony, and CRM integration.",
    ],
  },
];

export const skills = [
  {
    category: "Contact Center",
    items: [
      "Genesys Cloud CX",
      "Genesys Architect",
      "IVR Design",
      "SIP Telephony",
      "ACD & Skills-Based Routing",
      "Outbound Campaigns (Preview, Progressive)",
      "Data Actions",
      "CRM Integration & Screen Pop",
    ],
  },
  {
    category: "Automation & Infrastructure",
    items: [
      "PowerShell Scripting",
      "Windows Server",
      "Active Directory",
      "REST APIs",
      "Webhooks",
      "JSON",
      "Production Troubleshooting",
      "Root Cause Analysis",
      "Monitoring & Alerting",
    ],
  },
  {
    category: "Development & Tools",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "AI Integration",
      "Prompt Engineering",
    ],
  },
];

export const projects = [
  {
    name: "NexCX.in — AI Technical Knowledge Platform",
    tag: "Product",
    overview:
      "An AI-powered web platform delivering technology troubleshooting guidance, an AI assistant, and enterprise utility calculators through a fast, responsive interface.",
    problem:
      "Enterprise engineers waste hours hunting for scattered troubleshooting playbooks and reference calculators across wikis, chat threads, and vendor docs.",
    solution:
      "Built a unified web platform combining an AI assistant, curated technology troubleshooting knowledge, and daily-use enterprise utility calculators behind a single fast UI.",
    tech: ["AI Integration", "JavaScript", "HTML", "CSS", "REST APIs", "Prompt Engineering"],
    impact:
      "Centralises fragmented technical knowledge into one destination, cutting lookup time and giving engineers reliable, context-aware answers on demand.",
    learnings:
      "Sharpened prompt engineering, product framing, and shipping an end-to-end AI product from architecture to responsive UI.",
    github: "https://github.com/Vaibhav0832",
    link: "https://NexCX.in",
  },
  {
    name: "Critical EFRM Campaign Monitoring",
    tag: "Infrastructure Automation",
    overview:
      "Real-time monitoring solution that watches critical EFRM outbound campaigns and instantly alerts support teams the moment anything degrades.",
    problem:
      "Silent failures in critical Enterprise Fraud & Risk Management campaigns risked SLA breaches and delayed customer outreach for a 500-agent banking deployment.",
    solution:
      "Engineered a PowerShell + Webhooks + Windows Server pipeline that continuously watches campaign health signals and pushes instant alerts to on-call channels.",
    tech: ["PowerShell", "Webhooks", "Windows Server", "Genesys Cloud CX", "REST APIs"],
    impact:
      "Moved the team from reactive triage to proactive detection, shrinking incident detection time to near real time on business-critical campaigns.",
    learnings:
      "Deepened production observability, event-driven alerting design, and defensive scripting for always-on Windows services.",
  },
  {
    name: "Automated Troubleshooting Log Collector",
    tag: "Support Tooling",
    overview:
      "PowerShell utility that auto-captures and organises every diagnostic log required for Genesys production RCA in a single execution.",
    problem:
      "During production incidents, engineers were manually collecting logs from multiple locations, slowing RCA and stretching MTTR.",
    solution:
      "Built a single-command PowerShell tool that discovers, collects, and packages all required diagnostic logs from the Windows-based Genesys stack.",
    tech: ["PowerShell", "Windows Server", "Genesys Cloud CX"],
    impact:
      "Dramatically cut log-gathering effort during high-severity incidents, freeing engineers to focus on root cause instead of retrieval.",
    learnings:
      "Refined incident tooling design, developer ergonomics, and repeatable RCA workflows.",
  },
  {
    name: "Screen Recording Automation",
    tag: "Reliability Engineering",
    overview:
      "PowerShell service-restart automation that lifted Genesys screen recording reliability from 65% to over 98% across a 500-agent production environment.",
    problem:
      "Screen recording services drifted into failure states daily, threatening compliance recording obligations across the entire 500-agent deployment.",
    solution:
      "Designed idempotent PowerShell automation that health-checks and auto-restarts the underlying services, running unattended across every agent workstation.",
    tech: ["PowerShell", "Windows Server", "Active Directory", "Genesys Cloud CX"],
    impact:
      "Recording reliability jumped from 65% to 98%+ and daily failure tickets were effectively eliminated across the fleet.",
    learnings:
      "Reinforced the value of small, well-instrumented automations over manual toil at enterprise scale.",
  },
];

export const certifications = [
  {
    name: "AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "Nov 30, 2022",
    detail: "20 hours",
    link: "https://www.credly.com/go/tYWTCqG0",
  },
  {
    name: "AWS Fundamentals: Addressing Security Risk",
    issuer: "Amazon Web Services · Coursera",
    date: "Dec 13, 2022",
    link: "https://coursera.org/verify/J42PM9WJ9Y3F",
  },
  {
    name: "AWS Fundamentals: Building Serverless Applications",
    issuer: "Amazon Web Services · Coursera",
    date: "Dec 14, 2022",
    link: "https://coursera.org/verify/ADAX48MLJLH4",
  },
  {
    name: "AWS S3 Basics",
    issuer: "Coursera Project Network",
    date: "Dec 23, 2022",
    link: "https://coursera.org/verify/MSQKJNB7YQUY",
  },
  {
    name: "Understanding Google Cloud Security and Operations",
    issuer: "Google Cloud · Coursera",
    date: "Dec 23, 2022",
    link: "https://coursera.org/verify/BGNHPZHTR4QJ",
  },
  {
    name: "Full Stack Java Developer — Java + JSP + Restful WS + Spring",
    issuer: "Udemy · StudyEasy Organisation",
    date: "Aug 27, 2023",
    detail: "65 hours",
    link: "https://ude.my/UC-0736f093-cbc9-47a6-9acf-4bdf7c3bc5cb",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Jul 11, 2022",
    detail: "ID: A051793A1B2A",
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "Feb 3, 2023",
    detail: "ID: AA9AEC93812F",
  },
  {
    name: "Design Thinking for Innovation",
    issuer: "Coursera",
    date: "2022",
  },
];

export const achievements = [
  {
    title: "Recording reliability 65% → 98%+",
    detail:
      "Engineered PowerShell automation that eliminated daily screen recording failures across a 500-agent banking contact center.",
  },
  {
    title: "500-agent dual-site operations",
    detail:
      "Own end-to-end Genesys Cloud CX operations across Chennai and Mohali for one of India's largest public sector banks.",
  },
  {
    title: "Real-time EFRM monitoring",
    detail:
      "Delivered a proactive PowerShell + Webhooks monitoring solution that catches critical campaign failures the moment they happen.",
  },
  {
    title: "RCA tooling that cut MTTR",
    detail:
      "Built an automated PowerShell log collector that gathers every diagnostic artifact for Genesys RCA in a single execution.",
  },
  {
    title: "Trained 25 junior engineers",
    detail:
      "Designed and delivered an internal Genesys Cloud CX curriculum covering IVR design, outbound campaigns, SIP telephony, and CRM integration.",
  },
  {
    title: "Restored Genesys–CRM screen pop",
    detail:
      "Traced and resolved data mapping and timing mismatches to restore full agent context delivery at scale.",
  },
];

export const education = [
  {
    school: "Malla Reddy University",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2020 — 2024",
    detail: "GPA: 7.1",
  },
  {
    school: "SR Junior College",
    degree: "Intermediate (MPC)",
    period: "2018 — 2020",
    detail: "76.1%",
  },
  {
    school: "Vijay High School",
    degree: "SSC",
    period: "Passed 2018",
    detail: "GPA: 9.2",
  },
];

export const timeline = [
  { year: "2018", title: "Secondary Education", detail: "SSC · Vijay High School · GPA 9.2" },
  { year: "2018–2020", title: "Intermediate Education", detail: "MPC · SR Junior College · 76.1%" },
  { year: "2020–2024", title: "Computer Science & Engineering", detail: "B.Tech · Malla Reddy University · GPA 7.1" },
  { year: "2025–Present", title: "Executive – Infrastructure Services · CS Infocomm", detail: "Supporting the Teleperformance-managed Indian Bank project in a large-scale, multi-site, business-critical Genesys Cloud CX production environment." },
];


export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certifications", label: "Certifications" },
  { to: "/achievements", label: "Achievements" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;