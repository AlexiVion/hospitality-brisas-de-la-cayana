type PhotoFrameProps = {
  label: string;
  tone?: "mountain" | "forest" | "creek" | "earth" | "mist" | "sunset" | "wood";
  className?: string;
};

export function PhotoFrame({
  label,
  tone = "mountain",
  className = "",
}: PhotoFrameProps) {
  return (
    <div
      className={`photo-frame photo-frame--${tone} ${className}`.trim()}
      role="img"
      aria-label={`Marcador temporal de fotografía: ${label}`}
    >
      <span className="photo-frame__eyebrow">Fotografía original pendiente</span>
      <span className="photo-frame__label">{label}</span>
    </div>
  );
}
