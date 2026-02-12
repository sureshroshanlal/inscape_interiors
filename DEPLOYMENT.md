# Deployment Guide

## Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally
- All assets in place (run `./download-assets.sh`)

## Deployment Options

### Option 1: Vercel (Recommended - Zero Config)

**Why Vercel?**
- Auto-detects Astro projects
- Automatic HTTPS + CDN
- Zero configuration needed
- Free tier available
- Deploys in ~60 seconds

**Steps:**

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Exact Inscape Interiors"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects settings:
     - Framework: Astro
     - Build command: `npm run build`
     - Output directory: `dist`
   - Click "Deploy"

3. **Done!** Site is live in ~60 seconds

**Custom Domain:**
- Go to project settings in Vercel
- Add custom domain
- Update DNS records as instructed

---

### Option 2: Netlify

**Steps:**

1. Push to GitHub (same as above)

2. Deploy to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub repository
   - Settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

**Custom Domain:**
- Settings → Domain management → Add custom domain

---

### Option 3: Cloudflare Pages

**Steps:**

1. Push to GitHub

2. Deploy to Cloudflare:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Create application
   - Connect to GitHub
   - Settings:
     - Build command: `npm run build`
     - Build output: `dist`
   - Deploy

---

### Option 4: Manual Deployment

For any static hosting (AWS S3, DigitalOcean, etc.):

1. **Build locally:**
```bash
npm run build
```

2. **Upload `/dist` folder** to your hosting provider

3. **Configure server:**
   - Serve index.html for root
   - Enable HTTPS (Let's Encrypt recommended)
   - Set up CDN (optional but recommended)

---

## Environment Variables (if needed)

If you add API integrations or secrets:

### For Vercel/Netlify/Cloudflare:
1. Go to project settings
2. Add environment variables
3. Prefix public vars with `PUBLIC_`
4. Redeploy

### Example .env file:
```bash
# Don't commit this file
PUBLIC_CONTACT_EMAIL=studio@example.com
FORM_ENDPOINT=https://formspree.io/f/YOUR_ID
```

### Access in code:
```javascript
const email = import.meta.env.PUBLIC_CONTACT_EMAIL;
```

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile responsiveness
- [ ] Contact form (if integrated)
- [ ] Collaborations carousel animates
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Run Lighthouse audit (target 95+ score)

---

## Performance Optimization

### Already Included:
- ✅ Static site generation
- ✅ Image lazy loading
- ✅ CSS/JS minification
- ✅ WebP auto-conversion

### Additional (handled by hosting):
- ✅ Global CDN (Vercel/Netlify/Cloudflare)
- ✅ Automatic HTTPS
- ✅ Brotli compression
- ✅ HTTP/2

---

## Custom Domain Setup

### DNS Configuration

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www  
Value: YOUR-SITE.netlify.app
```

**For Cloudflare Pages:**
- Use Cloudflare's nameservers
- DNS configured automatically

---

## SSL/HTTPS

All recommended platforms include **free automatic HTTPS**:
- Vercel ✅
- Netlify ✅  
- Cloudflare Pages ✅

No configuration needed - enabled by default.

---

## Continuous Deployment

Once connected to Git:

1. **Make changes locally**
2. **Test:** `npm run dev`
3. **Commit and push:**
```bash
git add .
git commit -m "Update content"
git push
```
4. **Auto-deploys** in 30-60 seconds

---

## Form Integration

Current contact form is client-side only. To integrate:

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 2: Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: Custom API
Update fetch call in `/src/pages/contact.astro`

---

## Monitoring & Analytics

### Vercel Analytics
- Built-in, enable in project settings
- Shows page views, performance metrics

### Google Analytics
Add to `Layout.astro`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Plausible (Privacy-focused)
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Troubleshooting

### Build Fails
**Check:**
- Node version: `node -v` (should be 18+)
- Clean install: `rm -rf node_modules && npm install`
- Build logs for specific errors

### Images Not Loading
**Fix:**
- Run `./download-assets.sh` 
- Verify file paths match exactly
- Check case-sensitivity

### 404 Errors
**Fix:**
- Ensure all links start with `/`
- Check `astro.config.mjs` for correct base path
- Verify page files exist in `/src/pages/`

---

## Backup Strategy

**Before major changes:**

1. **Tag current version:**
```bash
git tag -a v1.0 -m "Initial production version"
git push origin v1.0
```

2. **Create branch:**
```bash
git checkout -b backup-2024-02-10
git push origin backup-2024-02-10
```

---

## Support Resources

- **Astro Docs**: https://docs.astro.build
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Cloudflare Docs**: https://developers.cloudflare.com/pages

---

## Ready to Deploy!

Recommended path:
1. ✅ Run `./download-assets.sh`
2. ✅ Add client logos
3. ✅ Update contact info
4. ✅ Test locally: `npm run dev`
5. ✅ Build: `npm run build`
6. ✅ Preview: `npm run preview`
7. ✅ Push to GitHub
8. ✅ Deploy to Vercel

Total time: ~10 minutes from start to live site.
