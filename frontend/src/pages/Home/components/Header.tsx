import { Crop } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#16171f] border-b border-[#2d2e3a] px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
        <Crop className="w-5 h-5 md:w-6 md:h-6 text-[#3b82f6]" />
        <h1 className="text-lg md:text-xl font-semibold text-[#f3f4f6]">
          Recortar Imagem
        </h1>
      </div>
    </header>
  );
}
