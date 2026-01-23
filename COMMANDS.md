# Commands to Deploy Your Portfolio

## Step 1: Update package.json
Open `package.json` and change line 5 from:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio-website",
```
to (replace with your actual GitHub username):
```json
"homepage": "https://ronaldpranata.github.io/portfolio-website",
```

## Step 2: Run These Commands

```bash
# Navigate to portfolio directory
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

## Step 3: Enable GitHub Pages
1. Go to https://github.com/YOUR_USERNAME/portfolio-website/settings/pages
2. Under "Source", select `gh-pages` branch
3. Click Save

## Done! 🎉
Your portfolio will be live at: https://YOUR_USERNAME.github.io/portfolio-website

---

## Alternative: Quick Deploy with Script

After updating package.json:

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website
./deploy.sh
```

---

## Test Locally First

To preview your portfolio locally:

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website
npm start
```

Then open http://localhost:3000 in your browser
