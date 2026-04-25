import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/recycle", label: "Recycle" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/impact", label: "Impact" },
  { href: "/account", label: "Account" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border h-[72px] flex items-center px-6 md:px-16">
      <div className="flex-1 flex items-center justify-between max-w-[1440px] mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative size-9 rounded-full overflow-hidden ring-2 ring-brand/20 bg-cream">
            <Image
              src="/pawcycle-hero.png"
              alt="PawCycle logo"
              fill
              sizes="36px"
              className="object-contain"
            />
          </span>
          <span className="font-display text-2xl tracking-wide text-brand">
            PawCycle
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-ink">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/account"
            className="hidden sm:block text-sm text-ink-muted hover:text-brand"
          >
            Login
          </Link>
          <Link
            href="/recycle"
            className="inline-flex items-center rounded-full bg-brand hover:bg-brand-hover text-white text-sm font-medium px-4 py-2 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
