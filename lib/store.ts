"use client";

import { useSyncExternalStore } from "react";

export type SubmissionStage =
  | "submitted"
  | "received"
  | "ai"
  | "production"
  | "shipped";

export const STAGE_ORDER: SubmissionStage[] = [
  "submitted",
  "received",
  "ai",
  "production",
  "shipped",
];

export const STAGE_LABEL: Record<SubmissionStage, string> = {
  submitted: "Submitted",
  received: "Received",
  ai: "AI Review",
  production: "Production",
  shipped: "Shipped",
};

export type Submission = {
  id: string;
  item: string;
  material: string;
  submittedAt: number;
  stage: SubmissionStage;
  photos?: string[];
};

export type Order = {
  id: string;
  submissionId: string;
  product: string;
  material: string;
  palette: string;
  embroidery: string;
  price: string;
  createdAt: number;
  status: "in_production" | "ready_to_ship" | "shipped" | "delivered";
};

type StoreState = {
  submissions: Submission[];
  orders: Order[];
};

const STORAGE_KEY = "pawcycle:store:v1";
const SEED: StoreState = {
  submissions: [
    {
      id: "#0234",
      item: "Baby Blanket - 2 items",
      material: "Baby Blanket",
      submittedAt: new Date("2026-03-15").getTime(),
      stage: "ai",
    },
    {
      id: "#0198",
      item: "Cotton T-Shirt - 1 item",
      material: "Cotton T-Shirt",
      submittedAt: new Date("2026-03-08").getTime(),
      stage: "production",
    },
    {
      id: "#0156",
      item: "Denim Jacket",
      material: "Denim Jacket",
      submittedAt: new Date("2026-02-20").getTime(),
      stage: "shipped",
    },
    {
      id: "#0102",
      item: "Kids Sweater",
      material: "Kids Sweater",
      submittedAt: new Date("2026-01-30").getTime(),
      stage: "shipped",
    },
  ],
  orders: [
    {
      id: "ord_0001",
      submissionId: "#0234",
      product: "Memory Keepsake Bandana",
      material: "Baby Blanket",
      palette: "Warm Blush",
      embroidery: "Rose",
      price: "$0 · included",
      createdAt: new Date("2026-03-15").getTime(),
      status: "in_production",
    },
  ],
};

let cached: StoreState | null = null;
const subscribers = new Set<() => void>();

function read(): StoreState {
  if (cached) return cached;
  if (typeof window === "undefined") return SEED;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cached = raw ? (JSON.parse(raw) as StoreState) : SEED;
  } catch {
    cached = SEED;
  }
  return cached;
}

function write(next: StoreState) {
  cached = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  subscribers.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}

export function useStore(): StoreState {
  return useSyncExternalStore(subscribe, read, () => SEED);
}

function nextSubmissionId(subs: Submission[]): string {
  const max = subs.reduce((acc, s) => {
    const n = parseInt(s.id.replace("#", ""), 10);
    return Number.isFinite(n) && n > acc ? n : acc;
  }, 0);
  return `#${String(max + 1).padStart(4, "0")}`;
}

export function createSubmissionAndOrder(input: {
  material: string;
  product: string;
  palette: string;
  embroidery: string;
  price: string;
  photos?: string[];
}): { submission: Submission; order: Order } {
  const state = read();
  const submissionId = nextSubmissionId(state.submissions);
  const submission: Submission = {
    id: submissionId,
    item: `${input.material} - 1 item`,
    material: input.material,
    submittedAt: Date.now(),
    stage: "submitted",
    photos: input.photos,
  };
  const order: Order = {
    id: `ord_${Date.now().toString(36)}`,
    submissionId,
    product: input.product,
    material: input.material,
    palette: input.palette,
    embroidery: input.embroidery,
    price: input.price,
    createdAt: Date.now(),
    status: "in_production",
  };
  write({
    submissions: [submission, ...state.submissions],
    orders: [order, ...state.orders],
  });
  return { submission, order };
}

export function resetStore() {
  write(SEED);
}

export function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function isActive(stage: SubmissionStage): boolean {
  return stage !== "shipped";
}

export function stageIndex(stage: SubmissionStage): number {
  return STAGE_ORDER.indexOf(stage);
}
