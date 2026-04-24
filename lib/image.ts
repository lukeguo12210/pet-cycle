"use client";

const MAX_DIM = 960;
const JPEG_QUALITY = 0.8;

export async function fileToCompressedDataUrl(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Not an image");
  }
  const bitmap = await createImageBitmap(file);
  const ratio = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * ratio);
  const height = Math.round(bitmap.height * ratio);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close?.();
  return canvas.toDataURL("image/jpeg", JPEG_QUALITY);
}
