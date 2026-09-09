import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Tag } from "@/components/Tag";

interface ProductCarouselProps {
  products: Product[];
  newestId?: string;
}

export function ProductCarousel({ products, newestId }: ProductCarouselProps) {
  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="relative flex w-40 shrink-0 flex-col items-center gap-3 rounded-lg border border-border bg-surface p-4 text-center transition-shadow hover:shadow-md sm:w-48"
        >
          <div className="relative h-28 w-28">
            <Image src={product.images[0]} alt={product.name} fill sizes="112px" className="rounded-md object-cover" />
          </div>
          <span className="text-sm font-semibold text-text-primary">{product.name}</span>
          {product.id === newestId && (
            <span className="absolute -top-2 right-2">
              <Tag>New!</Tag>
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
