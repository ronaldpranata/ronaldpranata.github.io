# Quick Deployment Guide

## ✅ Build Complete!

Your portfolio has been successfully built. The production files are in the `build` folder.

## 🚀 Deploy to GitHub Pages (Recommended)

### Step 1: Update Your GitHub Username
Edit `package.json` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio-website",
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio-website`
3. Click "Create repository"

### Step 3: Push Code to GitHub
```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

git init
git add .
git commit -m "Initial commit - Portfolio website"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select `gh-pages` branch as source
4. Save

Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/portfolio-website`

---

## 📁 Manual Deployment Options

### Option 1: Upload build folder to any hosting
The `build` folder contains all static files. You can:
- Upload to Netlify (drag & drop)
- Upload to Vercel
- Upload to any web hosting via FTP
- Serve from AWS S3, Google Cloud Storage, etc.

### Option 2: Use the build folder directly
```bash
# Serve locally to test
npx serve -s build
```

Then open http://localhost:3000 to preview

---

## 📝 What's in the build folder?

- `index.html` - Main HTML file
- `static/css/` - Optimized CSS files
- `static/js/` - Optimized JavaScript bundles
- `photo.jpeg` - Your profile photo
- Other assets (favicon, manifest, etc.)

All files are:
✓ Minified
✓ Optimized
✓ Production-ready
✓ Gzipped for fast loading

---

## 🔄 Update Your Portfolio

After making changes:

```bash
# Make your changes to the code
# Then rebuild and redeploy:

npm run build    # Rebuild
npm run deploy   # Deploy to GitHub Pages
```

Or if using manual hosting, just upload the new `build` folder.

---

## 📚 Full Documentation

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
