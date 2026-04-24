import { Button, Card, SectionTag } from "@/components/ui";
import {
  Upload,
  Camera,
  Sparkles,
  Scissors,
  Package,
  ShieldCheck,
  Brain,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Upload,
    title: "Submit Your Textile",
    body: "Upload a photo and tell us about the material. We'll verify it's eligible in under 60 seconds.",
    tag: "1 min",
  },
  {
    n: "02",
    icon: Camera,
    title: "AI Material Scan",
    body: "Our vision model identifies fibers, weight, and condition. No human guesswork.",
    tag: "Automated",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Ship to Us",
    body: "We email a free, prepaid label. Drop it at any post office or have it picked up.",
    tag: "Free shipping",
  },
  {
    n: "04",
    icon: Scissors,
    title: "We Craft the Product",
    body: "Artisan partners cut, sew and finish. Every stitch logged for traceability.",
    tag: "Artisan made",
  },
  {
    n: "05",
    icon: Package,
    title: "Get the Product",
    body: "Carbon-neutral delivery. Unbox a one-of-a-kind piece with a full journey report.",
    tag: "4–6 weeks",
  },
];

const aiFeatures = [
  {
    title: "Quality grading",
    body: "Our model scores textiles across 12 dimensions before humans ever touch them.",
  },
  {
    title: "Design generation",
    body: "Based on your pet profile, we propose 3–5 pattern options using only your fabric.",
  },
  {
    title: "Fair-use guardrails",
    body: "If your item fails verification, we flag it fast and tell you exactly why.",
  },
];

const safety = [
  "Non-toxic dyes and threading only",
  "Hypoallergenic fill where required",
  "Chew-tested for dog and cat use",
  "OEKO-TEX certified finishing",
  "Independent lab audits every quarter",
];

const faqs = [
  {
    q: "What kinds of clothing do you accept?",
    a: "Natural fibers (cotton, wool, linen, denim, silk) with minimal synthetic blending. We'll check automatically when you upload.",
  },
  {
    q: "How long does the whole process take?",
    a: "Most orders ship in 4–6 weeks. You can track every stage in your account.",
  },
  {
    q: "Is the AI grading actually fair?",
    a: "Our grading rubric is public and our datasets are audited. You can always request a human re-review.",
  },
  {
    q: "What happens if my item is rejected?",
    a: "We partner with textile recyclers so nothing ends up in landfill — you'll get a free donation receipt.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 text-center space-y-5">
          <SectionTag>The process</SectionTag>
          <h1 className="font-display text-5xl md:text-7xl tracking-wide">
            How It Works
          </h1>
          <p className="text-white/85 max-w-xl mx-auto">
            Five steps from forgotten fabric to your pet&apos;s new favorite
            thing.
          </p>
        </div>
      </section>

      <section className="bg-cream border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex gap-8 text-sm font-medium overflow-x-auto">
          {["Donate Flow", "What The AI Does", "Safety & Trust", "FAQ"].map(
            (t, i) => (
              <button
                key={t}
                className={`py-5 border-b-2 whitespace-nowrap ${i === 0 ? "border-brand text-brand" : "border-transparent text-ink-muted"}`}
              >
                {t}
              </button>
            ),
          )}
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 space-y-5">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-brand mb-8">
            From Closet to Pet Product
          </h2>
          {steps.map((s) => (
            <Card key={s.n} className="p-6 md:p-8 flex items-center gap-6">
              <div className="font-display text-5xl tracking-wide text-brand/40 w-16 shrink-0">
                {s.n}
              </div>
              <div className="flex-1 space-y-1.5 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-brand bg-brand-soft px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <p className="text-ink-muted">{s.body}</p>
              </div>
              <div className="size-16 md:size-20 rounded-[12px] bg-brand-soft hidden sm:flex items-center justify-center shrink-0">
                <s.icon className="size-8 text-brand" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 space-y-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/70">
              <Brain className="size-4" /> AI Transparency
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">
              What Does the AI Actually Do?
            </h2>
            <p className="text-white/85">
              Everything our model does, in plain language. No black box.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {aiFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-[12px] bg-white/10 border border-white/15 p-6 space-y-2"
              >
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 grid md:grid-cols-[1fr_360px] gap-10 items-start">
          <div className="space-y-6">
            <SectionTag>Safety & Trust</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
              Is This Safe for My Pet?
            </h2>
            <p className="text-ink-muted max-w-xl">
              Every product is tested, graded and audited before it ships. Your
              pet&apos;s wellbeing is non-negotiable.
            </p>
            <ul className="space-y-3">
              {safety.map((s) => (
                <li key={s} className="flex items-start gap-3 text-ink">
                  <CheckCircle2 className="size-5 text-brand mt-0.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-[#4A7A3A] border-0 text-white p-8 text-center space-y-3">
            <ShieldCheck className="size-10 mx-auto" />
            <div className="font-display text-5xl tracking-wide">100%</div>
            <div className="font-semibold">Pet Safe</div>
            <p className="text-white/85 text-sm">
              No sharp edges, no toxic dyes, no compromise.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-[#fff5e9]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 space-y-6">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[12px] bg-card border border-border p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-semibold text-ink">{f.q}</span>
                  <span className="text-brand text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-ink-muted mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 text-center space-y-6">
          <Leaf className="size-10 mx-auto text-white/80" />
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Ready to Start?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto">
            Turn a forgotten shirt into something your pet will love for years.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/recycle" size="lg" variant="secondary">
              Start Recycling
            </Button>
            <Button href="/impact" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
              See Our Impact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
