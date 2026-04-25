import { Button, Card, CheckerBox, SectionTag } from "@/components/ui";
import { Plus, Bell } from "lucide-react";

const submissions = [
  {
    id: "#0234",
    item: "Baby Blanket - 2 items",
    date: "Mar 15, 2026",
    status: "Under AI Review",
    tone: "bg-amber-100 text-amber-800",
  },
  {
    id: "#0198",
    item: "Cotton T-Shirt - 1 item",
    date: "Mar 8, 2026",
    status: "In Production",
    tone: "bg-sky-100 text-sky-800",
  },
  {
    id: "#0156",
    item: "Denim Jacket",
    date: "Feb 20, 2026",
    status: "Delivered",
    tone: "bg-success-soft text-success",
  },
  {
    id: "#0102",
    item: "Kids Sweater",
    date: "Jan 30, 2026",
    status: "Delivered",
    tone: "bg-success-soft text-success",
  },
];

const orders = [
  {
    name: "Memory Keepsake Bandana",
    sub: "from Baby Blanket — $0.00 included",
    cta: "Approve Design",
    variant: "primary" as const,
  },
  {
    name: "Cotton Pet Bed",
    sub: "From Denim Jacket — Ready to Ship",
    cta: "Ship It",
    variant: "primary" as const,
  },
  {
    name: "Heritage Dog Collar",
    sub: "From Wool Scarf — Delivered",
    cta: "Reorder",
    variant: "outline" as const,
  },
];

const saved = [
  { name: "Memory Keepsake", from: "$24", accent: "bg-[#E9C9A4]" },
  { name: "Pet Pattern Kit", from: "From $35", accent: "bg-[#F4E0A8]" },
  { name: "Denim Dog Bed", from: "From $89", accent: "bg-[#9DB8DF]" },
  { name: "Wool Cat Cave", from: "$54", accent: "bg-[#D8B89B]" },
];

const notif = [
  { t: "Submission Updates", d: "Get notified as your item is reviewed.", on: true },
  { t: "Order Shipped", d: "Receive shipping and delivery updates.", on: true },
  { t: "New Products Available", d: "Alerts when new upcycled items are listed.", on: false },
  { t: "Marketing & Promotions", d: "Deals, discounts, and seasonal campaigns.", on: false },
];

