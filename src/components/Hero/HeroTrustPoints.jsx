import { Check } from "lucide-react";

export default function HeroTrustPoints() {
  const trustPoints = [
    "No credit card required",
    "Organize everything in one place",
    "Built for developers",
  ];

  return (
    <div className="mt-6 flex flex-col gap-3 text-sm text-(--text-secondary) sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
      {trustPoints.map((point) => (
        <div key={point} className="flex items-center gap-2">
          <Check
            size={16}
            strokeWidth={2.5}
            className="text-(--primary)"
          />

          <span>{point}</span>
        </div>
      ))}
    </div>
  );
}