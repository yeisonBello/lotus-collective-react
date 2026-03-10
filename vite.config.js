import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

// Custom plugin for automatic WebP optimization
const imageOptimizer = () => ({
  name: 'image-optimizer',
  configureServer(server) {
    const galleryPath = path.resolve(__dirname, 'src/assets/gallery')

    server.watcher.add(galleryPath)
    server.watcher.on('add', async (filePath) => {
      // Process only if it's a standard image and not already a webp
      if (/\.(jpg|jpeg|png)$/i.test(filePath) && !filePath.includes('.webp')) {
        const outputWebp = filePath.replace(/\.[^.]+$/, '') + '.webp'

        // Skip if already exists
        if (fs.existsSync(outputWebp)) return

        // Wait a bit to ensure the file is fully written (helpful on Windows)
        await new Promise(resolve => setTimeout(resolve, 500))

        console.log(`[Auto-Optimize] Converting: ${path.basename(filePath)}`)
        try {
          // Convert using sharp
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputWebp)

          console.log(`[Auto-Optimize] Created: ${path.basename(outputWebp)}`)

          // SMALL DELAY before deletion to release any OS locks
          await new Promise(resolve => setTimeout(resolve, 200))

          // Check if file still exists before deleting
          if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath)
            console.log(`[Auto-Optimize] Deleted original: ${path.basename(filePath)}`)
          }
        } catch (err) {
          console.error(`[Auto-Optimize] Error optimizing ${filePath}:`, err)
        }
      }
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageOptimizer()],
})
