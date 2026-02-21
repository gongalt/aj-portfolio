import { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Technical articles on AI integration, full-stack development, and building SaaS products. Tips and insights from 9+ years of software development.",
  path: "/blog",
});

const posts = [
  {
    slug: "building-ai-saas-from-scratch",
    title: "Building an AI-Powered SaaS Product From Scratch",
    description:
      "Lessons learned from building Posteridy.ai — from architecture decisions to AI integration patterns and launch strategy.",
    date: "Coming Soon",
    tags: ["AI", "SaaS", "Next.js", "OpenAI"],
  },
  {
    slug: "angular-to-nextjs-migration",
    title: "Why I Migrated My Portfolio From Angular to Next.js",
    description:
      "A practical comparison of Angular SPA vs Next.js SSG for developer portfolios, covering SEO, performance, and developer experience.",
    date: "Coming Soon",
    tags: ["Angular", "Next.js", "SEO", "Migration"],
  },
  {
    slug: "rag-applications-practical-guide",
    title: "A Practical Guide to Building RAG Applications",
    description:
      "How to build production-ready Retrieval-Augmented Generation apps with OpenAI, vector databases, and Node.js.",
    date: "Coming Soon",
    tags: ["RAG", "OpenAI", "Node.js", "AI"],
  },
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-lightest mb-4">
            Blog
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Writing about AI integration, full-stack development, and lessons
            from building SaaS products.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-lg bg-navy-light border border-navy-lighter hover:border-green-accent/30 transition-colors duration-200"
            >
              <span className="font-mono text-green-accent text-sm">
                {post.date}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-lightest mt-2 mb-3 group-hover:text-green-accent transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-slate mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded border border-navy-lighter text-slate-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate">
            More articles coming soon. Want to be notified?{" "}
            <Link
              href="/contact"
              className="text-green-accent hover:underline font-mono text-sm"
            >
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
