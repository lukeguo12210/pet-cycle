import Image from "next/image";
import { Button, Card, SectionTag } from "@/components/ui";
import { Leaf, Brain, ShieldCheck, Heart } from "lucide-react";

const counters = [
  { v: "2,847", l: "Clothes Collected", s: "Lovingly re-routed from closets." },
  { v: "312 kg", l: "Textile Saved", s: "Diverted from landfill." },
  { v: "3,210", l: "Pet Products Made", s: "One-of-a-kind goods crafted." },
  { v: "180 kg", l: "CO₂ Saved", s: "Offset from virgin-fiber production." },
];

const transformations = [
  {
    tag: "Wool Scarf → Dog Collar",
    quote: "I know, it's from NYC.",
    body: "My grandma's scarf now lives on my corgi. Best walks ever.",
    image: "/shop/generated-1776209580536.png",
  },
  {
    tag: "Jeans → Pet Bed",
    quote: "Jack from Portland",
    body: "Cat approved within 30 seconds. I can't take credit — she did.",
    image: "/shop/generated-1776209730635.png",
  },
  {
    tag: "Wedding Dress → Cat Cave",
    quote: "Bride-to-Memo",
    body: "I didn't want a box in the attic — I wanted something Miso loves.",
    image: "/shop/generated-1776209566692.png",
  },
];

const stories = [
  {
    initials: "MS",
    name: "Mia & Biscuit",
    title: "I submitted my baby's old swim trunks — and they were turned into a proper backpack. It's incredible quality and the fact that it's something Bo loves is the cherry on top.",
  },
  {
    initials: "JL",
    name: "James & Luna 🐾",
    title: "I never thought recycling could feel like personal magic. Luna's mat came from my old t-shirt drawer. The colors line up perfectly and nothing is wasted.",
  },
];

const commitments = [
  {
    icon: Brain,
    title: "Transparent AI",
    body: "We publish the logic of our models, and invite audits from our community.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    body: "Every product undergoes a safety check before it reaches your pet — no shortcuts.",
  },
  {
    icon: Heart,
    title: "Pet Ethos",
    body: "We can't just match fabric to form. We match it to love — one pet at a time.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 text-center space-y-4">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide">
            Our Impact
          </h1>
          <p className="text-white/85 max-w-xl mx-auto">
            Real clothes. Real pets. Real stories.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {counters.map((c) => (
            <div key={c.l} className="text-center space-y-1">
              <div className="font-display text-4xl md:text-5xl tracking-wide text-brand">
                {c.v}
              </div>
              <div className="font-semibold text-ink">{c.l}</div>
              <div className="text-sm text-ink-muted">{c.s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 pb-20 space-y-8">
          <div>
            <SectionTag>Transformations</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink mt-3">
              Transformations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {transformations.map((t, i) => (
              <Card key={t.tag} className="overflow-hidden">
                <div className="relative">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-card">
                    <Image
                      src={t.image}
                      alt={t.tag}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold tracking-wide uppercase text-white bg-brand px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                  <span className="absolute top-3 right-3 size-7 rounded-full bg-white text-brand font-semibold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                </div>
                <div className="p-5 space-y-1">
                  <div className="text-xs font-medium text-brand">
                    {t.quote}
                  </div>
                  <p className="text-ink-muted text-sm">{t.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 space-y-8">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
            Stories from Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {stories.map((s) => (
              <Card key={s.name} className="p-6 md:p-8 space-y-4 bg-[#FCF5EB]">
                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
                    {s.initials}
                  </span>
                  <div className="font-semibold">{s.name}</div>
                </div>
                <p className="text-ink-muted italic leading-relaxed">
                  &ldquo;{s.title}&rdquo;
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 space-y-8">
          <div>
            <SectionTag>Our Commitment</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink mt-3">
              What We Commit To
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {commitments.map((c) => (
              <Card key={c.title} className="p-6 space-y-3">
                <div className="size-10 rounded-full bg-brand-soft flex items-center justify-center">
                  <c.icon className="size-5 text-brand" />
                </div>
                <h3 className="font-semibold text-ink">{c.title}</h3>
                <p className="text-ink-muted text-sm">{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 text-center space-y-6">
          <Leaf className="size-9 mx-auto text-white/80" />
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Want to be part of the story?
          </h2>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/recycle" variant="secondary" size="lg">
              Start Recycling
            </Button>
            <Button
              href="/shop"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              Shop Our Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
