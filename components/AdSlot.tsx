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
      className={`mx-auto flex items-center justify-center rounded-[--radius-sm] border-2 border-dashed border-border-strong bg-background ${className}`}
      style={{ minHeight: height }}
      data-ad-format={format}
      aria-label="Advertisement"
    >
      <span className="text-xs font-medium text-text-muted">Advertisement</span>
    </div>
  );
}
