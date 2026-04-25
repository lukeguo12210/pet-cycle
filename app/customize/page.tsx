"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, SectionTag } from "@/components/ui";
import {
  Upload,
  PawPrint,
  Sparkles,
  Palette,
  CheckCircle2,
  ArrowRight,
  X,
} from "lucide-react";
import { createSubmissionAndOrder } from "@/lib/store";
import { fileToCompressedDataUrl } from "@/lib/image";

const steps = [
  { n: "01", label: "Submission", icon: Upload },
  { n: "02", label: "About Your Pet", icon: PawPrint },
  { n: "03", label: "Recommendations", icon: Sparkles },
  { n: "04", label: "Style", icon: Palette },
  { n: "05", label: "Preview", icon: CheckCircle2 },
];

const MATERIAL_OPTIONS = [
  "Baby Blanket",
  "Cotton T-Shirt",
  "Wool Scarf",
  "Denim Jacket",
  "Kids Sweater",
];

const products = [
  {
    title: "Memory Keepsake Bandana",
    body: "Soft-touch textile, embroidered with your pet's initials.",
    price: "$0 · included",
    image: "/shop/generated-1776204633290.png",
  },
  {
    title: "Comfort Cat Bed",
    body: "Plush, thick layer. Shipped rolled for safe delivery.",
    price: "$12 craft fee",
    image: "/shop/generated-1776209817856.png",
  },
  {
    title: "Heritage Dog Collar",
    body: "Hand-stitched and weather-treated for daily walks.",
    price: "$18 craft fee",
    image: "/shop/generated-1776209580536.png",
  },
];

const palettes = [
  { name: "Warm Blush", color: "#CC3300" },
  { name: "Ochre", color: "#E8A948" },
  { name: "Dusk Olive", color: "#4A7A3A" },
  { name: "Charcoal", color: "#3A2820" },
  { name: "Cloud", color: "#F4E5D1" },
];

type Confirmed = {
  submissionId: string;
  product: string;
  material: string;
  palette: string;
  embroidery: string;
  price: string;
};

const MAX_PHOTOS = 4;

