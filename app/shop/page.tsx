import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { ChevronDown, Check, SlidersHorizontal, ShoppingBag } from "lucide-react";
import { shopProducts, type ShopProduct } from "@/lib/catalog";
import clsx from "clsx";

const categories = [
  "All",
  "Apparel",
  "Toys",
  "Bedding",
  "Limited Pieces",
  "Baby Clothes Collection",
];

const filterGroups = [
  {
    title: "Pet Type",
    kind: "check",
    options: ["Dog", "Cat", "Rabbit"],
    active: ["Dog"],
  },
  {
    title: "Size",
    kind: "pill",
    options: ["XS", "S", "M", "L", "XL"],
    active: ["XS"],
  },
  {
    title: "Material",
    kind: "check",
    options: ["Cotton", "Denim", "Fleece", "Knitwear"],
    active: ["Cotton"],
  },
  {
    title: "Collection",
    kind: "check",
    options: ["Upcycled Cotton", "Baby Clothes", "Limited Edition"],
    active: ["Upcycled Cotton"],
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="mx-auto flex min-h-[140px] max-w-[1440px] flex-col items-center justify-center gap-2 px-6 py-10 text-center md:px-16">
          <h1 className="font-display text-5xl tracking-wide">Shop</h1>
          <p className="text-white/85">
            Every product is made from recycled textiles. No two are exactly
            alike.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-1 overflow-x-auto px-6 md:px-16">
          {categories.map((category, index) => (
            <button
              key={category}
              className={clsx(
                "shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
                index === 0
                  ? "bg-brand font-semibold text-white"
                  : "text-ink-muted hover:bg-brand-soft hover:text-brand",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-8 md:px-16 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <FilterPanel />
          </aside>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-ink-muted">128 products found</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="lg:hidden">
                  <SlidersHorizontal className="size-4" /> Filters
                </Button>
                <span className="text-sm text-ink-muted">Sort by:</span>
                <button className="inline-flex h-9 items-center gap-2 rounded-[8px] border border-border bg-card px-3 text-sm text-ink">
                  Newest <ChevronDown className="size-4 text-ink-muted" />
                </button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {shopProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterPanel() {
  return (
    <Card className="overflow-hidden">
      <div className="flex h-12 items-center justify-between px-5">
        <h2 className="font-display text-lg tracking-wide text-ink">Filters</h2>
        <button className="text-xs text-brand hover:underline">Clear All</button>
      </div>
      <div className="border-t border-border" />

      {filterGroups.map((group) => (
        <div key={group.title} className="border-b border-border">
          <button className="flex h-11 w-full items-center justify-between px-5 text-sm font-semibold text-ink">
            {group.title}
            <ChevronDown className="size-4 rotate-180 text-ink-muted" />
          </button>
          <div
            className={clsx(
              "px-5 pb-4",
              group.kind === "pill" ? "flex flex-wrap gap-2" : "space-y-3",
            )}
          >
            {group.options.map((option) =>
              group.kind === "pill" ? (
                <button
                  key={option}
                  className={clsx(
                    "rounded-full px-3 py-1.5 text-xs",
                    group.active.includes(option)
                      ? "bg-brand text-white"
                      : "bg-border text-ink",
                  )}
                >
                  {option}
                </button>
              ) : (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 text-sm text-ink"
                >
                  <span
                    className={clsx(
                      "flex size-4 items-center justify-center rounded-[3px]",
                      group.active.includes(option) ? "bg-brand" : "bg-border",
                    )}
                  >
                    {group.active.includes(option) && (
                      <Check className="size-3 text-white" />
                    )}
                  </span>
                  {option}
                </label>
              ),
            )}
          </div>
        </div>
      ))}

      <div className="border-b border-border px-5 py-4">
        <div className="mb-3 flex items-center justify-between text-xs text-ink-muted">
          <span>$0</span>
          <span>$120</span>
        </div>
        <div className="relative h-5">
          <div className="absolute left-0 right-0 top-2 h-1 rounded-full bg-border" />
          <div className="absolute left-[18%] right-[28%] top-2 h-1 rounded-full bg-brand" />
          <span className="absolute left-[16%] top-0 size-4 rounded-full bg-card shadow-card" />
          <span className="absolute right-[26%] top-0 size-4 rounded-full bg-card shadow-card" />
        </div>
      </div>

      <div className="flex h-12 items-center justify-between border-b border-border px-5">
        <span className="text-sm text-ink">In Stock Only</span>
        <span className="relative h-6 w-11 rounded-full bg-brand">
          <span className="absolute right-0.5 top-0.5 size-5 rounded-full bg-white" />
        </span>
      </div>

      <div className="space-y-3 p-5">
        <Button className="w-full justify-center">Apply Filters</Button>
        <button className="w-full text-sm text-brand hover:underline">
          Reset
        </button>
      </div>
    </Card>
  );
}

function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-transform group-hover:-translate-y-0.5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2 p-4">
          <div
            className={clsx(
              "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold",
              product.tagTone === "limited"
                ? "bg-[#FFE0CC] text-brand"
                : product.tagTone === "new"
                  ? "bg-[#E8F5E9] text-[#4CAF72]"
                  : "bg-brand-soft text-success",
            )}
          >
            {product.tag}
          </div>
          <div className="min-h-11">
            <h3 className="font-semibold text-ink group-hover:text-brand">
              {product.name}
            </h3>
            <div className="text-sm font-bold text-brand">{product.price}</div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-ink-muted">
            <ShoppingBag className="size-3.5" />
            {product.material} / {product.petType}
          </div>
        </div>
      </Card>
    </Link>
  );
}
