"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { LoadingShell } from "@/components/LoadingShell";
import { CheckCircle2 } from "lucide-react";
import {
  STAGE_LABEL,
  STAGE_ORDER,
  formatDate,
  stageIndex,
  useStore,
  useStoreHydrated,
} from "@/lib/store";

const STATUS_TONE: Record<string, string> = {
  submitted: "bg-border text-ink",
  received: "bg-sky-100 text-sky-800",
  ai: "bg-amber-100 text-amber-800",
  production: "bg-sky-100 text-sky-800",
  shipped: "bg-success-soft text-success",
};

const fallbackImages = [
  "/shop/generated-1776205086002.png",
  "/shop/generated-1776205099693.png",
  "/shop/generated-1776205118514.png",
];

export default function TrackingPage() {
  const hydrated = useStoreHydrated();
  const { submissions } = useStore();

  if (!hydrated) {
    return <LoadingShell />;
  }

  const active = submissions.filter((s) => s.stage !== "shipped");
  const past = submissions.filter((s) => s.stage === "shipped");

  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-10 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide">
              Tracking Center
            </h1>
            <p className="text-white/80 mt-1">
              Follow every submission in real-time.
            </p>
          </div>
          <div className="flex gap-3">
            <KPI v={String(active.length)} l="Active" />
            <KPI v={String(past.length)} l="Delivered" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-10 space-y-6">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            Active Submissions
          </h2>
          {active.length === 0 ? (
            <Card className="p-10 text-center text-ink-muted">
              Nothing in-flight. Start a new submission from{" "}
              <Link href="/customize" className="text-brand hover:underline">
                Customize
              </Link>
              .
            </Card>
          ) : (
            <div className="space-y-4">
              {active.map((a) => (
                <Card key={a.id} className="p-6 space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl tracking-wide text-brand">
                        {a.id}
                      </span>
                      <div>
                        <div className="font-semibold text-ink">{a.item}</div>
                        <div className="text-xs text-ink-muted">
                          Submitted {formatDate(a.submittedAt)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-medium rounded-full px-2.5 py-1 ${STATUS_TONE[a.stage]}`}
                      >
                        {STAGE_LABEL[a.stage]}
                      </span>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <StageBar at={stageIndex(a.stage)} />
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 pb-20 space-y-6">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            Past Deliveries
          </h2>
          {past.length === 0 ? (
            <Card className="p-10 text-center text-ink-muted">
              No past deliveries yet.
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {past.map((p, index) => {
                const src =
                  p.photos?.[0] ??
                  fallbackImages[index % fallbackImages.length];
                return (
                  <Card
                    key={p.id}
                    className="p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative size-12 shrink-0 overflow-hidden rounded-[8px] bg-card">
                        <Image
                          src={src}
                          alt={p.item}
                          fill
                          unoptimized={src.startsWith("data:")}
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm text-brand font-semibold">
                          {p.id}
                        </div>
                        <div className="font-semibold text-ink">{p.item}</div>
                        <div className="text-xs text-ink-muted">
                          {formatDate(p.submittedAt)}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-success bg-success-soft px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" /> Delivered
                    </span>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function KPI({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-[12px] bg-white/10 border border-white/20 px-5 py-3 text-center min-w-[88px]">
      <div className="font-display text-2xl">{v}</div>
      <div className="text-xs text-white/80">{l}</div>
    </div>
  );
}

function StageBar({ at }: { at: number }) {
  return (
    <div className="flex items-center">
      {STAGE_ORDER.map((key, i) => {
        const done = i < at;
        const active = i === at;
        return (
          <div key={key} className="flex-1 flex items-center last:flex-none">
            <div className="flex flex-col items-center gap-1 min-w-[64px]">
              <div
                className={`size-5 rounded-full border-2 ${
                  done
                    ? "bg-brand border-brand"
                    : active
                      ? "bg-amber-400 border-amber-400"
                      : "bg-cream border-border"
                }`}
              />
              <div
                className={`text-[11px] tracking-wide uppercase ${
                  done || active ? "text-ink" : "text-ink-muted"
                }`}
              >
                {STAGE_LABEL[key]}
              </div>
            </div>
            {i !== STAGE_ORDER.length - 1 && (
              <div
                className={`h-[3px] flex-1 rounded-full mx-2 ${
                  i < at ? "bg-brand" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
