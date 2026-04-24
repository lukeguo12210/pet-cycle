export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm text-brand font-medium">
          <span className="size-2 rounded-full bg-brand" />
          Coming soon
        </div>
        <h1 className="font-display text-6xl md:text-7xl text-brand tracking-wide">
          PawCycle
        </h1>
        <p className="text-lg text-ink-muted">
          Every product is made from recycled textiles. No two are exactly
          alike.
        </p>
      </div>
    </div>
  );
}
