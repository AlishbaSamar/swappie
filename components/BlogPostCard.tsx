import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blogPost";
import { Card } from "@/components/Card";
import { ArrowRightIcon } from "@/components/icons";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[3/2] bg-surface-muted">
        <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-semibold text-text-primary">{post.title}</h3>
        <p className="text-sm text-text-secondary">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
        >
          Read more <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
