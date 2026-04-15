#!/bin/bash
# One-click deploy: local → GitHub → server
# Usage: bash deploy.sh "optional commit message"

set -e

SERVER="root@89.116.32.145"
REMOTE_DIR="/var/www/glinthawktechnology"
GIT_SSH_KEY="~/.ssh/id_ed25519_elliot"
GIT_REMOTE="git@github.com:elliot09alderson/glinthawk-landing.git"

MSG="${1:-deploy: update site}"

echo "=== Glinthawk Deploy ==="
echo ""

# 1. Stage & commit
echo "[1/4] Committing changes..."
git add -A
git commit -m "$MSG" 2>/dev/null || echo "  Nothing new to commit, pushing existing."

# 2. Push to GitHub
echo "[2/4] Pushing to GitHub..."
GIT_SSH_COMMAND="ssh -i $GIT_SSH_KEY -o StrictHostKeyChecking=no" git push $GIT_REMOTE main

# 3. Pull, build, restart on server
echo "[3/4] Building on server..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_DIR && git pull origin main && npm install --production=false && npm run build"

echo "[4/4] Restarting app..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_DIR && pm2 restart glinthawk"

echo ""
echo "=== Deployed to https://glinthawktechnologies.com ==="
