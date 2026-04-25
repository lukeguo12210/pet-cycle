"use client";

import Image from "next/image";
import { Button, Card } from "@/components/ui";
import { LoadingShell } from "@/components/LoadingShell";
import {
  Bell,
  CheckCircle2,
  Cpu,
  Heart,
  LayoutDashboard,
  MapPin,
  Package,
  Plus,
  RotateCcw,
  Settings,
  ShoppingBag,
  Truck,
} from "lucide-react";
import {
  STAGE_LABEL,
  STAGE_ORDER,
  formatDate,
  resetStore,
  stageIndex,
  useStore,
  useStoreHydrated,
  type SubmissionStage,
} from "@/lib/store";
import clsx from "clsx";

const sidebarItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "My Submissions", icon: Package },
  { label: "My Orders", icon: ShoppingBag },
  { label: "Tracking", icon: MapPin },
  { label: "Saved Items", icon: Heart },
  { label: "Settings", icon: Settings },
];

const submissionImages = [
  "/shop/generated-1776205086002.png",
  "/shop/generated-1776205099693.png",
  "/shop/generated-1776205118514.png",
];

const STATUS_TONE: Record<SubmissionStage, string> = {
  submitted: "bg-border text-ink",
  received: "bg-sky-100 text-sky-800",
  ai: "bg-amber-100 text-amber-800",
  production: "bg-sky-100 text-sky-800",
  shipped: "bg-success-soft text-success",
};

const activityMeta: Record<
  SubmissionStage,
  { icon: typeof Package; dot: string; badge: string }
> = {
  submitted: {
    icon: Package,
    dot: "bg-brand-soft text-brand",
    badge: "bg-border text-ink",
  },
  received: {
    icon: Package,
    dot: "bg-brand-soft text-brand",
    badge: "bg-sky-100 text-sky-800",
  },
  ai: {
    icon: Cpu,
    dot: "bg-amber-100 text-amber-700",
    badge: "bg-amber-100 text-amber-800",
  },
  production: {
    icon: Cpu,
    dot: "bg-sky-100 text-sky-700",
    badge: "bg-sky-100 text-sky-800",
  },
  shipped: {
    icon: Truck,
    dot: "bg-success-soft text-success",
    badge: "bg-success-soft text-success",
  },
};

