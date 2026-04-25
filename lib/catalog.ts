export type ShopProduct = {
  slug: string;
  name: string;
  price: string;
  tag: string;
  tagTone: "soft" | "limited" | "new";
  category: string;
  material: string;
  petType: "Dog" | "Cat" | "Rabbit";
  image: string;
  story: string;
  sizes: string[];
  disabledSizes?: string[];
  savedGrams: number;
};

export const shopProducts: ShopProduct[] = [
  {
    slug: "cotton-baby-bandana",
    name: "Cotton Baby Bandana",
    price: "$24.00",
    tag: "Upcycled Cotton",
    tagTone: "soft",
    category: "Apparel",
    material: "Cotton",
    petType: "Dog",
    image: "/shop/generated-1776204549455.png",
    story:
      "Made from a donated cotton baby blanket. Carefully cleaned, sanitized, and handcrafted into a soft everyday bandana.",
    sizes: ["XS", "S", "M", "L"],
    disabledSizes: ["L"],
    savedGrams: 120,
  },
  {
    slug: "fleece-dog-jacket",
    name: "Fleece Dog Jacket",
    price: "$38.00",
    tag: "Limited - 3 left",
    tagTone: "limited",
    category: "Apparel",
    material: "Fleece",
    petType: "Dog",
    image: "/shop/generated-1776209764944.png",
    story:
      "Warm fleece panels are quilted into a lightweight jacket for cool morning walks.",
    sizes: ["S", "M", "L", "XL"],
    savedGrams: 240,
  },
  {
    slug: "denim-pet-toy-set",
    name: "Denim Pet Toy Set",
    price: "$19.00",
    tag: "New Arrival",
    tagTone: "new",
    category: "Toys",
    material: "Denim",
    petType: "Dog",
    image: "/shop/generated-1776209730635.png",
    story:
      "Durable denim scraps are layered into tug toys with reinforced seams and soft edges.",
    sizes: ["One Size"],
    savedGrams: 90,
  },
  {
    slug: "soft-cotton-pet-bed",
    name: "Soft Cotton Pet Bed",
    price: "$65.00",
    tag: "Baby Clothes Collection",
    tagTone: "soft",
    category: "Bedding",
    material: "Cotton",
    petType: "Cat",
    image: "/shop/generated-1776209817856.png",
    story:
      "Baby cotton layers become a cushioned resting spot with a washable quilted cover.",
    sizes: ["S", "M", "L"],
    savedGrams: 460,
  },
  {
    slug: "knitwear-cat-cushion",
    name: "Knitwear Cat Cushion",
    price: "$45.00",
    tag: "Upcycled Fleece",
    tagTone: "soft",
    category: "Bedding",
    material: "Knitwear",
    petType: "Cat",
    image: "/shop/generated-1776209566692.png",
    story:
      "Soft knitwear and fleece are felted into a cozy cushion for cats who take naps seriously.",
    sizes: ["S", "M"],
    savedGrams: 300,
  },
  {
    slug: "patchwork-dog-collar",
    name: "Patchwork Dog Collar",
    price: "$32.00",
    tag: "Upcycled Denim",
    tagTone: "soft",
    category: "Apparel",
    material: "Denim",
    petType: "Dog",
    image: "/shop/generated-1776209580536.png",
    story:
      "Denim fragments are stabilized, lined, and stitched into a sturdy collar with a patchwork finish.",
    sizes: ["XS", "S", "M", "L"],
    savedGrams: 110,
  },
  {
    slug: "blanket-rabbit-bed",
    name: "Blanket Rabbit Bed",
    price: "$52.00",
    tag: "Limited - 2 left",
    tagTone: "limited",
    category: "Bedding",
    material: "Fleece",
    petType: "Rabbit",
    image: "/shop/generated-1776209809706.png",
    story:
      "Blanket offcuts are shaped into a low-profile bed with a soft rim for small pets.",
    sizes: ["S", "M"],
    savedGrams: 380,
  },
  {
    slug: "cotton-bandana-3-pack",
    name: "Cotton Bandana 3-Pack",
    price: "$29.00",
    tag: "Best Seller",
    tagTone: "soft",
    category: "Apparel",
    material: "Cotton",
    petType: "Dog",
    image: "/shop/generated-1776209623276.png",
    story:
      "A coordinated trio of cotton bandanas made from rescued fabric batches.",
    sizes: ["XS", "S", "M"],
    savedGrams: 180,
  },
];

export const detailImages = [
  "/shop/generated-1776204633290.png",
  "/shop/generated-1776209638523.png",
  "/shop/generated-1776209722301.png",
  "/shop/generated-1776209739010.png",
];

export function getProductBySlug(slug: string): ShopProduct {
  return shopProducts.find((product) => product.slug === slug) ?? shopProducts[0];
}
