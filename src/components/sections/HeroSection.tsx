import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Overline */}
        <p className="font-mono text-green-accent text-sm md:text-base mb-5 tracking-wider">
          Hi, my name is
        </p>

        {/* Primary heading */}
        <h1 className="text-hero font-semibold text-slate-lightest leading-none mb-4">
          Adrian Jenson.
        </h1>

        {/* Secondary heading */}
        <h2 className="text-hero font-semibold text-slate leading-none mb-8">
          I build AI-powered products.
        </h2>

        {/* Bio */}
        <p className="max-w-xl text-slate text-lg leading-relaxed mb-12">
          I&apos;m a senior full-stack developer specializing in building
          AI-powered SaaS products and exceptional web applications. Currently
          available for freelance projects and product collaborations.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="
              inline-block px-7 py-4 rounded
              bg-transparent border border-green-accent
              text-green-accent font-mono text-sm
              hover:bg-green-accent/10
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-green-accent focus:ring-offset-2 focus:ring-offset-navy
            "
          >
            See My Work
          </Link>
          <Link
            href="/contact"
            className="
              inline-block px-7 py-4 rounded
              border border-slate/40
              text-slate-lightest font-mono text-sm
              hover:border-slate-lightest hover:text-green-accent
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-slate focus:ring-offset-2 focus:ring-offset-navy
            "
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
