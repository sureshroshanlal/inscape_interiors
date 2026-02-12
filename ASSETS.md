# Asset Checklist

## ✅ Automated Download (via download-assets.sh)

Run `./download-assets.sh` to automatically download all these from the original site:

### Homepage
- [x] `/public/images/logo.svg` - Main logo
- [x] `/public/images/hero-banner.jpg` - Hero background
- [x] `/public/images/panel-1.jpg` - Interior panel 1 (777x1024)
- [x] `/public/images/panel-2.jpg` - Interior panel 2 (777x1024)
- [x] `/public/images/interiors-side.jpg` - Side portrait image (835x1024)
- [x] `/public/images/interiors-wide.jpg` - Full-width landscape image

### Projects Page
- [x] `/public/images/projects/kensal-rise.jpg`
- [x] `/public/images/projects/golbourne-road.jpg`
- [x] `/public/images/projects/cassandra-goad.jpg`
- [x] `/public/images/projects/holland-park.jpg`
- [x] `/public/images/projects/elgin-crescent.jpg`
- [x] `/public/images/projects/notting-hill.jpg`
- [x] `/public/images/projects/camden.jpg`

### About Page
- [x] `/public/images/about/about-hero.jpg` - Main intro image (796x1024)
- [x] `/public/images/about/style-1.jpg` - Style section image 1
- [x] `/public/images/about/style-2.jpg` - Style section image 2
- [x] `/public/images/about/style-3.jpg` - Philosophy image (762x1024)
- [x] `/public/images/about/craft-1.jpg` - Craftsmanship image 1
- [x] `/public/images/about/craft-2.jpg` - Craftsmanship image 2
- [x] `/public/images/about/craft-3.jpg` - Craftsmanship image 3

### Contact Page
- [x] `/public/images/studio-logo.png` - Studio badge/logo

## 🎨 Manual Addition Required

### Client Logos (Collaborations Section)
You need to add YOUR client logos manually:

- [ ] `/public/images/clients/client-1.png`
- [ ] `/public/images/clients/client-2.png`
- [ ] `/public/images/clients/client-3.png`
- [ ] `/public/images/clients/client-4.png`
- [ ] `/public/images/clients/client-5.png`
- [ ] `/public/images/clients/client-6.png`
- [ ] `/public/images/clients/client-7.png`
- [ ] `/public/images/clients/client-8.png`
- [ ] ... (add up to 20 logos)

**Logo Requirements:**
- Format: PNG with transparent background (preferred)
- Size: 200-400px wide, proportional height
- Quality: High-resolution for retina displays
- Style: Consistent across all logos (color vs grayscale)

## 📋 Quick Commands

### Download All Original Assets
```bash
chmod +x download-assets.sh
./download-assets.sh
```

### Check What's Missing
```bash
# List all image placeholders
find public/images -type f -name "*.jpg" -o -name "*.png" -o -name "*.svg"
```

### Verify All Assets Exist
After running download script, you should have:
- 1 logo (SVG)
- 6 homepage images
- 7 project images
- 7 about page images
- 1 studio logo
- **Total: 22 images from original site**

Plus your own client logos (8-20 images).

## 🔄 Asset Replacement

### To Use Original Site Assets
1. Run `./download-assets.sh`
2. Add your client logos
3. Done!

### To Use Your Own Assets
1. Delete/skip the download script
2. Add your own images matching the paths above
3. Ensure aspect ratios match for best results:
   - Hero: Landscape (16:9 or wider)
   - Panels: Portrait (3:4 ratio)
   - Wide images: Landscape (wide format)
   - Logos: Landscape or square

## ⚠️ Important Notes

- All image paths are case-sensitive
- `.jpg`, `.png`, `.webp` are all supported
- Astro auto-optimizes images during build
- Original images will be converted to WebP automatically
- Keep original quality high - optimization happens at build time

## 📐 Recommended Dimensions

Based on original site:

- **Hero**: 1920x1080px minimum
- **Portrait panels**: 777x1024px (3:4 ratio)
- **Side image**: 835x1024px
- **Wide image**: 1600x900px minimum
- **Project images**: 768x1024px (3:4 ratio)
- **About images**: Various, but maintain aspect ratios
- **Client logos**: 300x100px average (flexible)

## ✨ Optimization Tips

- Compress images before upload (TinyPNG, ImageOptim)
- Target <500KB per image for fast loading
- Use .jpg for photos, .png for logos/graphics
- Astro handles WebP conversion automatically
