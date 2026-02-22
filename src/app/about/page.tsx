import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About | Adrian Jenson",
  description:
    "Learn about Adrian Jenson — senior full-stack developer specializing in AI-powered SaaS products, web applications, and modern frontend architecture.",
  openGraph: {
    title: "About | Adrian Jenson",
    description:
      "Senior full-stack developer specializing in AI-powered SaaS products and web applications.",
    url: "https://adrianjenson.com/about",
  },
};

const experience = [
  {
    role: "Senior Software Developer",
    company: "Bermwood Technologies",
    period: "07/2025 — 11/2025",
    bullets: [
      "Built a modern real estate platform from the ground up serving property buyers and agents.",
      "Implemented interactive property maps using Google Maps API with custom overlays and clustering.",
      "Architected frontend with Next.js and MUI, achieving sub-2s page loads on listing detail pages.",
      "Integrated Supabase for real-time listing updates and user authentication flows.",
    ],
  },
  {
    role: "Independent Contractor",
    company: "Flowroom",
    period: "04/2025 — 07/2025",
    bullets: [
      "Developed RAG (Retrieval-Augmented Generation) applications for enterprise clients.",
      "Integrated OpenAI and Replicate APIs to power intelligent document processing pipelines.",
      "Built custom prompt engineering workflows for content generation and data extraction.",
      "Delivered three production AI features shipped within 3-month engagement.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Malogica Solutions",
    period: "01/2023 — 03/2025",
    bullets: [
      "Led a team of 4 frontend engineers building an HPC cloud management platform.",
      "Architected component library in Angular and TypeScript used across 5 product verticals.",
      "Introduced Cypress E2E test suite, reducing regression bugs by 40% within 6 months.",
      "Migrated legacy AngularJS modules to modern Angular 16 while maintaining zero downtime.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Upwork",
    period: "10/2024 — 01/2025",
    bullets: [
      "Delivered full-stack solutions for clients across real estate, e-commerce, and fintech sectors.",
      "Built React and Next.js frontends integrated with REST and GraphQL APIs.",
      "Maintained 100% Job Success Score across all client engagements.",
      "Specialized in fast-turnaround MVP builds for early-stage startups.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Logmaster Australia",
    period: "06/2024 — 09/2024",
    bullets: [
      "Built transport compliance features for a mobile app used by Australian truck drivers.",
      "Developed real-time logbook and fatigue management modules with Ionic and Angular.",
      "Integrated Firebase for offline-first data sync, critical for remote route coverage.",
      "Collaborated with backend engineers on GCP cloud functions for compliance reporting.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Direct Sourcing Solutions",
    period: "02/2022 — 05/2024",
    bullets: [
      "Engineered core features for a B2B SaaS platform connecting enterprise clients with contractors.",
      "Designed and maintained RESTful APIs in Node.js backed by PostgreSQL on AWS RDS.",
      "Built Angular dashboards for hiring managers with real-time candidate pipeline tracking.",
      "Led migration from monolith to microservices architecture, improving deploy cadence 3x.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Author-it Software",
    period: "02/2022 — 05/2024",
    bullets: [
      "Developed features for a cloud-based technical content authoring platform.",
      "Built Angular UI components for structured document editing and publishing workflows.",
      "Maintained Node.js and .NET backend services powering multi-tenant content delivery.",
      "Contributed to DITA XML rendering engine used by Fortune 500 documentation teams.",
    ],
  },
  {
    role: "Lead Developer",
    company: "CodingChiefs",
    period: "01/2021 — 02/2022",
    bullets: [
      "Led web and mobile project delivery for a boutique software agency.",
      "Managed client relationships and scoped technical requirements for 8+ concurrent projects.",
      "Built production apps with Angular and Ionic for clients in hospitality and logistics.",
      "Mentored junior developers and established code review and Git workflow standards.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Freelance",
    period: "07/2016 — 12/2020",
    bullets: [
      "Built custom web and mobile solutions for startups and small businesses.",
      "Delivered projects spanning e-commerce, booking systems, and marketing sites.",
      "Self-managed full project lifecycle from requirements through deployment.",
      "Grew referral-based client network serving clients across Southeast Asia and Australia.",
    ],
  },
  {
    role: "Mobile & Frontend Developer",
    company: "Droptek",
    period: "10/2017 — 07/2019",
    bullets: [
      "Developed cross-platform mobile apps with Ionic and Angular for iOS and Android.",
      "Built React Native features for a consumer delivery tracking application.",
      "Implemented push notifications, geolocation, and offline caching for field teams.",
      "Collaborated with UI/UX designers to produce pixel-perfect mobile interfaces.",
    ],
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "MUI"] },
  { category: "Backend", items: ["Node.js", "Express.js", ".NET", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "AI & Cloud", items: ["OpenAI", "Replicate", "LangChain", "Firebase", "AWS", "Vercel"] },
  { category: "Mobile & Tools", items: ["Ionic", "React Native", "Git", "Docker", "Cypress", "Figma"] },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Intro ── */}
      <section aria-labelledby="intro-heading" className="mb-24">
        <SectionHeading number="01" title="About Me" />
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Text */}
          <div className="md:col-span-3 space-y-5 text-slate leading-relaxed">
            <p>
              I&apos;m a senior full-stack developer with over 9 years of professional experience
              building production web and mobile applications. My career has taken me from agency
              work in the Philippines to remote contracts with companies in Australia, New Zealand,
              and North America — giving me a broad perspective on how different teams ship software
              at scale.
            </p>
            <p>
              My current focus is on AI-powered SaaS products. I&apos;m most energized when working
              at the intersection of great product design and cutting-edge AI capabilities — whether
              that&apos;s building RAG pipelines, integrating OpenAI into product workflows, or
              shipping entire SaaS products end-to-end. Recent work includes{" "}
              <span className="text-green-accent">Posteridy.ai</span>, a business credit intelligence
              platform, and several RAG applications built during my time at Flowroom.
            </p>
            <p>
              I work best as an autonomous contributor who can own large features from architecture
              through deployment. I&apos;m currently open to freelance projects, short-term
              contracts, and interesting product collaborations. If you have something to build,
              I&apos;d love to hear about it.
            </p>
          </div>

          {/* Photo */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 group">
              {/* Decorative offset border */}
              <div
                className="absolute inset-0 rounded border-2 border-green-accent translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"
                aria-hidden="true"
              />
              <div className="relative rounded overflow-hidden w-full h-full bg-navy-light">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2Fpictureist.jpg?alt=media&token=b7e77db7-ee87-4135-9424-e6112e385d67"
                  alt="Adrian Jenson — full-stack developer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 256px, 256px"
                />
                {/* Green tint overlay */}
                <div
                  className="absolute inset-0 bg-green-accent/20 mix-blend-multiply transition-opacity duration-300 hover:opacity-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section aria-labelledby="experience-heading" className="mb-24">
        <SectionHeading number="02" title="Experience" />
        <ol className="relative" aria-label="Work experience timeline">
          {experience.map((job, index) => (
            <li key={index} className="flex gap-6 pb-12 last:pb-0">
              {/* Timeline spine */}
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-green-accent mt-1.5 shrink-0" />
                {index < experience.length - 1 && (
                  <div className="w-px flex-1 bg-navy-lighter mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-slate-lightest font-semibold text-lg">{job.role}</h3>
                  <span className="text-green-accent font-mono text-sm" aria-label={`at ${job.company}`}>
                    @ {job.company}
                  </span>
                </div>
                <p className="font-mono text-sm text-slate mb-4">{job.period}</p>
                <ul className="space-y-2" aria-label={`Responsibilities at ${job.company}`}>
                  {job.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex gap-3 text-slate leading-relaxed">
                      <span
                        className="text-green-accent mt-1.5 shrink-0 text-xs"
                        aria-hidden="true"
                      >
                        ▹
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Skills Grid ── */}
      <section aria-labelledby="skills-heading" className="mb-24">
        <SectionHeading number="03" title="Skills &amp; Technologies" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-navy-light rounded-lg p-6 border border-navy-lighter"
            >
              <h3 className="text-green-accent font-mono text-sm mb-4 tracking-wider uppercase">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section aria-labelledby="education-heading">
        <SectionHeading number="04" title="Education" />
        <div className="bg-navy-light rounded-lg p-8 border border-navy-lighter">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-slate-lightest font-semibold text-lg mb-1">
                Bachelor of Science in Computer Engineering
              </h3>
              <p className="text-green-accent font-mono text-sm mb-3">
                University of San Carlos — Philippines
              </p>
              <p className="font-mono text-sm text-slate">2010 — 2016</p>
            </div>
            <span className="font-mono text-xs text-slate bg-navy px-3 py-1.5 rounded border border-navy-lighter">
              Working Scholar
            </span>
          </div>
          <p className="mt-6 text-slate leading-relaxed">
            Pursued a Computer Engineering degree as a working scholar, balancing academic
            coursework with part-time development work. This experience built the discipline
            and self-sufficiency that still defines how I work today.
          </p>
        </div>
      </section>

    </main>
  );
}
