import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1000px] mx-auto px-6 md:px-16 py-32 text-center space-y-6">
        <div className="font-display text-[9rem] leading-none text-brand">
          404
        </div>
        <h1 className="font-display text-4xl md:text-5xl tracking-wide text-ink">
          This page took a nap.
        </h1>
        <p className="text-ink-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist — but plenty of
          pets still need their keepsakes.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button href="/" size="lg">
            Back Home
          </Button>
          <Button href="/recycle" variant="secondary" size="lg">
            Start Recycling
          </Button>
        </div>
      </div>
    </section>
  );
}
