import { BlogPost } from "@/types/blogPost";

/**
 * Mock blog teaser data. Original placeholder copy — swap for a real CMS/API
 * response later.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "why-buy-refurbished",
    title: "Why a Refurbished iPhone Is Smarter Than Buying New",
    excerpt:
      "Same performance, a fraction of the price, and a lot less e-waste. Here's the case for going refurbished.",
    image: "https://picsum.photos/seed/blog-refurb/600/400",
  },
  {
    id: "b2",
    slug: "condition-grades-explained",
    title: "Excellent, Good, or Fair? Our Condition Grades Explained",
    excerpt:
      "A quick guide to what each grade actually means, so you know exactly what's arriving at your door.",
    image: "https://picsum.photos/seed/blog-grades/600/400",
  },
  {
    id: "b3",
    slug: "battery-health-guide",
    title: "How to Check Battery Health Before You Buy",
    excerpt:
      "Battery health is the single biggest factor in day-to-day satisfaction. Here's what to look for.",
    image: "https://picsum.photos/seed/blog-battery/600/400",
  },
];

export function getRecentBlogPosts(limit = 3): BlogPost[] {
  return blogPosts.slice(0, limit);
}
