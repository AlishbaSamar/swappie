import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-tag-new-bg px-3 py-1 text-xs font-semibold text-tag-new-text">
      {children}
    </span>
  );
}
