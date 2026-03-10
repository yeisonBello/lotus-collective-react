import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.resolve(__dirname, '../src/assets/gallery');

async function optimizeImages() {
    try {
        console.log('--- Starting Image Optimization ---');

        // Ensure the directory exists
        await fs.access(GALLERY_DIR);

        async function processDirectory(dir) {
            const files = await fs.readdir(dir, { withFileTypes: true });

            for (const file of files) {
                const fullPath = path.join(dir, file.name);

                if (file.isDirectory()) {
                    await processDirectory(fullPath);
                } else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
                    const stats = await fs.stat(fullPath);
                    const sizeInMB = stats.size / (1024 * 1024);

                    // Only optimize if > 500KB or if user wants everything converted
                    if (sizeInMB > 0.5 || true) {
                        const outputName = file.name.replace(/\.[^.]+$/, '') + '.webp';
                        const outputPath = path.join(dir, outputName);

                        console.log(`Optimizing: ${file.name} (${sizeInMB.toFixed(2)} MB)`);

                        await sharp(fullPath)
                            .webp({ quality: 80 })
                            .toFile(outputPath);

                        console.log(`Saved as: ${outputName}`);

                        // Delete original file
                        await fs.unlink(fullPath);
                        console.log(`Deleted original: ${file.name}`);
                    }
                }
            }
        }

        await processDirectory(GALLERY_DIR);
        console.log('--- Optimization Complete ---');

    } catch (error) {
        console.error('Error during optimization:', error);
    }
}

optimizeImages();
