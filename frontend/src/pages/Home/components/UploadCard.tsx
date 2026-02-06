import { Upload, Image } from "lucide-react";

interface UploadCardProps {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadCard({ fileInputRef, onFileSelect }: UploadCardProps) {
  return (
    <div className="bg-[#16171f] rounded-xl border border-[#2d2e3a] p-4 sm:p-6 md:p-8">
      <label className="block border-2 border-dashed border-[#2d2e3a] rounded-xl p-8 sm:p-10 md:p-12 text-center cursor-pointer transition-all hover:border-[#3b82f6] hover:bg-[#1e1f2a] group">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onFileSelect}
          className="hidden"
        />
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#1e1f2a] flex items-center justify-center group-hover:bg-[#252630] transition-colors">
          <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-[#3b82f6]" />
        </div>
        <p className="text-lg sm:text-xl font-medium text-[#f3f4f6] mb-2">
          Envie sua imagem
        </p>
        <p className="text-xs sm:text-sm text-[#9ca3af] mb-3 sm:mb-4">
          Toque para selecionar ou arraste um arquivo
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-[#6b7280]">
          <Image className="w-4 h-4" />
          <span>PNG, JPG, GIF, WebP</span>
        </div>
      </label>
    </div>
  );
}
