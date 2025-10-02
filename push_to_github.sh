#!/bin/bash

# GitHub Push Script for Initializer Game
# =========================================
# 
# INSTRUCTIONS:
# 1. First create a repository called "initializer" on GitHub
# 2. Replace YOUR_GITHUB_USERNAME with your actual GitHub username
# 3. Run this script: bash push_to_github.sh
#
# If you want to use a different repository name, change it below:

GITHUB_USERNAME="jenith-tdport"
REPO_NAME="initializer"

echo "Setting up GitHub repository..."

# Remove any existing remote
git remote remove origin 2>/dev/null || true

# Add the new remote
echo "Adding remote: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

# Set the branch name to main
git branch -M main

# Push all commits and tags
echo "Pushing to GitHub..."
git push -u origin main

echo "✅ Successfully pushed to https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo ""
echo "Your repository is now available at:"
echo "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo ""
echo "To clone it elsewhere:"
echo "git clone https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"