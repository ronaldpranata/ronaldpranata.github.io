# Simple Deployment Guide for ronaldpranata.github.io

## 🎯 Goal
Deploy your portfolio to: **https://ronaldpranata.github.io**

---

## 📋 Prerequisites

Check if you already have a repository named `ronaldpranata.github.io`:
- Go to: https://github.com/ronaldpranata?tab=repositories
- Look for a repo named exactly `ronaldpranata.github.io`

---

## 🚀 Deployment (Choose Your Scenario)

### Scenario A: You DON'T have ronaldpranata.github.io repo yet

1. **Create the repository on GitHub:**
   - Go to: https://github.com/new
   - Repository name: `ronaldpranata.github.io` (exactly this)
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

2. **Run these commands:**
   ```bash
   cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website
   
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git remote add origin https://github.com/ronaldpranata/ronaldpranata.github.io.git
   git branch -M main
   git push -u origin main
   npm run deploy
   ```

3. **Done!** Visit https://ronaldpranata.github.io (wait 1-2 minutes)

---

### Scenario B: You ALREADY have ronaldpranata.github.io repo

**Option 1 - Replace everything (recommended for portfolio):**

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Backup your existing repo first if needed!
# Then:

git init
git add .
git commit -m "New React portfolio"
git remote add origin https://github.com/ronaldpranata/ronaldpranata.github.io.git
git branch -M main
git push -f origin main
npm run deploy
```

**Option 2 - Deploy to gh-pages branch (keeps existing main branch):**

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

npm run deploy
```

Then:
1. Go to: https://github.com/ronaldpranata/ronaldpranata.github.io/settings/pages
2. Under "Source", select `gh-pages` branch
3. Click Save
4. Visit https://ronaldpranata.github.io

---

## ⚡ Quick Deploy (After Initial Setup)

Anytime you make changes:

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website
npm run deploy
```

That's it! Your changes will be live in 1-2 minutes.

---

## 🔍 Verify Deployment

After deploying, check:
1. https://ronaldpranata.github.io - Your live site
2. https://github.com/ronaldpranata/ronaldpranata.github.io - Your repository

---

## ❓ Troubleshooting

**404 Error?**
- Wait 2-3 minutes after first deploy
- Check GitHub Pages settings: Settings → Pages
- Ensure source is set to `gh-pages` branch or `main` branch

**Blank page?**
- Check browser console for errors
- Verify `homepage` in package.json is: `"https://ronaldpranata.github.io"`
- Try rebuilding: `npm run build && npm run deploy`

**Photo not showing?**
- Ensure `photo.jpeg` is in the `public` folder
- Check the file name matches exactly (case-sensitive)

---

## 📞 Need Help?

All files are ready in the `build` folder. You can also:
- Upload `build` folder to Netlify: https://app.netlify.com/drop
- Use Vercel: `npx vercel --prod`
- Any other static hosting service
