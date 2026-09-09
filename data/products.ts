import { Product } from "@/types/product";

/**
 * Mock product data. Shaped to mirror what a real API response would look
 * like, so swapping this module for a fetch() call later is a small change:
 * replace the array below with the awaited response, keep the getters as-is.
 */
export const products: Product[] = [
  {
    id: "iphone-13-128",
    name: "iPhone 13",
    model: "iPhone 13",
    conditionGrade: "Excellent",
    price: 449,
    originalPrice: 699,
    images: ["https://picsum.photos/seed/iphone13-1/800/800", "https://picsum.photos/seed/iphone13-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 12,
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Midnight", "Starlight", "Blue"],
  },
  {
    id: "iphone-13-pro-256",
    name: "iPhone 13 Pro",
    model: "iPhone 13 Pro",
    conditionGrade: "Good",
    price: 599,
    originalPrice: 899,
    images: ["https://picsum.photos/seed/iphone13pro-1/800/800", "https://picsum.photos/seed/iphone13pro-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 12,
    storageOptions: ["256GB", "512GB"],
    colorOptions: ["Graphite", "Silver", "Sierra Blue"],
  },
  {
    id: "iphone-12-64",
    name: "iPhone 12",
    model: "iPhone 12",
    conditionGrade: "Fair",
    price: 329,
    originalPrice: 599,
    images: ["https://picsum.photos/seed/iphone12-1/800/800", "https://picsum.photos/seed/iphone12-2/800/800"],
    stockStatus: "Low Stock",
    warrantyMonths: 6,
    storageOptions: ["64GB", "128GB"],
    colorOptions: ["Black", "White", "Red"],
  },
  {
    id: "iphone-14-128",
    name: "iPhone 14",
    model: "iPhone 14",
    conditionGrade: "Excellent",
    price: 549,
    originalPrice: 799,
    images: ["https://picsum.photos/seed/iphone14-1/800/800", "https://picsum.photos/seed/iphone14-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 12,
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Midnight", "Blue", "Purple"],
  },
  {
    id: "iphone-14-pro-max-256",
    name: "iPhone 14 Pro Max",
    model: "iPhone 14 Pro Max",
    conditionGrade: "Good",
    price: 799,
    originalPrice: 1099,
    images: ["https://picsum.photos/seed/iphone14pm-1/800/800", "https://picsum.photos/seed/iphone14pm-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 12,
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: ["Space Black", "Silver", "Deep Purple"],
  },
  {
    id: "iphone-11-64",
    name: "iPhone 11",
    model: "iPhone 11",
    conditionGrade: "Fair",
    price: 229,
    originalPrice: 499,
    images: ["https://picsum.photos/seed/iphone11-1/800/800", "https://picsum.photos/seed/iphone11-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 6,
    storageOptions: ["64GB", "128GB"],
    colorOptions: ["Black", "Green", "Purple"],
  },
  {
    id: "iphone-se-3-64",
    name: "iPhone SE (3rd gen)",
    model: "iPhone SE 2022",
    conditionGrade: "Excellent",
    price: 279,
    originalPrice: 429,
    images: ["https://picsum.photos/seed/iphonese3-1/800/800", "https://picsum.photos/seed/iphonese3-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 12,
    storageOptions: ["64GB", "128GB"],
    colorOptions: ["Midnight", "Starlight", "Red"],
  },
  {
    id: "iphone-15-128",
    name: "iPhone 15",
    model: "iPhone 15",
    conditionGrade: "Excellent",
    price: 649,
    originalPrice: 799,
    images: ["https://picsum.photos/seed/iphone15-1/800/800", "https://picsum.photos/seed/iphone15-2/800/800"],
    stockStatus: "Low Stock",
    warrantyMonths: 12,
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Black", "Blue", "Pink"],
  },
  {
    id: "iphone-12-pro-128",
    name: "iPhone 12 Pro",
    model: "iPhone 12 Pro",
    conditionGrade: "Good",
    price: 429,
    originalPrice: 699,
    images: ["https://picsum.photos/seed/iphone12pro-1/800/800", "https://picsum.photos/seed/iphone12pro-2/800/800"],
    stockStatus: "In Stock",
    warrantyMonths: 12,
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Graphite", "Gold", "Pacific Blue"],
  },
  {
    id: "iphone-xr-64",
    name: "iPhone XR",
    model: "iPhone XR",
    conditionGrade: "Fair",
    price: 179,
    originalPrice: 399,
    images: ["https://picsum.photos/seed/iphonexr-1/800/800", "https://picsum.photos/seed/iphonexr-2/800/800"],
    stockStatus: "Out of Stock",
    warrantyMonths: 6,
    storageOptions: ["64GB"],
    colorOptions: ["Black", "White", "Coral"],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.slice(0, limit);
}
