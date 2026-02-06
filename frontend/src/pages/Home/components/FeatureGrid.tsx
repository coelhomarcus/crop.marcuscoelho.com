interface FeatureItemProps {
  emoji: string;
  title: string;
}

function FeatureItem({ emoji, title }: FeatureItemProps) {
  return (
    <div className="text-center p-2 md:p-4">
      <div className="text-xl md:text-2xl mb-1 md:mb-2">{emoji}</div>
      <p className="text-xs md:text-sm text-[#9ca3af]">{title}</p>
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4 select-none">
      <FeatureItem emoji="✂️" title="Recorte preciso" />
      <FeatureItem emoji="📐" title="Aspect Ratio" />
      <FeatureItem emoji="🎞️" title="Suporte a GIF" />
    </div>
  );
}
