import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-mono text-green-accent text-lg mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-lightest mb-6">
          Page Not Found
        </h2>
        <p className="text-slate text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block font-mono text-sm text-green-accent border border-green-accent rounded px-6 py-3 hover:bg-green-accent/10 transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
