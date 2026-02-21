import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          {/* Overline */}
          <p className="font-mono text-green-accent text-sm tracking-wider mb-5">
            05. What&apos;s Next?
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-lightest mb-6 leading-snug">
            Let&apos;s Build Something Together
          </h2>

          {/* Description */}
          <p className="text-slate text-base md:text-lg leading-relaxed mb-10">
            I&apos;m currently available for freelance projects and product
            collaborations. Whether you need an AI-powered SaaS product, a
            custom web application, or frontend architecture expertise &mdash;
            let&apos;s talk about how I can help.
          </p>

          {/* CTA button */}
          <Link
            href="/contact"
            className="
              inline-block px-8 py-4 rounded
              border border-green-accent
              text-green-accent font-mono text-sm
              hover:bg-green-accent/10
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-green-accent focus:ring-offset-2 focus:ring-offset-navy
            "
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
