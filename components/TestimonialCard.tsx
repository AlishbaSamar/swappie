import { Testimonial } from "@/types/testimonial";
import { Card } from "@/components/Card";
import { StarIcon, CheckBadgeIcon } from "@/components/icons";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex w-64 shrink-0 flex-col gap-3 p-5 sm:w-72">
      <div className="flex items-center gap-1 text-warning">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" filled={i < testimonial.rating} />
        ))}
      </div>
      <p className="text-sm text-text-primary">{testimonial.quote}</p>
      <div className="mt-auto flex items-center gap-2 text-xs text-text-secondary">
        {testimonial.verified && <CheckBadgeIcon className="h-4 w-4 text-accent" />}
        <span className="font-medium text-text-primary">{testimonial.name}</span>
        <span>· {testimonial.timeAgo}</span>
      </div>
    </Card>
  );
}
