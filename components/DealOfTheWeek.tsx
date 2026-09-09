"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { Button } from "@/components/Button";

interface DealOfTheWeekProps {
  product: Product;
}

export function DealOfTheWeek({ product }: DealOfTheWeekProps) {
  const [storage, setStorage] = useState(product.storageOptions[0]);
  const [color, setColor] = useState(product.colorOptions[0]);

  return (
    <div className="relative overflow-hidden rounded-lg bg-promo">
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-promo-shape sm:h-72 sm:w-72"
        aria-hidden
      />
      <div className="relative grid grid-cols-1 items-center gap-8 p-6 sm:p-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-text-secondary">Deal of the Week</p>
          <h3 className="mt-1 text-3xl font-bold text-accent">{product.name}</h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.storageOptions.map((option) => (
              <button
                key={option}
                onClick={() => setStorage(option)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  storage === option
                    ? "bg-accent text-text-on-accent"
                    : "bg-surface text-text-primary hover:bg-surface-muted"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {product.colorOptions.map((option) => (
              <button
                key={option}
                onClick={() => setColor(option)}
                aria-label={option}
                aria-pressed={color === option}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  color === option
                    ? "bg-text-primary text-surface"
                    : "bg-surface text-text-secondary hover:bg-surface-muted"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-sm text-text-secondary">From</span>
            <span className="text-3xl font-bold text-accent">${product.price}</span>
          </div>

          <Button href={`/products/${product.id}`} className="mt-5">
            Shop This Deal
          </Button>
        </div>

        <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64">
          <Image src={product.images[0]} alt={product.name} fill sizes="256px" className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}
