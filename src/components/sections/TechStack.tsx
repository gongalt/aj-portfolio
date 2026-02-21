interface TechCategory {
  label: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      "Next.js",
      "Angular",
      "React",
      "Vue.js",
      "TypeScript",
      "MUI",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      ".NET",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    label: "AI & Cloud",
    items: [
      "OpenAI",
      "Replicate",
      "RAG",
      "Firebase",
      "AWS",
      "GCP",
      "Docker",
    ],
  },
];

function TechPill({ name }: { name: string }) {
  return (
    <span
      className="
        inline-block
        border border-navy-lighter
        text-slate-light text-sm font-mono
        px-3 py-1 rounded
        hover:border-green-accent/50 hover:text-green-accent
        transition-colors duration-200
        cursor-default
      "
    >
      {name}
    </span>
  );
}

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-semibold text-slate-lightest">
            <span className="font-mono text-green-accent text-xl md:text-2xl">
              04.
            </span>
            Tech Stack
            <span className="flex-1 h-px bg-navy-lighter max-w-xs hidden sm:block" />
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {techCategories.map((category) => (
            <div key={category.label}>
              <p className="font-mono text-green-accent text-sm mb-4 tracking-wider">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <TechPill key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
