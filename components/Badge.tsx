import { ConditionGrade } from "@/types/product";

interface BadgeProps {
  condition: ConditionGrade;
}

const conditionClasses: Record<ConditionGrade, string> = {
  Excellent: "bg-condition-excellent/10 text-condition-excellent",
  Good: "bg-condition-good/10 text-condition-good",
  Fair: "bg-condition-fair/10 text-condition-fair",
};

export function Badge({ condition }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${conditionClasses[condition]}`}
    >
      {condition}
    </span>
  );
}
