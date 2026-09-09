import { Testimonial } from "@/types/testimonial";

/**
 * Mock testimonial data — all names and quotes below are fictional
 * placeholders for layout purposes, not real customer reviews.
 * Swap this module for a real reviews API response later.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "J. Rivera",
    rating: 5,
    timeAgo: "6 hours ago",
    quote: "Phone arrived earlier than expected and looked practically new.",
    verified: true,
  },
  {
    id: "t2",
    name: "A. Novak",
    rating: 5,
    timeAgo: "1 day ago",
    quote: "Easy checkout and the condition grading was spot on.",
    verified: true,
  },
  {
    id: "t3",
    name: "M. Chen",
    rating: 4,
    timeAgo: "2 days ago",
    quote: "Great value for a Good-condition phone, battery health as described.",
    verified: true,
  },
  {
    id: "t4",
    name: "S. Okafor",
    rating: 5,
    timeAgo: "3 days ago",
    quote: "Warranty gave me peace of mind buying refurbished for the first time.",
    verified: true,
  },
];

export const reviewStats = {
  averageRating: 4.6,
  totalReviews: 1842,
  happyCustomerPercent: 96,
  communitySize: "10,000+",
};

export function getFeaturedTestimonials(limit = 4): Testimonial[] {
  return testimonials.slice(0, limit);
}
