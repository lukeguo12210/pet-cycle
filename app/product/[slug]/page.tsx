import Link from "next/link";
import { Button, Card, CheckerBox, SectionTag } from "@/components/ui";
import { Sparkles, CheckCircle2 } from "lucide-react";

const journey = [
  { label: "Donation Received", done: true },
  { label: "Sorted & Assessed", done: true },
  { label: "Cleaned & Prepped", done: true },
  { label: "Crafted by Artisans", done: false, active: true },
  { label: "Ready to Ship", done: false },
];

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  void params;
  return (
    <>
      <section className="bg-cream border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-3 text-xs text-ink-muted flex gap-2">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span>/</span>
          <Link href="/account" className="hover:text-brand">
            Closet
          </Link>
          <span>/</span>
          <span className="text-ink">Memory Keepsake</span>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-3 text-sm text-white/90 flex items-center gap-2">
          <Sparkles className="size-4" />
          This is a personalised item made from your donated Baby Blanket — it
          cannot be returned.
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-14 grid md:grid-cols-[1fr_1.1fr] gap-10">
          <div className="space-y-4">
            <CheckerBox className="aspect-square w-full" />
            <div className="grid grid-cols-4 gap-3">
              {["bg-brand", "bg-[#F4E0A8]", "bg-[#E9C9A4]", "bg-[#D8B89B]"].map(
                (c, i) => (
                  <div key={i} className={`aspect-square rounded-[8px] ${c}`} />
                ),
              )}
            </div>
            <div className="text-xs text-ink-muted flex items-center gap-1.5">
              <Sparkles className="size-3" /> Personalised — Non-returnable
            </div>
          </div>

          <div className="space-y-5">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
              🎁 Custom Made For You
            </span>
            <h1 className="font-display text-5xl md:text-6xl tracking-wide text-ink">
              Memory Keepsake Bandana
            </h1>
            <p className="text-ink-muted">
              Crafted from: Baby Blanket (submitted Nov 13)
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-display text-4xl text-brand">$0.00</span>
              <span className="text-ink-muted">
                Included in your submission
              </span>
            </div>

            <Card className="p-5 space-y-3 bg-[#FCF5EB]">
              <div className="text-sm font-semibold text-ink">
                Personalisation Details
              </div>
              <Detail k="Name Embroidery" v="Rose" />
              <Detail k="Colour Choice" v="Warm Blush" />
              <Detail k="Size" v="Medium" />
            </Card>

            <Card className="p-5 bg-cream">
              <div className="flex items-start gap-3">
                <span className="size-9 rounded-full bg-brand text-white flex items-center justify-center font-semibold text-sm">
                  SM
                </span>
                <div>
                  <p className="italic text-ink-muted leading-relaxed">
                    &ldquo;They recreated my baby girl&apos;s first home. I have
                    another little one and gets to carry it home on the first
                    night.&rdquo;
                  </p>
                  <div className="text-xs text-ink-muted mt-1">
                    Sarah M. · Received January 5, 2026
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button size="lg" className="justify-center">
                Approve Design
              </Button>
              <Button size="lg" variant="secondary" className="justify-center">
                Request Changes
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-ink-muted">
                <span>Production timeline</span>
                <span>Shipping Apr 10</span>
              </div>
              <div className="h-2 rounded-full bg-[#F4E5D1] overflow-hidden">
                <div className="h-full bg-[#4A7A3A] w-[68%]" />
              </div>
              <div className="flex items-center gap-2 text-xs text-success">
                <CheckCircle2 className="size-4" />
                This keepsake saved your Baby Blanket from landfill.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 space-y-6">
          <SectionTag>Material journey</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-ink">
            The Material Journey
          </h2>
          <div className="flex items-center">
            {journey.map((step, i) => (
              <div key={step.label} className="flex-1 flex items-center last:flex-none">
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div
                    className={`size-5 rounded-full border-2 ${
                      step.done
                        ? "bg-brand border-brand"
                        : step.active
                          ? "border-brand bg-brand/20"
                          : "bg-cream border-border"
                    }`}
                  />
                  <div
                    className={`text-[11px] text-center tracking-wide ${
                      step.done || step.active ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {step.label}
                  </div>
                </div>
                {i !== journey.length - 1 && (
                  <div
                    className={`h-[3px] flex-1 rounded-full mx-2 ${
                      step.done ? "bg-brand" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink-muted">{k}</span>
      <span className="font-medium text-ink">{v}</span>
    </div>
  );
}
