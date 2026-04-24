import { Button, Card } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

const stages = [
  { key: "submitted", label: "Submitted" },
  { key: "received", label: "Received" },
  { key: "ai", label: "AI Review" },
  { key: "production", label: "Production" },
  { key: "shipped", label: "Shipped" },
];

type Active = {
  id: string;
  item: string;
  submitted: string;
  at: number; // index into stages (currently active)
  status: string;
  color: string;
};

const active: Active[] = [
  {
    id: "#0234",
    item: "Baby Blanket - 2 items",
    submitted: "Mar 15, 2026",
    at: 2,
    status: "Under AI Review",
    color: "bg-amber-100 text-amber-800",
  },
  {
    id: "#0198",
    item: "Cotton T-Shirt - 1 item",
    submitted: "Mar 8, 2026",
    at: 3,
    status: "In Production",
    color: "bg-sky-100 text-sky-800",
  },
];

const past = [
  { id: "#0156", item: "Denim Jacket", date: "Feb 20, 2026" },
  { id: "#0102", item: "Kids Sweater", date: "Jan 30, 2026" },
];

export default function TrackingPage() {
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
            <KPI v="3" l="Active" />
            <KPI v="2" l="Delivered" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-10 space-y-6">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            Active Submissions
          </h2>
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
                        Submitted {a.submitted}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium rounded-full px-2.5 py-1 ${a.color}`}>
                      {a.status}
                    </span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
                <StageBar at={a.at} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 pb-20 space-y-6">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            Past Deliveries
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {past.map((p) => (
              <Card
                key={p.id}
                className="p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-[8px] bg-[#E9C9A4] checker-pattern" />
                  <div>
                    <div className="text-sm text-brand font-semibold">
                      {p.id}
                    </div>
                    <div className="font-semibold text-ink">{p.item}</div>
                    <div className="text-xs text-ink-muted">{p.date}</div>
                  </div>
                </div>
                <span className="text-xs text-success bg-success-soft px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <CheckCircle2 className="size-3.5" /> Delivered
                </span>
              </Card>
            ))}
          </div>
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
      {stages.map((s, i) => {
        const done = i < at;
        const active = i === at;
        return (
          <div key={s.key} className="flex-1 flex items-center last:flex-none">
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
                {s.label}
              </div>
            </div>
            {i !== stages.length - 1 && (
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
