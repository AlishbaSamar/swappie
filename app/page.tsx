import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { CategoryTile } from "@/components/CategoryTile";
import { ProductCard } from "@/components/ProductCard";
import { ProductCarousel } from "@/components/ProductCarousel";
import { DealOfTheWeek } from "@/components/DealOfTheWeek";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BlogPostCard } from "@/components/BlogPostCard";
import { ArrowRightIcon } from "@/components/icons";
import { getAllProducts, getFeaturedProducts, getProductById } from "@/data/products";
import { getFeaturedTestimonials, reviewStats } from "@/data/testimonials";
import { getRecentBlogPosts } from "@/data/blogPosts";
import { ConditionGrade } from "@/types/product";

const conditionTiles: { condition: ConditionGrade; description: string }[] = [
  { condition: "Excellent", description: "Looks brand new, no visible wear" },
  { condition: "Good", description: "Light signs of use, fully functional" },
  { condition: "Fair", description: "Visible wear, great value price" },
];

const generationCategories = [
  { label: "iPhone 15 Series", productId: "iphone-15-128", isNew: true },
  { label: "iPhone 14 Series", productId: "iphone-14-pro-max-256" },
  { label: "iPhone 13 Series", productId: "iphone-13-pro-256" },
  { label: "iPhone 12 & Older", productId: "iphone-12-pro-128" },
];

export default function HomePage() {
  const allProducts = getAllProducts();
  const featuredProducts = getFeaturedProducts(8);
  const dealProduct = getProductById("iphone-15-128")!;
  const testimonials = getFeaturedTestimonials(4);
  const recentPosts = getRecentBlogPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-accent sm:text-4xl">
            Expertly refurbished iPhones
          </h1>
          <p className="mt-2 text-base text-text-primary/80">
            Peace of mind with a {featuredProducts[0].warrantyMonths}-month warranty and easy returns
          </p>
        </div>
      </section>

      {/* Shop by generation — Swappie-style category grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-accent sm:text-3xl">
          The simple way to buy your next iPhone
        </h2>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4">
          {generationCategories.map((category) => {
            const product = getProductById(category.productId)!;
            return (
              <CategoryTile
                key={category.label}
                label={category.label}
                href={`/products?series=${encodeURIComponent(category.label)}`}
                image={product.images[0]}
                isNew={category.isNew}
              />
            );
          })}
        </div>
      </section>

      {/* Explore latest — horizontal carousel */}
      <section className="mx-auto max-w-7xl py-14">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-accent sm:text-3xl">
            Explore our latest refurbished iPhones
          </h2>
        </div>
        <div className="mt-8">
          <ProductCarousel products={allProducts} newestId="iphone-15-128" />
        </div>
      </section>

      {/* Deal of the week */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <DealOfTheWeek product={dealProduct} />
      </section>

      {/* Shop by condition */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-accent sm:text-3xl">Shop by Condition</h2>
          <p className="mt-1 text-text-secondary">
            Every grade is inspected and tested — pick what fits your budget.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {conditionTiles.map((tile) => (
              <Link key={tile.condition} href={`/products?condition=${tile.condition}`}>
                <Card className="flex h-full flex-col gap-3 p-6 transition-shadow hover:shadow-md">
                  <Badge condition={tile.condition} />
                  <p className="text-sm text-text-secondary">{tile.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust stats + testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
          Thanks for helping our community grow to {reviewStats.communitySize}!
        </h2>
        <p className="mt-2 text-text-secondary">
          {reviewStats.happyCustomerPercent}% of our customers say they&apos;re happy with our service.
        </p>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          <div className="mx-auto flex gap-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-text-secondary">
          Rated {reviewStats.averageRating} / 5 based on {reviewStats.totalReviews.toLocaleString()} customer reviews.
        </p>
      </section>

      {/* Technician banner */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="mx-auto flex max-w-2xl flex-col items-center gap-6 overflow-hidden text-center">
          <div className="relative h-48 w-full">
            <Image
              src="https://picsum.photos/seed/technician-banner/900/400"
              alt="Technician inspecting a device"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>
          <div className="px-6 pb-8">
            <p className="text-lg font-medium text-text-primary">
              Checked by professional technicians — our iPhones work like new and come in every model, color, and
              size.
            </p>
            <Link
              href="/warranty"
              className="mt-4 inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover"
            >
              Discover <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </section>

      {/* Blog posts */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl">Recent Guides</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-accent sm:text-3xl">Featured iPhones</h2>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-accent hover:text-accent-hover sm:inline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
