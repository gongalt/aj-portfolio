import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Adrian Jenson",
  description:
    "Freelance full-stack development services: AI/SaaS product development, custom web applications, frontend architecture, API development, and AI integration consulting.",
  openGraph: {
    title: "Services | Adrian Jenson",
    description:
      "Freelance full-stack development: AI/SaaS products, web applications, frontend architecture, API development, and AI integration.",
    url: "https://adrianjenson.com/services",
  },
};

const services = [
  {
    number: "01",
    title: "AI/SaaS Product Development",
    description:
      "From concept to production launch. I build AI-powered SaaS products end-to-end — architecture, frontend, backend, AI integrations, deployment, and scaling. Recent work includes Posteridy.ai (business credit intelligence) and multiple RAG applications. I treat your product like my own: thinking through the business model, user experience, and technical architecture before writing a single line of code.",
    tech: ["Next.js", "OpenAI", "Replicate", "Node.js", "Firebase", "Vercel"],
    highlight: true,
  },
  {
    number: "02",
    title: "Custom Web Application Development",
    description:
      "Full-stack web applications built with modern frameworks. Whether it's a complex enterprise dashboard, a customer-facing platform, or an internal tool — I deliver scalable, production-ready applications with clean architecture and thorough documentation. I've shipped applications used by thousands of daily active users across real estate, HR tech, and content management industries.",
    tech: ["Angular", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
    highlight: false,
  },
  {
    number: "03",
    title: "Frontend Architecture & Migration",
    description:
      "Modern frontend architecture for teams that need to scale. I design and implement component systems, establish design system foundations, lead framework migrations (AngularJS to Angular, Angular to React/Next.js), and optimize rendering performance. Having led frontend teams across multiple companies, I know how to structure a codebase that stays maintainable as your team and product grow.",
    tech: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    highlight: false,
  },
  {
    number: "04",
    title: "API & Backend Development",
    description:
      "RESTful APIs, GraphQL endpoints, microservices, and cloud infrastructure. I build the backend systems that power your applications — from data modeling and API design through deployment and observability. I'm comfortable working deep in the stack: optimizing slow queries, designing webhook systems, implementing job queues, or migrating from monolith to services.",
    tech: ["Node.js", "Express.js", ".NET", "PostgreSQL", "MongoDB", "GraphQL", "AWS"],
    highlight: false,
  },
  {
    number: "05",
    title: "AI Integration & Consulting",
    description:
      "Integrate AI capabilities into your existing products without starting from scratch. RAG applications that retrieve from your own data, chatbots trained on your documentation, AI-powered content generation, image processing pipelines, and intelligent automation. I help teams evaluate which AI approaches will actually move the needle for their specific use case — and which are hype.",
    tech: ["OpenAI", "Replicate", "RAG", "LangChain", "Firebase", "AWS"],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Header ── */}
      <section aria-labelledby="services-heading" className="mb-16">
        <SectionHeading number="01" title="Services" />
        <p className="text-slate leading-relaxed max-w-2xl">
          I take on a small number of high-impact engagements at a time. Whether you need a
          solo builder to ship an AI product end-to-end, or a senior engineer to unblock your
          team — here&apos;s how I can help.
        </p>
      </section>

      {/* ── Service Cards ── */}
      <section aria-label="Service offerings" className="space-y-6 mb-24">
        {services.map((service) => (
          <article
            key={service.number}
            className={`bg-navy-light rounded-lg p-8 border transition-colors duration-200 ${
              service.highlight
                ? "border-green-accent/40 hover:border-green-accent/70"
                : "border-navy-lighter hover:border-slate/40"
            }`}
            aria-label={service.title}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Number */}
              <span
                className="font-mono text-3xl font-bold text-green-accent/30 shrink-0 leading-none"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-slate-lightest font-semibold text-xl mb-4">
                  {service.title}
                </h2>
                <p className="text-slate leading-relaxed mb-6">{service.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      role="listitem"
                      className="font-mono text-xs text-green-accent bg-green-accent/10 border border-green-accent/20 px-3 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── Process ── */}
      <section aria-labelledby="process-heading" className="mb-24">
        <SectionHeading number="02" title="How I Work" />
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We start with a focused call to understand your goals, constraints, and timeline. I ask a lot of questions.",
            },
            {
              step: "02",
              title: "Proposal",
              description:
                "I send a clear scope document with timeline, deliverables, and fixed-price or milestone-based pricing.",
            },
            {
              step: "03",
              title: "Delivery",
              description:
                "Weekly updates, async communication, and clean handoffs with documentation so your team can own it long-term.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-navy-light rounded-lg p-6 border border-navy-lighter"
            >
              <span
                className="font-mono text-green-accent text-sm block mb-3"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="text-slate-lightest font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="bg-navy-light rounded-lg p-10 border border-navy-lighter text-center"
        aria-labelledby="cta-heading"
      >
        <h2
          id="cta-heading"
          className="text-slate-lightest font-semibold text-2xl mb-4"
        >
          Ready to start a project?
        </h2>
        <p className="text-slate leading-relaxed mb-8 max-w-md mx-auto">
          I&apos;m currently available for new engagements. Let&apos;s talk about what
          you&apos;re building and figure out if we&apos;re a good fit.
        </p>
        <Button href="/contact" variant="filled" size="lg">
          Get In Touch
        </Button>
      </section>

    </main>
  );
}
