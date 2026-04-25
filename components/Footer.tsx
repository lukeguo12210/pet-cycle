import Image from "next/image";
import Link from "next/link";

const footerCols = [
  {
    title: "Platform",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/recycle", label: "Recycle" },
      { href: "/impact", label: "Impact" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/account", label: "My Submissions" },
      { href: "/tracking", label: "Track Order" },
      { href: "/account", label: "Settings" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/impact", label: "Our Story" },
      { href: "#", label: "Press" },
      { href: "#", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-14 grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="relative size-9 rounded-full overflow-hidden bg-cream">
              <Image
                src="/pawcycle-hero.png"
                alt="PawCycle logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </span>
            <span className="font-display text-2xl tracking-wide">
              PawCycle
            </span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Transforming pre-loved clothing into magical pet products. A new
            economy for a sustainable future.
          </p>
          <div className="flex gap-3 text-white/70">
            <span className="size-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
              IG
            </span>
            <span className="size-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
              TW
            </span>
          </div>
        </div>
        {footerCols.map((col) => (
          <div key={col.title} className="space-y-3">
            <h4 className="font-display text-base tracking-wide uppercase">
              {col.title}
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
          <span>© 2026 PawCycle. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
