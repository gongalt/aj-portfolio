import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ── Fonts ────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
  display: "swap",
});

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Adrian Jenson | Full-Stack AI & SaaS Developer",
    template: "%s | Adrian Jenson",
  },
  description:
    "Freelance full-stack AI & SaaS developer available for hire. I build production-grade web apps, AI integrations, and custom SaaS products that help companies ship faster and scale confidently.",
  keywords: [
    "full-stack developer",
    "AI developer",
    "SaaS builder",
    "freelance developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "LLM integration",
    "software engineer",
    "Adrian Jenson",
  ],
  authors: [{ name: "Adrian Jenson", url: "https://ajenson.com" }],
  creator: "Adrian Jenson",
  publisher: "Adrian Jenson",
  metadataBase: new URL("https://ajenson.com"),
  alternates: {
    canonical: "https://ajenson.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajenson.com",
    siteName: "Adrian Jenson",
    title: "Adrian Jenson | Full-Stack AI & SaaS Developer",
    description:
      "Freelance full-stack AI & SaaS developer available for hire. I build production-grade web apps, AI integrations, and custom SaaS products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adrian Jenson — Full-Stack AI & SaaS Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adrianjenson",
    creator: "@adrianjenson",
    title: "Adrian Jenson | Full-Stack AI & SaaS Developer",
    description:
      "Freelance full-stack AI & SaaS developer. Building web apps, AI integrations, and SaaS products.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ajenson.com/#person",
      name: "Adrian Jenson",
      url: "https://ajenson.com",
      email: "jensonadrian@gmail.com",
      jobTitle: "Full-Stack AI & SaaS Developer",
      description:
        "Freelance full-stack developer specializing in AI integrations, SaaS products, and modern web applications.",
      sameAs: [
        "https://github.com/gongalt",
        "https://linkedin.com/in/adrianjenson",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "AI/LLM Integration",
        "SaaS Development",
        "Full-Stack Development",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ajenson.com/#service",
      name: "Adrian Jenson — Freelance Development",
      url: "https://ajenson.com",
      email: "jensonadrian@gmail.com",
      founder: { "@id": "https://ajenson.com/#person" },
      description:
        "Freelance full-stack AI & SaaS development services. Specializing in production web apps, LLM-powered features, and custom SaaS builds.",
      serviceType: [
        "Web Application Development",
        "AI Integration",
        "SaaS Development",
        "Full-Stack Consulting",
      ],
      areaServed: {
        "@type": "Place",
        name: "Worldwide (Remote)",
      },
      priceRange: "$$",
    },
  ],
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy text-slate font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
