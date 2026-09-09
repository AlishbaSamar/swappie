import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";

interface CategoryTileProps {
  label: string;
  href: string;
  image: string;
  isNew?: boolean;
  highlight?: boolean;
}

export function CategoryTile({ label, href, image, isNew, highlight }: CategoryTileProps) {
  return (
    <Link href={href} className="block h-full">
      <Card
        className={`relative flex h-full flex-col items-center justify-center gap-3 overflow-visible p-4 text-center transition-shadow hover:shadow-md ${
          highlight ? "bg-tag-new-bg" : ""
        }`}
      >
        <div className="relative h-16 w-16">
          <Image src={image} alt={label} fill sizes="64px" className="rounded-md object-cover" />
        </div>
        <span className="text-lg font-semibold text-text-primary">{label}</span>
        {isNew && (
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2">
            <Tag>New!</Tag>
          </span>
        )}
      </Card>
    </Link>
  );
}
