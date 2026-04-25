export function LoadingShell() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] space-y-6 px-6 py-8 md:px-16">
        <div className="h-28 animate-pulse rounded-[12px] border border-border bg-card" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-24 animate-pulse rounded-[12px] border border-border bg-card" />
          <div className="h-24 animate-pulse rounded-[12px] border border-border bg-card" />
          <div className="h-24 animate-pulse rounded-[12px] border border-border bg-card" />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="h-72 animate-pulse rounded-[12px] border border-border bg-card" />
          <div className="h-72 animate-pulse rounded-[12px] border border-border bg-card" />
        </div>
      </div>
    </section>
  );
}
