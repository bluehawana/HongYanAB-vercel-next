#!/bin/bash

# VPS Deployment Script for Next.js
# Run this script on your VPS after uploading the project

set -e

echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build the Next.js application
echo "🔨 Building Next.js app..."
npm run build

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "📥 Installing PM2..."
    npm install -g pm2
fi

# Stop existing process if running
pm2 stop nextjs-app || true
pm2 delete nextjs-app || true

# Start the application with PM2
echo "▶️  Starting application with PM2..."
pm2 start npm --name "nextjs-app" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup || true

echo "✅ Deployment complete!"
echo "Your app is running on port 3000"
