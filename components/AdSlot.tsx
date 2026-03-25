interface AdSlotProps {
  format?: "rectangle" | "leaderboard";
  className?: string;
}

const dimensions = {
  rectangle: { width: 300, height: 250 },
  leaderboard: { width: 728, height: 90 },
};

export default function AdSlot({
  format = "rectangle",
  className = "",
}: AdSlotProps) {
  const { height } = dimensions[format];

  return (
    <div
      className={`mx-auto flex items-center justify-center bg-gray-50 ${className}`}
      style={{ minHeight: height }}
      data-ad-format={format}
      aria-label="Advertisement"
    >
      <span className="text-xs text-gray-400">Advertisement</span>
    </div>
  );
}
