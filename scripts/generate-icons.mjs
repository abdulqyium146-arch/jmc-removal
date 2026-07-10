import sharp from "sharp";
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "app", "icon.svg");
const svgBuffer = readFileSync(svgPath);

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let currentOffset = 6 + count * 16;
  const directories = [];
  const dataBuffers = [];

  for (const png of pngBuffers) {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    const dir = Buffer.alloc(16);
    dir.writeUInt8(width >= 256 ? 0 : width, 0);
    dir.writeUInt8(height >= 256 ? 0 : height, 1);
    dir.writeUInt8(0, 2);
    dir.writeUInt8(0, 3);
    dir.writeUInt16LE(1, 4);
    dir.writeUInt16LE(32, 6);
    dir.writeUInt32LE(png.length, 8);
    dir.writeUInt32LE(currentOffset, 12);
    directories.push(dir);
    dataBuffers.push(png);
    currentOffset += png.length;
  }

  return Buffer.concat([header, ...directories, ...dataBuffers]);
}

async function main() {
  const sizes = [16, 32, 48, 180, 512];
  const pngs = {};
  for (const size of sizes) {
    pngs[size] = await sharp(svgBuffer).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
  }

  // favicon.ico: 16, 32, 48
  writeFileSync(join(root, "app", "favicon.ico"), createIco([pngs[16], pngs[32], pngs[48]]));
  console.log("✓ app/favicon.ico  (16×16, 32×32, 48×48)");

  // apple-icon.png: 180x180 (iOS home screen — SVG not supported by iOS Safari)
  writeFileSync(join(root, "app", "apple-icon.png"), pngs[180]);
  console.log("✓ app/apple-icon.png  (180×180)");

  // Remove SVG apple-icon so Next.js doesn't output a broken <link>
  const svgApple = join(root, "app", "apple-icon.svg");
  if (existsSync(svgApple)) { unlinkSync(svgApple); console.log("✓ removed apple-icon.svg"); }

  // icon.png: 512x512 for PWA / Android Chrome
  writeFileSync(join(root, "app", "icon.png"), pngs[512]);
  console.log("✓ app/icon.png  (512×512)");

  console.log("\nDone. SVG icon.svg kept for modern browsers (SVG > PNG > ICO priority).");
}

main().catch((e) => { console.error(e); process.exit(1); });
