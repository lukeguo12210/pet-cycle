"use client";

import { useState } from "react";
import { Button, Card, CheckerBox, SectionTag } from "@/components/ui";
import {
  Upload,
  PawPrint,
  Sparkles,
  Palette,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  { n: "01", label: "Submission", icon: Upload },
  { n: "02", label: "About Your Pet", icon: PawPrint },
  { n: "03", label: "Recommendations", icon: Sparkles },
  { n: "04", label: "Style", icon: Palette },
  { n: "05", label: "Preview", icon: CheckCircle2 },
];

const products = [
  {
    title: "Memory Keepsake Bandana",
    body: "Soft-touch textile, embroidered with your pet's initials.",
    price: "$0 · included",
  },
  {
    title: "Comfort Cat Bed",
    body: "Plush, thick layer. Shipped rolled for safe delivery.",
    price: "$12 craft fee",
  },
  {
    title: "Heritage Dog Collar",
    body: "Hand-stitched and weather-treated for daily walks.",
    price: "$18 craft fee",
  },
];

const palettes = [
  { name: "Warm Blush", color: "#CC3300" },
  { name: "Ochre", color: "#E8A948" },
  { name: "Dusk Olive", color: "#4A7A3A" },
  { name: "Charcoal", color: "#3A2820" },
  { name: "Cloud", color: "#F4E5D1" },
];

