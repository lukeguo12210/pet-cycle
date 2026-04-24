import { Button, Card, CheckerBox, SectionTag } from "@/components/ui";
import { ArrowRight, Leaf, Recycle, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Upload Your Clothes",
    body: "Snap a photo of a worn-out T-shirt, baby blanket, or favorite scarf. We'll tell you if it's eligible.",
  },
  {
    n: "02",
    title: "Our AI Designs a Match",
    body: "Our AI studio recommends a custom pet product made from your textile and tailored to your pet.",
  },
  {
    n: "03",
    title: "Receive Your Pet Product",
    body: "Our artisan partners craft your design. Delivered carbon-neutral in 4-6 weeks.",
  },
];

const collection = [
  { name: "Heritage Dog Collar", from: "From a wool scarf", tone: "bg-[#E9C9A4]" },
  { name: "Memory Cat Bed", from: "From a baby blanket", tone: "bg-[#F4E0A8]" },
  { name: "Bandana No.37", from: "From a T-shirt set", tone: "bg-[#F3B8B8]" },
  { name: "Keepsake Quilt", from: "From a denim jacket", tone: "bg-[#9DB8DF]" },
];

const counters = [
  { value: "2,847", label: "Clothes Collected" },
  { value: "312 kg", label: "Textile Saved" },
  { value: "3,210", label: "Pet Products Made" },
  { value: "180 kg", label: "CO₂ Saved" },
];

const stories = [
  {
    initials: "SK",
    name: "Sarah K.",
    title: "A Scarf from NYC",
    quote:
      "My grandmother's scarf became my corgi's collar. Every walk feels like a little hug from her.",
  },
  {
    initials: "ML",
    name: "Marcus L.",
    title: "Denim jacket → bed",
    quote:
      "The quality blew me away. My cat claimed it before I could even finish the photo.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-14 md:pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <SectionTag>New: AI-crafted pet goods</SectionTag>
            <h1 className="font-display text-5xl md:text-7xl tracking-wide text-ink leading-[0.95]">
              Your Old Clothes.
              <br />
              <span className="text-brand">Your Pet&apos;s New Treasure.</span>
            </h1>
            <p className="text-lg text-ink-muted max-w-xl">
              We turn pre-loved textiles into one-of-a-kind products for your
              pet. Every piece is crafted with care, designed by AI, and made to
              last.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/recycle" size="lg">
                Start Recycling <ArrowRight className="size-4" />
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                Learn How It Works
              </Button>
            </div>
            <div className="flex items-center gap-5 pt-2 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <Leaf className="size-4 text-brand" /> Carbon neutral
              </span>
              <span className="flex items-center gap-1.5">
                <Recycle className="size-4 text-brand" /> 100% recycled
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-4 text-brand" /> Hand-crafted
              </span>
            </div>
          </div>
          <CheckerBox className="aspect-[5/4] w-full" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 space-y-10">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">
              How It Works
            </h2>
            <a
              href="/how-it-works"
              className="text-sm text-white/80 hover:text-white flex items-center gap-1"
            >
              See the full process <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-[12px] bg-white/10 border border-white/15 p-8 space-y-3"
              >
                <div className="font-display text-5xl tracking-wide text-white/70">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-white/80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the Collection */}
      <section className="bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 space-y-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionTag>The collection</SectionTag>
              <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink mt-3">
                Shop the Collection
              </h2>
            </div>
            <a
              href="/product/memory-keepsake-bandana"
              className="text-sm text-brand hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {collection.map((p) => (
              <a
                key={p.name}
                href="/product/memory-keepsake-bandana"
                className="group block"
              >
                <div className={`aspect-square rounded-[12px] ${p.tone} relative overflow-hidden`}>
                  <div className="checker-pattern absolute inset-0 opacity-20" />
                </div>
                <div className="pt-3 space-y-1">
                  <div className="text-xs uppercase tracking-wide text-ink-muted">
                    {p.from}
                  </div>
                  <div className="font-semibold text-ink group-hover:text-brand">
                    {p.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Impact counters */}
      <section className="bg-brand text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-14 text-center space-y-6">
          <p className="text-sm tracking-widest uppercase text-white/70">
            Impact to date
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {counters.map((c) => (
              <div key={c.label} className="space-y-1">
                <div className="font-display text-5xl md:text-6xl tracking-wide">
                  {c.value}
                </div>
                <div className="text-sm text-white/80">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 space-y-8">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
            Stories from Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map((s) => (
              <Card key={s.name} className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
                    {s.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-ink">{s.name}</div>
                    <div className="text-xs text-ink-muted">{s.title}</div>
                  </div>
                </div>
                <p className="text-ink-muted italic leading-relaxed">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Second life CTA */}
      <section className="bg-[#F4B860]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-[#5C2800]">
              Give Your Clothes a Second Life.
            </h2>
          </div>
          <div className="flex gap-3">
            <Button href="/recycle" size="lg">
              Start Recycling
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Get Early Access to New Drops
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Be first to see new collections and transformation stories from our
            community.
          </p>
          <form className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 h-12 rounded-full px-5 bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-white"
            />
            <Button type="submit" size="lg" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
