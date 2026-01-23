#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if homepage is updated
if grep -q "YOUR_GITHUB_USERNAME" package.json; then
    echo "⚠️  WARNING: You need to update package.json first!"
    echo ""
    echo "Please edit package.json and replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username"
    echo ""
    echo "Example:"
    echo '  "homepage": "https://ronaldpranata.github.io/portfolio-website",'
    echo ""
    exit 1
fi

echo "✅ Checking configuration..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo ""
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "⚠️  No remote repository configured!"
    echo ""
    echo "Please add your GitHub repository:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git"
    echo ""
    exit 1
fi

echo "🔨 Building production files..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📤 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Deployment successful!"
        echo ""
        echo "Your portfolio will be available at:"
        grep "homepage" package.json | sed 's/.*"homepage": "\(.*\)".*/\1/'
        echo ""
        echo "Note: It may take a few minutes for GitHub Pages to update."
    else
        echo ""
        echo "❌ Deployment failed. Please check the error messages above."
    fi
else
    echo ""
    echo "❌ Build failed. Please fix the errors and try again."
fi
