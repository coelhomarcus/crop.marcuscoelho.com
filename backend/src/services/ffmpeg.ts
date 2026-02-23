import { spawn } from "child_process";
import { writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { tmpdir } from "os";

export async function convertWebPToGif(inputBuffer: Buffer): Promise<Buffer> {
  const tempDir = tmpdir();
  const inputPath = join(tempDir, `input-${randomUUID()}.webp`);
  const outputPath = join(tempDir, `output-${randomUUID()}.gif`);

  try {
    await writeFile(inputPath, inputBuffer);

    await runFfmpeg([
      "-i", inputPath,
      "-vf", "split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
      "-loop", "0",
      outputPath,
    ]);

    return await readFile(outputPath);
  } finally {
    await Promise.all([
      unlink(inputPath).catch(() => {}),
      unlink(outputPath).catch(() => {}),
    ]);
  }
}

function runFfmpeg(args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn("ffmpeg", ["-y", ...args]);

    let stderr = "";

    process.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`ffmpeg failed with code ${code}: ${stderr}`));
      }
    });

    process.on("error", (err) => {
      reject(new Error(`Failed to spawn ffmpeg: ${err.message}`));
    });
  });
}

export async function checkFfmpeg(): Promise<boolean> {
  return new Promise((resolve) => {
    const process = spawn("ffmpeg", ["-version"]);
    process.on("close", (code) => resolve(code === 0));
    process.on("error", () => resolve(false));
  });
}
