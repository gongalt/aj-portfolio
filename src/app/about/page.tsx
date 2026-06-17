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
    url: "https://ajenson.com/about",
  },
};

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Anchorpoint Financial Limited (Contract via Viseo)",
    period: "01/2026 — 06/2026",
    bullets: [
      "Developed and maintained a multi-portal fintech platform for a tokenized money venture backed by Standard Chartered Hong Kong, HKT, and Animoca Brands under HKMA's Stablecoin Issuer Sandbox.",
      "Built frontend features across multiple portals using Next.js (App Router), TypeScript, shadcn/ui, Radix UI, and Tailwind CSS.",
      "Delivered full-stack implementations including NestJS backend services, transaction history, approval workflows, and developer documentation.",
      "Collaborated cross-functionally with backend, QA, and DevOps engineers in an agile environment.",
    ],
  },
  {
    role: "Full Stack / AI Engineer",
    company: "Posteridy AI",
    period: "12/2025 — 03/2026",
    bullets: [
      "Built a production AI business-credit coaching platform end to end, with a NestJS API and Next.js frontend, live at posteridy.ai.",
      "Implemented retrieval-augmented generation (RAG) over a curated knowledge base using PostgreSQL with pgvector and OpenAI embeddings.",
      "Integrated Stripe subscription billing with webhook-driven provisioning, plus admin tooling for knowledge-base curation.",
      "Deployed Dockerized services to AWS (ECS, RDS, CloudFront) with CI/CD via GitHub Actions.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Bermwood Technologies",
    period: "06/2025 — 11/2025",
    bullets: [
      "Worked as an independent contract Senior Software Developer focusing on frontend development with Next.js, MUI, and Google Maps integrations for real estate property technologies.",
      "Collaborated with .NET backend developers and peers to deliver comprehensive real estate software solutions.",
      "Implemented real estate-specific features including property listings, map-based search, and data visualization components.",
      "Returned on a short follow-on contract (Apr–Jun 2026) to extend the platform with additional features.",
    ],
  },
  {
    role: "Independent Contractor",
    company: "Flowroom",
    period: "04/2025 — 07/2025",
    bullets: [
      "Developed RAG (Retrieval-Augmented Generation) applications with AI integrations using OpenAI and Replicate APIs.",
      "Implemented intelligent document processing and AI-powered features for enhanced user experiences.",
      "Collaborated with the team to design and deploy scalable AI solutions.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Malogica Solutions",
    period: "01/2023 — 03/2025",
    bullets: [
      "Led a frontend team of 2 developers for an HPC cloud platform, delivering high-quality components using Angular, TypeScript, Cypress, and Vue.",
      "Collaborated with an agile team (2 backend developers, 1 QA engineer, 1 solutions architect) to integrate frontend with backend APIs.",
      "Ensured quality standards through coordination with QA and alignment with project goals under the solutions architect.",
    ],
  },
  {
    role: "Freelance Web and Mobile Developer",
    company: "Upwork",
    period: "10/2024 — 01/2025",
    bullets: [
      "Delivered web and mobile solutions for startups using MEAN Stack, React, Ionic, Angular, Firebase, and GCP.",
      "Managed multiple contractual projects with a focus on scalable and user-friendly software.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Logmaster Australia",
    period: "06/2024 — 09/2024",
    bullets: [
      "Developed a mobile app using Ionic, Angular, Firebase, and GCP as a contractor.",
      "Collaborated with a team to design and implement viable software modules.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Direct Sourcing Solutions Inc.",
    period: "02/2022 — 05/2024",
    bullets: [
      "Built a SaaS platform using Angular, Node.js, PostgreSQL, and AWS microservices.",
      "Focused on full-stack development and collaborated with a team to deliver robust software solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Author-it Software Company",
    period: "02/2022 — 05/2024",
    bullets: [
      "Contributed to a SaaS project using Angular, Node.js, PostgreSQL, and AWS microservices.",
      "Worked on full-stack development and microservices architecture in a remote team setting.",
    ],
  },
  {
    role: "Lead Developer",
    company: "CodingChiefs",
    period: "01/2021 — 02/2022",
    bullets: [
      "Led web and mobile development projects using Angular, Ionic, and other frontend frameworks.",
      "Oversaw the delivery of high-quality software solutions for clients.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Freelance",
    period: "07/2016 — 12/2020",
    bullets: [
      "Developed web, mobile, and desktop applications using a JavaScript single-codebase approach.",
      "Delivered versatile, cross-platform solutions for diverse clients.",
    ],
  },
  {
    role: "Mobile & Front-End Web Developer",
    company: "Droptek",
    period: "10/2017 — 07/2019",
    bullets: [
      "Built mobile and web applications using Ionic, Angular, React Native, and React.js.",
      "Focused on creating responsive and efficient frontend solutions.",
    ],
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "MUI"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", ".NET", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "AI & Cloud", items: ["AI-Assisted Development", "OpenAI", "Replicate", "Firebase", "AWS", "Vercel"] },
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
              My focus is on fintech platforms and AI-augmented development. Most recently I
              built a multi-portal tokenized money platform at{" "}
              <span className="text-green-accent">Anchorpoint Financial Limited</span>, a joint
              venture between Standard Chartered Hong Kong, HKT, and Animoca Brands. I leverage
              AI-assisted development workflows daily to ship faster and with higher quality,
              whether that&apos;s building RAG pipelines, integrating OpenAI into product workflows,
              or shipping entire SaaS products end-to-end.
            </p>
            <p>
              I work best as an autonomous contributor who can own large features from architecture
              through deployment. I&apos;m{" "}
              <span className="text-green-accent">available immediately and actively looking</span>{" "}
              — open to full-time roles, contracts, and product collaborations. If you have
              something to build or a team to grow, I&apos;d love to hear about it.
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
