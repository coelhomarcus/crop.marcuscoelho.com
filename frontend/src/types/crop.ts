import type { Crop, PixelCrop } from "react-image-crop";

export interface GifSettings {
  colors: number;
  skipFrames: number;
}

export interface PreviewResult {
  url: string;
  size: number;
  sizeFormatted: string;
}

export type { Crop, PixelCrop };
