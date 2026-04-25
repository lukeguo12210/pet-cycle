import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import {
  CheckCircle2,
  Heart,
  Leaf,
  Minus,
  Package,
  Plus,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import { detailImages, getProductBySlug, shopProducts } from "@/lib/catalog";
import clsx from "clsx";

const journey = [
  { label: "Collected", icon: Package, tone: "done" },
  { label: "Cleaned", icon: Sparkles, tone: "done" },
  { label: "AI Sorted", icon: CheckCircle2, tone: "done" },
  { label: "Crafted", icon: Scissors, tone: "active" },
  { label: "Delivered", icon: Truck, tone: "todo" },
];

const safety = [
  "Cleaned and sanitized",
  "Non-toxic dyes and threads",
  "Pet-safe finishing checks",
];

export function generateStaticParams() {
  return shopProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const gallery =
    product.slug === "cotton-baby-bandana"
      ? detailImages
      : [product.image, ...detailImages.slice(1)];

  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center gap-2 px-6 text-sm text-ink-muted md:px-16">
          <Link href="/shop" className="text-brand hover:underline">
            Shop
          </Link>
          <span>/</span>
          <span className="text-brand">{product.category}</span>
          <span>/</span>
          <span className="font-semibold text-ink">{product.name}</span>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-8 md:px-16 lg:grid-cols-[560px_1fr] lg:gap-12">
          <div className="space-y-3">
            <div className="relative aspect-square overflow-hidden rounded-[12px] bg-card">
              <Image
                src={gallery[0]}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {gallery.map((src, index) => (
                <div
                  key={src}
                  className={clsx(
                    "relative aspect-square overflow-hidden rounded-[8px] border bg-card",
                    index === 0 ? "border-2 border-brand" : "border-border",
                  )}
                >
                  <Image
                    src={src}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="inline-flex rounded-full bg-[#FFE0CC] px-3.5 py-1.5 text-xs font-semibold text-brand">
              {product.tag}
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <h1 className="font-display text-5xl tracking-wide text-ink md:text-6xl">
                {product.name}
              </h1>
              <div className="mt-3 text-2xl font-bold text-brand">
                {product.price}
              </div>
            </div>

            <Card className="bg-[#FFF4EC] p-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand">
                  The Story Behind This Product
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {product.story}
                </p>
              </div>
            </Card>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-ink">Select Size</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => {
                  const disabled = product.disabledSizes?.includes(size);
                  return (
                    <button
                      key={size}
                      disabled={disabled}
                      className={clsx(
                        "min-w-14 rounded-[8px] border px-5 py-2 text-sm font-medium disabled:cursor-not-allowed",
                        disabled
                          ? "border-border bg-[#DDDDDD] text-ink-muted"
                          : index === 0
                            ? "border-2 border-brand bg-card text-brand"
                            : "border-border bg-card text-ink hover:border-brand",
                      )}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-ink">Quantity</div>
              <div className="inline-flex overflow-hidden rounded-[8px] border border-border bg-card">
                <button className="flex size-10 items-center justify-center text-ink-muted">
                  <Minus className="size-4" />
                </button>
                <div className="flex h-10 w-12 items-center justify-center border-x border-border text-sm font-semibold">
                  1
                </div>
                <button className="flex size-10 items-center justify-center text-ink-muted">
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <Button size="lg" className="justify-center rounded-[8px]">
                <ShoppingBag className="size-4" /> Add to Cart
              </Button>
              <button
                type="button"
                aria-label="Save to wishlist"
                title="Save to wishlist"
                className="flex h-12 items-center justify-center rounded-[8px] border border-border bg-card px-4 text-brand hover:border-brand"
              >
                <Heart className="size-5" />
              </button>
            </div>

            <Card className="border-[#C8E6C9] bg-[#F0F7F1] p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <ShieldCheck className="size-4 text-success" />
                  Safety Assurance
                </div>
                <div className="space-y-2">
                  {safety.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-ink-muted"
                    >
                      <CheckCircle2 className="size-4 text-success" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="flex items-center gap-2 rounded-[8px] border border-border bg-cream px-3.5 py-2.5 text-sm text-ink">
              <Leaf className="size-4 text-success" />
              This product saved {product.savedGrams}g of textile from
              landfill.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1440px] space-y-6 px-6 py-10 md:px-16">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-ink">
              The Material Journey
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              From your closet to your pet - every step matters.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="flex min-w-[720px] items-center">
              {journey.map((step, index) => {
                const active = step.tone !== "todo";
                const completeLine = index < 3;
                return (
                  <div
                    key={step.label}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <div className="flex min-w-24 flex-col items-center gap-2">
                      <div
                        className={clsx(
                          "flex size-10 items-center justify-center rounded-full border-2",
                          step.tone === "done"
                            ? "border-brand bg-brand text-white"
                            : step.tone === "active"
                              ? "border-success bg-success text-white"
                              : "border-border bg-card text-ink-muted",
                        )}
                      >
                        <step.icon className="size-4" />
                      </div>
                      <div
                        className={clsx(
                          "text-sm font-semibold",
                          active ? "text-ink" : "text-ink-muted",
                        )}
                      >
                        {step.label}
                      </div>
                    </div>
                    {index !== journey.length - 1 && (
                      <div
                        className={clsx(
                          "mx-3 h-0.5 flex-1 rounded-full",
                          completeLine ? "bg-brand" : "bg-border",
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
