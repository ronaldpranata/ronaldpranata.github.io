# Deploying Portfolio to GitHub Pages

## Step-by-Step Guide

### 1. Update package.json with your GitHub username

Open `package.json` and replace `YOUR_GITHUB_USERNAME` in the homepage field with your actual GitHub username:

```json
"homepage": "https://your-actual-username.github.io/portfolio-website",
```

For example, if your GitHub username is `ronaldpranata`:
```json
"homepage": "https://ronaldpranata.github.io/portfolio-website",
```

### 2. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio-website` (or any name you prefer)
3. Don't initialize with README, .gitignore, or license (we'll push existing code)

### 3. Initialize Git and Push to GitHub

From the portfolio-website directory, run:

```bash
cd /Users/ronaldpranata/Projects/interview-jest/portfolio-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add remote repository (replace YOUR_GITHUB_USERNAME with your username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Build and Deploy to GitHub Pages

Once your code is on GitHub, deploy it:

```bash
npm run deploy
```

This command will:
- Build your React app (creates optimized production files)
- Create a `gh-pages` branch
- Push the build folder to that branch
- Make it available on GitHub Pages

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/portfolio-website`

## Alternative: Deploy to root domain (username.github.io)

If you want your portfolio at `https://YOUR_GITHUB_USERNAME.github.io` (without /portfolio-website):

1. Create a repository named exactly: `YOUR_GITHUB_USERNAME.github.io`
2. Update package.json:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io",
   ```
3. Follow the same deployment steps above

## Manual Build (Without Deployment)

If you just want to build the static files without deploying:

```bash
npm run build
```

This creates a `build` folder with all static files (HTML, CSS, JS) that you can:
- Upload to any web hosting service
- Deploy to Netlify, Vercel, or other platforms
- Serve from any static file server

The build folder will contain:
- `index.html` - Main HTML file
- `static/` - CSS, JS, and media files
- All optimized and minified for production

## Updating Your Portfolio

After making changes:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy updated version
npm run deploy
```

## Troubleshooting

### Issue: Blank page after deployment
- Check that the `homepage` field in package.json matches your GitHub Pages URL
- Make sure you're using `process.env.PUBLIC_URL` for any public assets

### Issue: 404 errors for routes
- GitHub Pages doesn't support client-side routing by default
- This portfolio uses section-based navigation (no routing), so it should work fine

### Issue: Images not loading
- Ensure images are in the `public` folder
- Use `process.env.PUBLIC_URL` prefix: `${process.env.PUBLIC_URL}/photo.jpeg`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update package.json:
   ```json
   "homepage": "https://yourdomain.com",
   ```

3. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record pointing to `YOUR_GITHUB_USERNAME.github.io`

4. Deploy: `npm run deploy`

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)
