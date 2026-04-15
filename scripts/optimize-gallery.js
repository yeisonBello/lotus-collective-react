import sharp from 'sharp';
import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root folders
const UPLOADS_ROOT = path.join(__dirname, '../uploads');
const ASSETS_ROOT = path.join(__dirname, '../src/assets/gallery');

// Category mapping: subfolder in uploads -> subfolder in src/assets/gallery
const CATEGORY_MAP = {
  'hero': 'hero-carousel',
  'studio': 'studio',
  'energy': 'live-energy',
  'branding': 'branding',
  'archive': 'archive',
  'moments': 'visual-moments'
};

// Ensure folders exist
Object.keys(CATEGORY_MAP).forEach(folder => {
  const p = path.join(UPLOADS_ROOT, folder);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

console.log('--- 🚀 Lotus Gallery Optimizer Active ---');
console.log(`Watching root: ${UPLOADS_ROOT}`);

const watcher = chokidar.watch(UPLOADS_ROOT, {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  ignoreInitial: true,
});

const processImage = async (filePath) => {
  const parsed = path.parse(filePath);
  const ext = parsed.ext.toLowerCase();
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];

  if (!validExtensions.includes(ext)) return;

  // Get the subfolder name
  const subfolder = path.relative(UPLOADS_ROOT, parsed.dir).split(path.sep)[0];
  const targetSubfolder = CATEGORY_MAP[subfolder];

  if (!targetSubfolder) {
    console.log(`⚠️  Ignored: ${parsed.base} (Not in a valid category folder)`);
    return;
  }

  const outputDir = path.join(ASSETS_ROOT, targetSubfolder);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const outputFileName = `${parsed.name}-${Date.now()}.webp`;
  const outputPath = path.join(outputDir, outputFileName);

  try {
    console.log(`⏱️  Building [${subfolder.toUpperCase()}]: ${parsed.base}...`);

    await sharp(filePath)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ Success! Moved to gallery/${targetSubfolder}`);

    // Delete original
    fs.unlinkSync(filePath);
    console.log(`🗑️  Original deleted.`);

  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
};

watcher.on('add', (filePath) => {
  setTimeout(() => processImage(filePath), 500);
});

console.log('Ready. Drop your images in the subfolders! (Press Ctrl+C to stop)');
