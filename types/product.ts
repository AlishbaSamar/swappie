export type ConditionGrade = "Excellent" | "Good" | "Fair";

export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export type ProductCategory = "iPhone" | "MacBook" | "AirPods" | "iPad";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  model: string;
  conditionGrade: ConditionGrade;
  price: number;
  originalPrice: number;
  images: string[];
  stockStatus: StockStatus;
  warrantyMonths: number;
  storageOptions: string[];
  colorOptions: string[];
}