export default function AccountPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide">
              Sarah Chen
            </h1>
            <p className="text-white/80">
              Member since Jan 2026 · Level 2 Recycler
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="md">
              Edit Profile
            </Button>
            <button
              type="button"
              aria-label="Notifications"
              title="Notifications"
              className="inline-flex items-center justify-center size-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Bell className="size-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "7", l: "Submissions" },
            { v: "3", l: "Products Owned" },
            { v: "0.8 kg", l: "Textile Saved" },
            { v: "2.09 kg", l: "CO₂ Offset" },
          ].map((s) => (
            <Card key={s.l} className="p-5 text-center space-y-1">
              <div className="font-display text-3xl tracking-wide text-brand">
                {s.v}
              </div>
              <div className="text-sm text-ink-muted">{s.l}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-12 space-y-4">
          <div className="flex items-end justify-between flex-wrap gap-2">
            <h2 className="font-display text-3xl tracking-wide text-ink">
              My Submissions
            </h2>
            <Button href="/recycle" size="sm" variant="outline">
              <Plus className="size-4" /> New Submission
            </Button>
          </div>
          <Card className="overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#FCF5EB] text-ink-muted">
                <tr>
                  <th className="text-left px-5 py-3 font-medium">Submission ID</th>
                  <th className="text-left px-5 py-3 font-medium">Item</th>
                  <th className="text-left px-5 py-3 font-medium">Submitted</th>
                  <th className="text-left px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-t border-border">
                    <td className="px-5 py-4 font-semibold text-brand">{s.id}</td>
                    <td className="px-5 py-4">{s.item}</td>
                    <td className="px-5 py-4 text-ink-muted">{s.date}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${s.tone}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <a href="/tracking" className="text-brand hover:underline font-medium">
                        View details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-12 space-y-4">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            My Orders
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {orders.map((o) => (
              <Card key={o.name} className="overflow-hidden">
                <CheckerBox className="aspect-[4/3] w-full rounded-none" />
                <div className="p-5 space-y-2">
                  <div className="font-semibold text-ink">{o.name}</div>
                  <div className="text-xs text-ink-muted">{o.sub}</div>
                  <Button size="sm" variant={o.variant} className="w-full justify-center mt-2">
                    {o.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-12 space-y-4">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            Saved Items
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {saved.map((s) => (
              <Card key={s.name} className="overflow-hidden">
                <div className={`aspect-square ${s.accent}`}>
                  <div className="checker-pattern w-full h-full opacity-30" />
                </div>
                <div className="p-3 space-y-0.5">
                  <div className="text-sm font-semibold text-ink">{s.name}</div>
                  <div className="text-xs text-ink-muted">{s.from}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-12 space-y-4">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            My Personal Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="p-6">
              <div className="text-sm text-ink-muted">CO₂ Saved</div>
              <div className="font-display text-4xl tracking-wide text-brand">
                333 g
              </div>
              <p className="text-sm text-ink-muted mt-2">
                Equivalent to 1 short car ride avoided.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-ink-muted">Items Recycled</div>
              <div className="font-display text-4xl tracking-wide text-brand">
                4 items
              </div>
              <p className="text-sm text-ink-muted mt-2">
                That&apos;s 4 closet transformations.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-ink-muted">Rank</div>
              <div className="font-display text-4xl tracking-wide text-brand">
                Level 2
              </div>
              <p className="text-sm text-ink-muted mt-2">
                +12 points to Level 3 Champion
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-20 space-y-4">
          <h2 className="font-display text-3xl tracking-wide text-ink">
            Account Settings
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-ink">Profile Information</h3>
                <button className="text-xs text-brand hover:underline">
                  Edit
                </button>
              </div>
              <div className="space-y-3 text-sm">
                <Field label="Full Name" value="Sarah Chen" />
                <Field label="Email Address" value="sarah@email.com" />
                <Field label="Phone Number" value="+1 (555) 234-5678" />
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm">Save Changes</Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </div>
            </Card>
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-ink flex items-center gap-2">
                <Bell className="size-4 text-brand" /> Notifications
              </h3>
              <div className="space-y-4">
                {notif.map((n) => (
                  <div key={n.t} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-ink">{n.t}</div>
                      <div className="text-xs text-ink-muted">{n.d}</div>
                    </div>
                    <div className="toggle-track" data-on={String(n.on)}>
                      <span className="toggle-knob" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-ink">Security</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Password</div>
                  <div className="text-xs text-ink-muted">
                    Last changed 2 months ago
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Change
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">
                    Two-Factor Authentication
                  </div>
                  <div className="text-xs text-ink-muted">
                    Add an extra layer of security
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Enable
                </Button>
              </div>
            </Card>
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold text-ink">Saved Addresses</h3>
              <div className="rounded-[12px] border border-border p-4 text-sm">
                <div className="flex items-center justify-between">
                  <div className="font-medium">
                    123 Main Street, Brooklyn, NY 11201
                  </div>
                  <span className="text-xs text-success bg-success-soft px-2 py-0.5 rounded-full">
                    Default
                  </span>
                </div>
                <div className="text-ink-muted text-xs mt-1">
                  Default shipping address
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="size-4" /> Add Address
              </Button>
            </Card>
          </div>
          <Card className="p-6 border-brand/50 bg-brand-soft/40">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-semibold text-brand">Danger Zone</h3>
                <p className="text-sm text-ink-muted">
                  Permanently remove your account and all data.
                </p>
              </div>
              <Button size="sm" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-ink-muted uppercase tracking-wide">
        {label}
      </div>
      <div className="rounded-[8px] border border-border px-3 py-2 bg-cream">
        {value}
      </div>
    </div>
  );
}