export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(0);
  const [palette, setPalette] = useState(0);

  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 text-center space-y-4">
          <SectionTag>Customize</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide">
            Customize for Your Pet
          </h1>
          <p className="text-white/85 max-w-xl mx-auto">
            Tell us about the clothes you&apos;d like to transform, and your
            pet&apos;s personality.
          </p>
        </div>
      </section>

      <section className="bg-card border-b border-border sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-4 grid grid-cols-5 gap-2">
          {steps.map((s, i) => {
            const done = i + 1 < step;
            const active = i + 1 === step;
            return (
              <button
                key={s.n}
                onClick={() => setStep(i + 1)}
                className={`flex items-center gap-2 rounded-[12px] px-3 py-2 text-left ${
                  active
                    ? "bg-brand-soft border border-brand"
                    : done
                      ? "bg-[#FCF5EB]"
                      : "bg-transparent"
                }`}
              >
                <div
                  className={`size-8 rounded-full flex items-center justify-center font-semibold text-xs ${
                    done
                      ? "bg-brand text-white"
                      : active
                        ? "bg-brand text-white"
                        : "bg-border text-ink-muted"
                  }`}
                >
                  {s.n}
                </div>
                <div className="hidden md:block">
                  <div className="text-xs text-ink-muted">Step {s.n}</div>
                  <div className="text-sm font-semibold text-ink">
                    {s.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 md:px-16 py-12 space-y-8">
          {step === 1 && (
            <Card className="p-8 space-y-5">
              <h2 className="font-display text-3xl tracking-wide text-ink">
                Tell us about the clothes you&apos;d like to transform
              </h2>
              <div className="rounded-[12px] border-2 border-dashed border-border bg-cream p-10 text-center space-y-3">
                <Upload className="size-10 mx-auto text-brand" />
                <div className="font-semibold text-ink">
                  Drop photos here or browse
                </div>
                <p className="text-sm text-ink-muted">
                  JPG or PNG up to 10 MB. Best results with natural lighting.
                </p>
                <Button size="md" variant="secondary">
                  Browse files
                </Button>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setStep(2)}>
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-8 space-y-6">
              <h2 className="font-display text-3xl tracking-wide text-ink">
                Tell Us About Your Pet
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Pet name" placeholder="Biscuit" />
                <Field label="Species" placeholder="Dog / Cat / Other" />
                <Field label="Breed" placeholder="Corgi" />
                <Field label="Weight" placeholder="10 kg" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-ink">
                  Personality
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Playful",
                    "Lazy",
                    "Adventurous",
                    "Cuddly",
                    "Shy",
                    "Chaotic",
                  ].map((t) => (
                    <button
                      key={t}
                      className="rounded-full px-4 py-1.5 text-sm border border-border text-ink-muted hover:border-brand hover:text-brand"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setStep(3)}>
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-8 space-y-6">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-3xl tracking-wide text-ink">
                  AI Recommendations for Your Pet
                </h2>
                <span className="text-xs text-brand bg-brand-soft px-2.5 py-1 rounded-full">
                  3 matched
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {products.map((p, i) => (
                  <button
                    key={p.title}
                    onClick={() => setSelected(i)}
                    className={`text-left rounded-[12px] overflow-hidden border-2 ${
                      selected === i
                        ? "border-brand shadow-card-strong"
                        : "border-border"
                    } bg-cream`}
                  >
                    <CheckerBox className="aspect-[4/3] w-full rounded-none" />
                    <div className="p-4 space-y-2">
                      <div className="font-semibold text-ink">{p.title}</div>
                      <p className="text-xs text-ink-muted">{p.body}</p>
                      <div className="text-sm text-brand font-medium">
                        {p.price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button onClick={() => setStep(4)}>
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card className="p-8 space-y-6">
              <h2 className="font-display text-3xl tracking-wide text-ink">
                Style Selection
              </h2>
              <div className="space-y-3">
                <div className="text-sm font-medium text-ink">
                  Palette ({palettes[palette].name})
                </div>
                <div className="flex gap-3">
                  {palettes.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => setPalette(i)}
                      className={`size-12 rounded-full border-2 ${
                        palette === i ? "border-brand" : "border-border"
                      }`}
                      style={{ backgroundColor: p.color }}
                      aria-label={p.name}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-ink">
                  Embroidery text
                </div>
                <input
                  placeholder="Biscuit"
                  className="w-full rounded-[8px] border border-border px-4 py-3 bg-cream focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(3)}>
                  Back
                </Button>
                <Button onClick={() => setStep(5)}>
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </Card>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <Card className="p-8 space-y-6">
                <h2 className="font-display text-3xl tracking-wide text-ink">
                  Preview & Checkout
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <CheckerBox className="aspect-square w-full" />
                  <div className="space-y-3 text-sm">
                    <Line k="Product" v={products[selected].title} />
                    <Line k="Palette" v={palettes[palette].name} />
                    <Line k="Embroidery" v="Biscuit" />
                    <Line k="Material" v="Your donated Baby Blanket" />
                    <div className="pt-4 border-t border-border" />
                    <Line k="Craft fee" v={products[selected].price} />
                    <Line k="Shipping" v="Free (carbon neutral)" />
                    <div className="flex items-center justify-between pt-3">
                      <span className="font-semibold text-ink">Total</span>
                      <span className="font-display text-2xl text-brand">
                        $0.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(4)}>
                    Back
                  </Button>
                  <Button size="lg">Confirm & Start Production</Button>
                </div>
              </Card>

              <Card className="p-8 text-center space-y-4 bg-success-soft border-success/40">
                <div className="size-14 rounded-full bg-success text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="size-7" />
                </div>
                <h3 className="font-display text-3xl tracking-wide text-ink">
                  Payment Successful!
                </h3>
                <p className="text-ink-muted max-w-md mx-auto">
                  You&apos;ll get updates at each production stage. Expected
                  delivery 4–6 weeks.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Button href="/tracking">Track your order</Button>
                  <Button href="/account" variant="secondary">
                    Back to account
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-ink-muted uppercase tracking-wide">
        {label}
      </div>
      <input
        placeholder={placeholder}
        className="w-full rounded-[8px] border border-border px-4 py-3 bg-cream focus:outline-none focus:border-brand"
      />
    </div>
  );
}

function Line({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-muted">{k}</span>
      <span className="font-medium text-ink text-right">{v}</span>
    </div>
  );
}
