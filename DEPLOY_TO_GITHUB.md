# Deploy to https://ronaldpranata.github.io

## ✅ Configuration Updated!

Your portfolio is now configured to deploy to: **https://ronaldpranata.github.io**

## 🚀 Deployment Steps

### Option 1: If you DON'T have a ronaldpranata.github.io repository yet

```bash
# Navigate to portfolio directory
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add remote (repository MUST be named ronaldpranata.github.io)
git remote add origin https://github.com/ronaldpranata/ronaldpranata.github.io.git

# Push to main branch
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### Option 2: If you ALREADY have a ronaldpranata.github.io repository

You have two choices:

**A. Replace existing content:**
```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Clone your existing repo
git clone https://github.com/ronaldpranata/ronaldpranata.github.io.git temp-repo

# Copy the .git folder
cp -r temp-repo/.git .

# Remove temp folder
rm -rf temp-repo

# Add all files
git add .

# Commit
git commit -m "Update portfolio with React version"

# Push
git push origin main

# Deploy
npm run deploy
```

**B. Keep existing content and deploy to gh-pages branch:**
```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Add remote
git init
git remote add origin https://github.com/ronaldpranata/ronaldpranata.github.io.git

# Just deploy (this creates gh-pages branch)
npm run deploy
```

Then in GitHub repository settings:
- Go to Settings → Pages
- Change source from `main` to `gh-pages` branch
- Save

## 📝 Important Notes

1. **Repository Name**: Must be exactly `ronaldpranata.github.io`
2. **GitHub Pages Source**: 
   - If deploying to main branch: Select `main` branch, `/ (root)` folder
   - If using gh-pages: Select `gh-pages` branch
3. **URL**: Your site will be at https://ronaldpranata.github.io (no subdirectory)

## 🎉 After Deployment

Your portfolio will be live at: **https://ronaldpranata.github.io**

It may take 1-2 minutes for GitHub Pages to build and publish your site.

## 🔄 Future Updates

To update your portfolio:

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Make your changes, then:
git add .
git commit -m "Update portfolio"
git push origin main

# Redeploy
npm run deploy
```

## ✅ Quick Deploy

Simply run:
```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website
npm run deploy
```

This will build and deploy automatically!
