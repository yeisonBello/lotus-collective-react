# 📸 Global Gallery Management (Lotus Collective)

I have expanded the automation system. You can now manage **every gallery section** of the website just by dropping files into categorized folders.

## 🚀 How to update the galleries

1.  **Open the project folder** on your computer.
2.  Go to the `uploads/` folder. You will see several subfolders:
    -   `uploads/hero`: For the main top carousel.
    -   `uploads/studio`: For the studio recording photos.
    -   `uploads/energy`: For live performance photos.
    -   `uploads/branding`: For gear and details.
    -   `uploads/archive`: For venue and archive photos.
    -   `uploads/moments`: For the Visual Moments section on the home page.
3.  **Drop your photos** into the corresponding folder.
4.  The system will automatically convert them to `.webp`, optimize them, and move them to the final website assets.

---

## 🛠️ Activating the Optimizer

Keep the "watcher" on while you manage images:

1.  Open a terminal in the project folder.
2.  Run:
    ```bash
    npm run optimize-gallery
    ```
3.  Any photo you drop in the `uploads/` subfolders will be processed instantly.

---

## 🖥️ Central Admin Dashboard

Register and preview all changes in one place:

-   **Path:** `/moments-admin`
-   **New Features:**
    *   **Category Tabs:** Switch between Hero, Studio, Energy, etc.
    *   **Live Count:** See how many photos are in each section.
    *   **Preview:** High-quality grayscale previews that reveal color on hover.
    *   **Instructions:** Integrated guide for each specific category.

---

## 💡 Important Notes

-   **Automatic Deletion:** The system always deletes the original file from `uploads/` after a successful optimization.
-   **Optimized Sizes:** All images are limited to 1920px width to ensure lightning-fast performance and better SEO rankings.
-   **Deploying:** After you are happy with the changes locally, perform your usual `npm run build` and deploy to see them on the live site.

---

*Created with ❤️ by Antigravity for Lotus Collective*
