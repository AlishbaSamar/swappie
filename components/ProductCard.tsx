import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link href={`/products/${product.id}`} className="block group">
      <Card className="overflow-hidden transition-shadow group-hover:shadow-md">
        <div className="relative aspect-square bg-surface-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          {product.stockStatus !== "In Stock" && (
            <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-text-secondary">
              {product.stockStatus}
            </span>
          )}
        </div>
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium text-text-primary">{product.name}</h3>
            <Badge condition={product.conditionGrade} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-text-primary">
              ${product.price}
            </span>
            <span className="text-sm text-text-secondary line-through">
              ${product.originalPrice}
            </span>
            <span className="text-sm font-medium text-accent">
              -{discountPercent}%
            </span>
          </div>
          <p className="text-xs text-text-secondary">
            {product.warrantyMonths}-month warranty
          </p>
        </div>
      </Card>
    </Link>
  );
}
