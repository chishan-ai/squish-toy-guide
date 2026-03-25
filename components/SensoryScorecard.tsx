import type { SensoryScores } from "@/lib/types";

interface SensoryScorecardProps {
  scores: SensoryScores;
}

const dimensions: { key: keyof SensoryScores; label: string; description: string }[] = [
  { key: "squishiness", label: "Squishiness", description: "How soft and satisfying the squeeze" },
  { key: "noise", label: "Noise", description: "Sound level when squeezed" },
  { key: "durability", label: "Durability", description: "How well it holds up over time" },
  { key: "stainRisk", label: "Stain Risk", description: "Likelihood of leaving marks" },
  { key: "size", label: "Size", description: "Overall dimensions" },
];

function getBarColor(score: number): string {
  if (score >= 4) return "bg-emerald-500";
  if (score >= 3) return "bg-amber-400";
  return "bg-red-400";
}

export default function SensoryScorecard({ scores }: SensoryScorecardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="mb-1 text-lg font-bold text-gray-900">Sensory Scorecard</h2>
      <p className="mb-4 text-sm text-gray-500">Rated 1–5 based on hands-on testing</p>

      <div className="space-y-3">
        {dimensions.map(({ key, label, description }) => {
          const score = scores[key];
          return (
            <div key={key}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700" title={description}>
                  {label}
                </span>
                <span className="text-sm font-semibold text-gray-900">{score}/5</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full transition-all ${getBarColor(score)}`}
                  style={{ width: `${(score / 5) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
