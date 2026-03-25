import type { SensoryScores } from "@/lib/types";

interface SensoryScorecardProps {
  scores: SensoryScores;
}

const dimensions: { key: keyof SensoryScores; label: string; color: string }[] = [
  { key: "squishiness", label: "Squishiness", color: "bg-primary" },
  { key: "noise", label: "Noise", color: "bg-accent" },
  { key: "durability", label: "Durability", color: "bg-teal" },
  { key: "stainRisk", label: "Stain Risk", color: "bg-primary" },
  { key: "size", label: "Size", color: "bg-accent" },
];

export default function SensoryScorecard({ scores }: SensoryScorecardProps) {
  return (
    <div className="rounded-[--radius-md] border border-border bg-surface p-6 shadow-card">
      <h2 className="mb-1 font-display text-xl font-bold text-text">
        Sensory Scorecard
      </h2>
      <p className="mb-5 text-sm text-text-muted">Rated 1–5 based on hands-on testing</p>

      <div className="grid grid-cols-5 gap-4">
        {dimensions.map(({ key, label, color }) => {
          const score = scores[key];
          return (
            <div key={key} className="text-center">
              <span className="font-data text-[32px] font-bold leading-none text-primary">
                {score}
              </span>
              <div className="mx-auto mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full transition-all ${color}`}
                  style={{ width: `${(score / 5) * 100}%` }}
                />
              </div>
              <span className="mt-2 block text-xs font-semibold text-text-secondary">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
