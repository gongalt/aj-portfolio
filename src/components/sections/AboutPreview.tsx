import Image from "next/image";
import Link from "next/link";

const PROFILE_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2Fpictureist.jpg?alt=media&token=b7e77db7-ee87-4135-9424-e6112e385d67";

export default function AboutPreview() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-semibold text-slate-lightest">
            <span className="font-mono text-green-accent text-xl md:text-2xl">
              03.
            </span>
            About Me
            <span className="flex-1 h-px bg-navy-lighter max-w-xs hidden sm:block" />
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — text content (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-slate text-base md:text-lg leading-relaxed">
              I&apos;m Adrian, a senior full-stack developer with{" "}
              <span className="text-slate-lightest">9+ years of experience</span>{" "}
              building production applications. Based in{" "}
              <span className="text-slate-lightest">
                Mandaue, Philippines
              </span>
              , I work with clients worldwide to build AI-powered products and
              scalable web applications.
            </p>
            <p className="text-slate text-base md:text-lg leading-relaxed">
              My recent focus has been on{" "}
              <span className="text-slate-lightest">AI/SaaS development</span>{" "}
              — building products like Posteridy.ai and working with RAG
              applications, OpenAI, and Replicate APIs. I combine deep frontend
              expertise (Angular, React, Next.js) with full-stack capabilities to
              deliver complete product solutions.
            </p>

            {/* More About Me link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="
                  inline-flex items-center gap-2
                  font-mono text-sm text-green-accent
                  hover:gap-3 transition-all duration-200
                  focus:outline-none focus:underline
                "
              >
                More About Me
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right — profile image (2 cols) */}
          <div className="lg:col-span-2">
            <div className="relative group max-w-xs mx-auto lg:mx-0">
              {/* Green accent border offset layer */}
              <div
                className="
                  absolute inset-0
                  rounded-lg
                  border-2 border-green-accent
                  translate-x-4 translate-y-4
                  transition-transform duration-300
                  group-hover:translate-x-3 group-hover:translate-y-3
                  z-0
                "
                aria-hidden="true"
              />

              {/* Image container */}
              <div className="relative z-10 rounded-lg overflow-hidden bg-navy-light">
                <Image
                  src={PROFILE_IMAGE_URL}
                  alt="Adrian Jenson — Senior Full-Stack Developer"
                  width={400}
                  height={480}
                  className="
                    w-full h-auto
                    object-cover
                    grayscale hover:grayscale-0
                    transition-all duration-300
                  "
                  priority
                />
                {/* Navy overlay on hover (fades out) */}
                <div
                  className="
                    absolute inset-0
                    bg-navy/30
                    group-hover:bg-transparent
                    transition-colors duration-300
                    rounded-lg
                  "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
