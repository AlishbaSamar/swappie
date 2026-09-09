export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 1-5
  timeAgo: string;
  quote: string;
  verified: boolean;
}
