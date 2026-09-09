"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Tag } from "@/components/Tag";
import { ArrowRightIcon } from "@/components/icons";

export interface ProductCarouselItem {
  product: Product;
  isNew?: boolean;
}

interface ProductCarouselProps {
  items: ProductCarouselItem[];
}

export function ProductCarousel({ items }: ProductCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByPage(-1)}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md hover:bg-surface-muted"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180 text-text-primary" />
        </button>
      )}

      <div
        ref={scrollerRef}
        className="scrollbar-hide -mx-4 flex scroll-smooth gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        {items.map(({ product, isNew }) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className={`relative flex w-40 shrink-0 flex-col items-center gap-3 rounded-lg border border-border p-4 text-center transition-shadow hover:shadow-md sm:w-48 ${
              isNew ? "bg-tag-new-bg" : "bg-surface"
            }`}
          >
            <div className="relative h-28 w-28">
              <Image src={product.images[0]} alt={product.name} fill sizes="112px" className="rounded-md object-cover" />
            </div>
            <span className="text-sm font-semibold text-text-primary">{product.model}</span>
            {isNew && <Tag>New!</Tag>}
          </Link>
        ))}
      </div>

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByPage(1)}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md hover:bg-surface-muted"
        >
          <ArrowRightIcon className="h-4 w-4 text-text-primary" />
        </button>
      )}
    </div>
  );
}
