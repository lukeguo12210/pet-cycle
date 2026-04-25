import { Button, Card, SectionTag } from "@/components/ui";
import {
  Shirt,
  Scissors,
  Sparkles,
  Package as PackageIcon,
  Baby,
  Briefcase,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";

const accept = [
  {
    icon: Shirt,
    name: "Cotton",
    body: "T-shirts, sheets, lightweight apparel. Best for bandanas & toys.",
  },
  {
    icon: Sparkles,
    name: "Denim",
    body: "Jackets, jeans, shirts. Turned into sturdy pet beds & crates.",
  },
  {
    icon: Scissors,
    name: "Fleece",
    body: "Sweaters, blankets, throws. Perfect for cozy small-pet beds.",
  },
  {
    icon: Briefcase,
    name: "Knitwear",
    body: "Wool and cashmere pieces become heirloom collars & cat caves.",
  },
  {
    icon: Baby,
    name: "Synthetic Blend",
    body: "Limited acceptance — we only use where safety is proven.",
  },
  {
    icon: Shirt,
    name: "Mixed Fabric",
    body: "Case-by-case review. Upload photos and our AI decides.",
  },
];

const counters = [
  { v: "2,847", l: "Clothes Collected" },
  { v: "312 kg", l: "Textile Saved" },
  { v: "3,210", l: "Pet Products Made" },
  { v: "98%", l: "Landfill Avoided" },
];

export default function RecyclePage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-24 text-center space-y-6">
          <SectionTag>Start here</SectionTag>
          <h1 className="font-display text-5xl md:text-7xl tracking-wide">
            Give Your Clothes a Second Life
          </h1>
          <p className="text-white/85 max-w-2xl mx-auto">
            PawCycle uses AI to transform your textiles into premium pet
            products — safely, transparently, and in 4–6 weeks flat.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button size="lg" variant="secondary" href="#submit">
              Start Recycling
            </Button>
            <Button
              size="lg"
              href="/shop"
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              Learn the Process
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 space-y-10">
          <div className="text-center space-y-3">
            <SectionTag>What We Accept</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
              What We Accept
            </h2>
            <p className="text-ink-muted">
              We accept a wide range of fabric in good-to-excellent condition.
              Our AI sorting system keeps standards tight.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {accept.map((a) => (
              <Card key={a.name} className="p-6 space-y-2">
                <a.icon className="size-6 text-brand" />
                <h3 className="font-semibold text-ink">{a.name}</h3>
                <p className="text-ink-muted text-sm">{a.body}</p>
              </Card>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <AlertCircle className="size-4 text-brand" />
            We do not accept items with heavy stains, active odors, or
            biological contamination.
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {counters.map((c) => (
            <div key={c.l}>
              <div className="font-display text-4xl md:text-5xl tracking-wide">
                {c.v}
              </div>
              <div className="text-white/80 text-sm">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="submit" className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 space-y-10">
          <div className="text-center space-y-3">
            <SectionTag>Get started</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
              Two Ways to Participate
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-8 space-y-4">
              <Mail className="size-8 text-brand" />
              <h3 className="font-display text-2xl tracking-wide text-ink">
                Mail it in
              </h3>
              <p className="text-ink-muted">
                We email a free prepaid shipping label. Drop your bundle at any
                post office and we&apos;ll take it from there.
              </p>
              <Button href="/customize" size="md">
                Get a Prepaid Label
              </Button>
            </Card>
            <Card className="p-8 space-y-4">
              <MapPin className="size-8 text-brand" />
              <h3 className="font-display text-2xl tracking-wide text-ink">
                Drop it off
              </h3>
              <p className="text-ink-muted">
                Find a partner drop point near you. Many pet stores and
                sustainable retailers host a bin.
              </p>
              <Button href="#" size="md" variant="secondary">
                Find a Drop Point
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 text-center space-y-6">
          <PackageIcon className="size-10 mx-auto text-white/80" />
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Ready to Recycle?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto">
            Every piece of clothing you donate creates something beautiful and
            keeps textiles out of the landfill.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/customize" size="lg" variant="secondary">
              Start Recycling Now
            </Button>
            <Button
              href="/how-it-works"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
