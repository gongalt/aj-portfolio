import Link from "next/link";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SparklesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 17.25v.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-.75m19.5 0A2.25 2.25 0 0021.75 15H2.25a2.25 2.25 0 00-2.25 2.25m19.5 0v-4.5A2.25 2.25 0 0019.5 8.25H4.5A2.25 2.25 0 002.25 10.5v4.5m19.5 0H2.25M12 12.75h.008v.008H12v-.008zM12 9h.008v.008H12V9z"
      />
    </svg>
  );
}

const services: ServiceCard[] = [
  {
    icon: <SparklesIcon />,
    title: "AI/SaaS Product Development",
    description:
      "End-to-end development of AI-powered SaaS products, from concept to launch. RAG applications, AI integrations, and intelligent automation.",
  },
  {
    icon: <CodeIcon />,
    title: "Custom Web Applications",
    description:
      "Full-stack web applications built with Next.js, Angular, React, and Node.js. Scalable, performant, and built to grow.",
  },
  {
    icon: <LayoutIcon />,
    title: "Frontend Architecture",
    description:
      "Modern frontend architecture, component systems, and migrations. Expertise in Angular, React, and Next.js at enterprise scale.",
  },
  {
    icon: <ServerIcon />,
    title: "API & Backend Development",
    description:
      "RESTful APIs, GraphQL, microservices, and cloud infrastructure. Node.js, PostgreSQL, MongoDB, Firebase, and AWS.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-semibold text-slate-lightest">
            <span className="font-mono text-green-accent text-xl md:text-2xl">
              01.
            </span>
            What I Do
            <span className="flex-1 h-px bg-navy-lighter max-w-xs hidden sm:block" />
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                bg-navy-light rounded-lg p-6
                border border-navy-lighter
                hover:border-green-accent
                transition-colors duration-200
              "
            >
              <div className="text-green-accent mb-4">{service.icon}</div>
              <h3 className="text-slate-lightest text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div>
          <Link
            href="/services"
            className="
              inline-flex items-center gap-2
              font-mono text-sm text-green-accent
              hover:gap-3 transition-all duration-200
              focus:outline-none focus:underline
            "
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