export default function AccountPage() {
  const hydrated = useStoreHydrated();
  const { submissions, orders } = useStore();

  if (!hydrated) {
    return <LoadingShell />;
  }

  const activeOrders = orders.filter((order) => order.status !== "delivered");
  const textileSavedKg = (submissions.length * 0.2).toFixed(1);
  const featured =
    submissions.find((submission) => submission.stage !== "shipped") ??
    submissions[0];
  const progress = featured ? Math.max(15, (stageIndex(featured.stage) + 1) * 20) : 0;

  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1440px] gap-0 lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-border bg-card lg:min-h-[calc(100vh-72px)] lg:border-b-0 lg:border-r">
          <div className="sticky top-[72px] space-y-4 p-5">
            <div className="flex flex-col items-center gap-2 px-4 py-5 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white">
                S
              </div>
              <div>
                <div className="font-semibold text-ink">Sarah Chen</div>
                <div className="text-xs text-ink-muted">sarah@email.com</div>
              </div>
            </div>

            <div className="border-t border-border pt-3">
              <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.label}
                    className={clsx(
                      "flex items-center gap-3 rounded-[8px] px-3 py-2.5 text-sm transition-colors",
                      item.active
                        ? "bg-[#FFE0CC] font-semibold text-brand"
                        : "text-ink-muted hover:bg-brand-soft hover:text-brand",
                    )}
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <div className="space-y-6 px-6 py-8 md:px-8">
          <Card className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl tracking-wide text-ink">
                  Welcome back, Sarah
                </h1>
                <p className="text-sm text-ink-muted">
                  Here&apos;s what&apos;s happening with your recycling journey.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  aria-label="Notifications"
                  title="Notifications"
                  className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-brand hover:bg-[#FFE0CC]"
                >
                  <Bell className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Clear local data"
                  title="Clear local data"
                  onClick={() => resetStore()}
                  className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-brand hover:bg-[#FFE0CC]"
                >
                  <RotateCcw className="size-5" />
                </button>
                <Button href="/customize" className="rounded-[8px]">
                  <Plus className="size-4" /> Submit Clothes
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              value={String(submissions.length)}
              label="Total Clothes Submitted"
            />
            <StatCard value={String(activeOrders.length)} label="Active Orders" />
            <StatCard
              value={`${textileSavedKg} kg`}
              label="Textile Saved by You"
              dark
            />
          </div>

          <section className="space-y-4">
            <h2 className="font-display text-xl tracking-wide text-ink">
              Recent Activity
            </h2>
            <Card className="overflow-hidden">
              {submissions.length === 0 ? (
                <EmptyPanel
                  title="No activity yet"
                  body="Start a local submission and this timeline will update from your browser storage."
                />
              ) : (
                submissions.slice(0, 3).map((submission, index) => {
                  const meta = activityMeta[submission.stage];
                  return (
                    <div
                      key={submission.id}
                      className={clsx(
                        "flex flex-wrap items-center gap-3 px-5 py-4",
                        index !== Math.min(submissions.length, 3) - 1 &&
                          "border-b border-[#F5F0E8]",
                      )}
                    >
                      <span
                        className={clsx(
                          "flex size-9 shrink-0 items-center justify-center rounded-full",
                          meta.dot,
                        )}
                      >
                        <meta.icon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold text-ink">
                          Submission {submission.id} -{" "}
                          {STAGE_LABEL[submission.stage]}
                        </div>
                        <div className="text-xs text-ink-muted">
                          Submitted {formatDate(submission.submittedAt)}
                        </div>
                      </div>
                      <span
                        className={clsx(
                          "rounded-full px-2.5 py-1 text-xs font-semibold",
                          meta.badge,
                        )}
                      >
                        {STAGE_LABEL[submission.stage]}
                      </span>
                    </div>
                  );
                })
              )}
            </Card>
          </section>

          <div className="grid gap-4 xl:grid-cols-2">
            <section className="space-y-4">
              <h2 className="font-display text-xl tracking-wide text-ink">
                My Submissions
              </h2>
              <div className="space-y-3">
                {submissions.length === 0 ? (
                  <Card>
                    <EmptyPanel
                      title="No submissions"
                      body="Upload a textile photo to create your first saved submission."
                    />
                  </Card>
                ) : (
                  submissions.slice(0, 3).map((submission, index) => {
                    const src =
                      submission.photos?.[0] ??
                      submissionImages[index % submissionImages.length];
                    return (
                      <Card key={submission.id} className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative size-[60px] shrink-0 overflow-hidden rounded-[8px] bg-card">
                            <Image
                              src={src}
                              alt={submission.item}
                              fill
                              unoptimized={src.startsWith("data:")}
                              sizes="60px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs text-ink-muted">
                              {submission.id} -{" "}
                              {formatDate(submission.submittedAt)}
                            </div>
                            <div className="truncate text-sm font-semibold text-ink">
                              {submission.item}
                            </div>
                            <span
                              className={clsx(
                                "mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                                STATUS_TONE[submission.stage],
                              )}
                            >
                              {STAGE_LABEL[submission.stage]}
                            </span>
                          </div>
                        </div>
                      </Card>
                    );
                  })
                )}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl tracking-wide text-ink">
                Live Tracking
              </h2>
              <Card className="p-5">
                {featured ? (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold text-ink">
                          Submission {featured.id}
                        </div>
                        <div className="text-xs text-ink-muted">
                          Est. Apr 18, 2026
                        </div>
                      </div>
                      <Button href="/tracking" size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-brand-soft">
                      <div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="space-y-3">
                      {STAGE_ORDER.map((stage, index) => {
                        const activeIndex = stageIndex(featured.stage);
                        const done = index <= activeIndex;
                        return (
                          <div
                            key={stage}
                            className="flex items-center gap-3 text-sm"
                          >
                            <span
                              className={clsx(
                                "flex size-5 items-center justify-center rounded-full border",
                                done
                                  ? "border-brand bg-brand text-white"
                                  : "border-border bg-card text-ink-muted",
                              )}
                            >
                              {done && <CheckCircle2 className="size-3.5" />}
                            </span>
                            <span
                              className={done ? "font-medium text-ink" : "text-ink-muted"}
                            >
                              {STAGE_LABEL[stage]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center text-sm text-ink-muted">
                    No active submissions yet.
                  </div>
                )}
              </Card>
            </section>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Button href="/customize" size="lg" className="justify-center rounded-[8px]">
              Submit More Clothes
            </Button>
            <Button
              href="/shop"
              size="lg"
              variant="secondary"
              className="justify-center rounded-[8px]"
            >
              Browse Shop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  dark = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <Card
      className={clsx(
        "p-5",
        dark && "border-0 bg-success text-white shadow-card",
      )}
    >
      <div
        className={clsx(
          "font-display text-4xl tracking-wide",
          dark ? "text-white" : "text-brand",
        )}
      >
        {value}
      </div>
      <div className={clsx("text-sm", dark ? "text-success-soft" : "text-ink-muted")}>
        {label}
      </div>
    </Card>
  );
}

function EmptyPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-5 py-10 text-center">
      <div className="flex size-10 items-center justify-center rounded-full bg-brand-soft text-brand">
        <Package className="size-5" />
      </div>
      <div>
        <div className="font-semibold text-ink">{title}</div>
        <p className="mt-1 max-w-sm text-sm text-ink-muted">{body}</p>
      </div>
      <Button href="/customize" size="sm" className="rounded-[8px]">
        <Plus className="size-4" /> Start submission
      </Button>
    </div>
  );
}
