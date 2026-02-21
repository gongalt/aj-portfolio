import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Adrian Jenson",
  description:
    "Get in touch with Adrian Jenson — available for freelance projects, AI/SaaS product development, and technical collaborations.",
  openGraph: {
    title: "Contact | Adrian Jenson",
    description:
      "Get in touch — available for freelance projects, AI/SaaS development, and collaborations.",
    url: "https://adrianjenson.com/contact",
  },
};

const socialLinks = [
  {
    label: "Email",
    value: "jensonadrian@gmail.com",
    href: "mailto:jensonadrian@gmail.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/gongalt",
    href: "https://github.com/gongalt",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adrianjenson",
    href: "https://linkedin.com/in/adrianjenson",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Header ── */}
      <section aria-labelledby="contact-heading" className="mb-16">
        <SectionHeading number="01" title="Get In Touch" />
        <p className="text-slate leading-relaxed max-w-xl">
          I&apos;m currently available for freelance projects and collaborations. Whether
          you have a specific project in mind, want to explore AI integrations, or just
          want to connect — send me a message and I&apos;ll get back to you within 24 hours.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-12 items-start">

        {/* ── Form (takes 2 cols) ── */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* ── Sidebar ── */}
        <aside aria-label="Direct contact options" className="space-y-6">

          {/* Availability badge */}
          <div className="bg-navy-light rounded-lg p-6 border border-navy-lighter">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2.5 h-2.5 rounded-full bg-green-accent animate-pulse"
                aria-hidden="true"
              />
              <span className="font-mono text-green-accent text-sm">Available for Work</span>
            </div>
            <p className="text-slate text-sm leading-relaxed">
              Open to freelance projects, fixed-scope contracts, and interesting product
              collaborations. Typical response time: within 24 hours.
            </p>
          </div>

          {/* Direct contacts */}
          <div className="bg-navy-light rounded-lg p-6 border border-navy-lighter">
            <h2 className="text-slate-lightest font-semibold mb-5 text-sm tracking-wider uppercase font-mono">
              Direct Contact
            </h2>
            <ul className="space-y-4" aria-label="Contact links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-start gap-3 group"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className="text-green-accent mt-0.5 shrink-0 group-hover:text-slate-lightest transition-colors duration-200">
                      {link.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate font-mono mb-0.5">
                        {link.label}
                      </span>
                      <span className="block text-slate-light text-sm group-hover:text-green-accent transition-colors duration-200 break-all">
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What to expect */}
          <div className="bg-navy-light rounded-lg p-6 border border-navy-lighter">
            <h2 className="text-slate-lightest font-semibold mb-4 text-sm tracking-wider uppercase font-mono">
              What to Expect
            </h2>
            <ul className="space-y-3">
              {[
                "Response within 24 hours",
                "Free 30-min discovery call",
                "Clear scope & pricing upfront",
                "Weekly progress updates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate text-sm">
                  <span className="text-green-accent shrink-0 text-xs" aria-hidden="true">
                    ▹
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