export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const [material, setMaterial] = useState(MATERIAL_OPTIONS[0]);
  const [petName, setPetName] = useState("");
  const [selected, setSelected] = useState(0);
  const [palette, setPalette] = useState(0);
  const [embroidery, setEmbroidery] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [confirmed, setConfirmed] = useState<Confirmed | null>(null);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    setUploadError(null);
    setUploading(true);
    try {
      const slotsLeft = MAX_PHOTOS - photos.length;
      const toProcess = Array.from(fileList).slice(0, slotsLeft);
      const compressed = await Promise.all(
        toProcess.map((f) => fileToCompressedDataUrl(f)),
      );
      setPhotos((prev) => [...prev, ...compressed]);
      if (fileList.length > slotsLeft) {
        setUploadError(`Only ${MAX_PHOTOS} photos max — extras were skipped.`);
      }
    } catch (err) {
      setUploadError(
        err instanceof Error ? err.message : "Couldn't read that file",
      );
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function handleConfirm() {
    const { submission } = createSubmissionAndOrder({
      material,
      product: products[selected].title,
      palette: palettes[palette].name,
      embroidery: embroidery || "None",
      price: products[selected].price,
      photos,
    });
    setConfirmed({
      submissionId: submission.id,
      product: products[selected].title,
      material,
      palette: palettes[palette].name,
      embroidery,
      price: products[selected].price,
    });
  }

  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16 text-center space-y-4">
          <SectionTag>Customize</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide">
            Customize for {petName || "Your Pet"}
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
                onClick={() => !confirmed && setStep(i + 1)}
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
                    done || active
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
          {confirmed ? (
            <SuccessBlock c={confirmed} />
          ) : (
            <>
              {step === 1 && (
                <Card className="p-8 space-y-5">
                  <h2 className="font-display text-3xl tracking-wide text-ink">
                    Tell us about the clothes you&apos;d like to transform
                  </h2>
                  <label
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.add("border-brand");
                    }}
                    onDragLeave={(e) =>
                      e.currentTarget.classList.remove("border-brand")
                    }
                    onDrop={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove("border-brand");
                      handleFiles(e.dataTransfer.files);
                    }}
                    className="block cursor-pointer rounded-[12px] border-2 border-dashed border-border bg-cream p-10 text-center space-y-3 hover:border-brand transition-colors"
                  >
                    <Upload className="size-10 mx-auto text-brand" />
                    <div className="font-semibold text-ink">
                      {uploading
                        ? "Processing…"
                        : "Drop photos here or click to browse"}
                    </div>
                    <p className="text-sm text-ink-muted">
                      JPG or PNG, up to {MAX_PHOTOS} photos. Best results with
                      natural lighting.
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                    />
                  </label>
                  {uploadError && (
                    <div className="text-sm text-brand">{uploadError}</div>
                  )}
                  {photos.length > 0 && (
                    <div className="grid grid-cols-4 gap-3">
                      {photos.map((src, i) => (
                        <div
                          key={i}
                          className="relative aspect-square rounded-[8px] overflow-hidden border border-border group"
                        >
                          <Image
                            src={src}
                            alt={`Upload ${i + 1}`}
                            fill
                            unoptimized
                            className="object-cover"
                            sizes="160px"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setPhotos((p) =>
                                p.filter((_, idx) => idx !== i),
                              )
                            }
                            className="absolute top-1 right-1 size-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                            aria-label="Remove photo"
                          >
                            <X className="size-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="text-xs text-ink-muted uppercase tracking-wide">
                      Material
                    </div>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full rounded-[8px] border border-border px-4 py-3 bg-cream focus:outline-none focus:border-brand"
                    >
                      {MATERIAL_OPTIONS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
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
                    <Field
                      label="Pet name"
                      value={petName}
                      onChange={setPetName}
                    />
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
                      AI Recommendations for {petName || "Your Pet"}
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
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-card">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(min-width: 768px) 28vw, 90vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="font-semibold text-ink">
                            {p.title}
                          </div>
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
                  <div className="space-y-1">
                    <div className="text-xs text-ink-muted uppercase tracking-wide">
                      Embroidery text
                    </div>
                    <input
                      value={embroidery}
                      onChange={(e) => setEmbroidery(e.target.value)}
                      placeholder={petName || "Biscuit"}
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
                <Card className="p-8 space-y-6">
                  <h2 className="font-display text-3xl tracking-wide text-ink">
                    Preview & Checkout
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {photos[0] ? (
                      <div className="relative aspect-square w-full rounded-[12px] overflow-hidden border border-border">
                        <Image
                          src={photos[0]}
                          alt="Your material"
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="400px"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-square w-full overflow-hidden rounded-[12px] border border-border bg-card">
                        <Image
                          src={products[selected].image}
                          alt={products[selected].title}
                          fill
                          sizes="400px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-3 text-sm">
                      <Line k="Product" v={products[selected].title} />
                      <Line k="Palette" v={palettes[palette].name} />
                      <Line k="Embroidery" v={embroidery || "None"} />
                      <Line k="Material" v={`Your donated ${material}`} />
                      <div className="pt-4 border-t border-border" />
                      <Line k="Craft fee" v={products[selected].price} />
                      <Line k="Shipping" v="Free (carbon neutral)" />
                      <div className="flex items-center justify-between pt-3">
                        <span className="font-semibold text-ink">Total</span>
                        <span className="font-display text-2xl text-brand">
                          {totalFor(products[selected].price)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-wrap gap-3">
                    <Button variant="ghost" onClick={() => setStep(4)}>
                      Back
                    </Button>
                    <Button size="lg" onClick={handleConfirm}>
                      Confirm & Start Production
                    </Button>
                  </div>
                </Card>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function SuccessBlock({ c }: { c: Confirmed }) {
  return (
    <Card className="p-10 text-center space-y-5 bg-success-soft border-success/40">
      <div className="size-14 rounded-full bg-success text-white mx-auto flex items-center justify-center">
        <CheckCircle2 className="size-7" />
      </div>
      <h3 className="font-display text-3xl tracking-wide text-ink">
        Submission {c.submissionId} confirmed!
      </h3>
      <p className="text-ink-muted max-w-md mx-auto">
        We&apos;ve logged your {c.product} made from{" "}
        <span className="font-medium text-ink">{c.material}</span>. You&apos;ll
        get updates at every production stage — expected delivery 4–6 weeks.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Button href="/tracking">Track your order</Button>
        <Button href="/account" variant="secondary">
          Back to account
        </Button>
        <Link href="/customize" className="text-sm text-ink-muted hover:text-brand self-center">
          Start another
        </Link>
      </div>
    </Card>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-ink-muted uppercase tracking-wide">
        {label}
      </div>
      <input
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
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

function totalFor(price: string) {
  if (price.includes("$0")) return "$0.00";
  const match = price.match(/\$(\d+)/);
  return match ? `$${match[1]}.00` : price;
}
