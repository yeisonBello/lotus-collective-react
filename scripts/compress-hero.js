import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_PATH = path.resolve(__dirname, '../public/assets/covers/dream-walker.webp');
const OUTPUT_PATH = path.resolve(__dirname, '../public/assets/covers/dream-walker-compressed.webp');

async function compressImage() {
    try {
        console.log('--- Starting Image Compression ---');
        
        const stats = await fs.stat(IMAGE_PATH);
        const sizeInMB = stats.size / (1024 * 1024);
        console.log(`Original Size: ${sizeInMB.toFixed(2)} MB`);

        await sharp(IMAGE_PATH)
            .resize({ width: 800, withoutEnlargement: true }) // Hero images for cards don't need to be massive
            .webp({ quality: 60, effort: 6 })
            .toFile(OUTPUT_PATH);

        const newStats = await fs.stat(OUTPUT_PATH);
        const newSizeInMB = newStats.size / (1024 * 1024);
        
        console.log(`Saved as: ${OUTPUT_PATH}`);
        console.log(`New Size: ${newSizeInMB.toFixed(2)} MB`);
        
        // Replace original with compressed version
        await fs.rename(OUTPUT_PATH, IMAGE_PATH);
        console.log(`Successfully replaced original image with compressed version.`);

        console.log('--- Compression Complete ---');
    } catch (error) {
        console.error('Error during compression:', error);
    }
}

compressImage();
