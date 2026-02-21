import type { Metadata } from "next";

const SITE_URL = "https://ajenson.com";
const SITE_NAME = "Adrian Jenson";
const DEFAULT_DESCRIPTION =
  "Freelance full-stack AI & SaaS developer. I design and build production-grade web apps, AI integrations, and custom software that helps startups and companies ship faster.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = "@adrianjenson";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

/**
 * createMetadata — generates a fully-hydrated Next.js Metadata object
 * for any page in the portfolio.
 *
 * @example
 * // In a page.tsx:
 * export const metadata = createMetadata({
 *   title: "About",
 *   description: "Learn about Adrian Jenson, full-stack AI developer.",
 *   path: "/about",
 * });
 */
export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataInput = {}): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const resolvedTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Full-Stack AI & SaaS Developer`;

  return {
    // ── Title ─────────────────────────────────────────────────────────────
    title: {
      default: resolvedTitle,
      template: `%s | ${SITE_NAME}`,
    },

    // ── Description ───────────────────────────────────────────────────────
    description,

    // ── Canonical & alternate URLs ─────────────────────────────────────────
    alternates: {
      canonical: canonicalUrl,
    },

    // ── Open Graph ─────────────────────────────────────────────────────────
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },

    // ── Twitter / X Card ──────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: resolvedTitle,
      description,
      images: [ogImage],
    },

    // ── Robots ────────────────────────────────────────────────────────────
    robots: noIndex
      ? { index: false, follow: false }
      : {
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

    // ── Verification (add keys when ready) ────────────────────────────────
    // verification: {
    //   google: "GOOGLE_VERIFICATION_TOKEN",
    // },

    // ── Icons ─────────────────────────────────────────────────────────────
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },

    // ── Manifest ──────────────────────────────────────────────────────────
    manifest: "/site.webmanifest",
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE };
