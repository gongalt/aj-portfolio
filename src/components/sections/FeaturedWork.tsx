import Link from "next/link";

interface Project {
  overline: string;
  title: string;
  description: string;
  tech: string[];
  externalUrl: string;
  imageAlt: string;
  imageRight?: boolean;
}

const projects: Project[] = [
  {
    overline: "AI SaaS Platform",
    title: "Posteridy.ai",
    description:
      "AI-powered business credit intelligence platform that analyzes business profiles and provides personalized funding recommendations across SBA loans, CDFI programs, credit lines, and more. Features an AI credit coach, vector-based semantic matching, Stripe billing, and a nationwide lender directory.",
    tech: ["Next.js 15", "NestJS", "PostgreSQL", "OpenAI", "Stripe", "Redis", "AWS"],
    externalUrl: "https://posteridy.ai",
    imageAlt: "Posteridy.ai — AI Business Credit Intelligence",
    imageRight: false,
  },
  {
    overline: "Full-Stack Web App",
    title: "Real Estate Platform",
    description:
      "Comprehensive real estate platform with interactive property search, Google Maps integration, and responsive design for property visualization across all devices.",
    tech: ["Next.js", "MUI", "Google Maps API", "TypeScript"],
    externalUrl: "https://bermwood.com",
    imageAlt: "Bermwood — Real Estate Platform",
    imageRight: true,
  },
  {
    overline: "Enterprise Application",
    title: "HPC Cloud Platform",
    description:
      "Led frontend development for a high-performance computing cloud platform. Built scalable components with comprehensive testing and agile team collaboration.",
    tech: ["Angular", "TypeScript", "Cypress", "Vue.js"],
    externalUrl: "https://malogica.com",
    imageAlt: "Malogica — HPC Cloud Platform",
    imageRight: false,
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function ProjectPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      className="
        w-full h-full min-h-[220px]
        bg-navy rounded-lg
        border border-navy-lighter
        flex items-center justify-center
      "
      aria-label={alt}
    >
      <span className="font-mono text-slate/40 text-xs px-4 text-center">
        {alt}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isRight = project.imageRight;

  return (
    <article
      className="
        group
        bg-navy-light rounded-lg p-8
        border border-navy-lighter
        hover:border-green-accent/40
        transition-colors duration-300
      "
    >
      <div
        className={`
          grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
          ${isRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}
        `}
      >
        {/* Text content */}
        <div>
          <p className="font-mono text-green-accent text-xs tracking-widest uppercase mb-3">
            {project.overline}
          </p>
          <h3 className="text-slate-lightest text-2xl font-semibold mb-4">
            {project.title}
          </h3>
          <p className="text-slate text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags */}
          <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="
                  font-mono text-green-accent text-xs
                  border border-green-accent/30
                  px-2.5 py-1 rounded
                  bg-green-accent/5
                "
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* External link */}
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-slate-light text-sm font-mono
              hover:text-green-accent
              transition-colors duration-200
              focus:outline-none focus:text-green-accent
            "
            aria-label={`Visit ${project.title} (opens in new tab)`}
          >
            <ExternalLinkIcon />
            {new URL(project.externalUrl).hostname}
          </a>
        </div>

        {/* Image / placeholder */}
        <div className="relative aspect-video lg:aspect-auto lg:h-52">
          <ProjectPlaceholder alt={project.imageAlt} />
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWork() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-semibold text-slate-lightest">
            <span className="font-mono text-green-accent text-xl md:text-2xl">
              02.
            </span>
            Featured Work
            <span className="flex-1 h-px bg-navy-lighter max-w-xs hidden sm:block" />
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <div>
          <Link
            href="/work"
            className="
              inline-flex items-center gap-2
              font-mono text-sm text-green-accent
              hover:gap-3 transition-all duration-200
              focus:outline-none focus:underline
            "
          >
            View All Projects
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
