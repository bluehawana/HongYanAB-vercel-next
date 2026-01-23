# How to Upload Your Server Photos

## Step 1: Prepare Your Photos

Take or select photos of your work with:
- Dell PowerEdge servers (motherboard installation, HPC center work)
- Huawei servers (debugging, maintenance)
- H3C network servers (configuration, deployment)

## Step 2: Resize and Optimize

Recommended sizes:
- Hero background: 1920x1080px (landscape)
- Hardware showcase: 1200x900px (4:3 ratio)
- Service cards: 800x600px

Use tools like:
- macOS Preview (Tools → Adjust Size)
- Online: tinypng.com or squoosh.app

## Step 3: Name Your Files

Use descriptive names:
```
dell-server-installation.jpg
dell-motherboard-replacement.jpg
huawei-server-debugging.jpg
h3c-network-configuration.jpg
server-room-hpc-center.jpg
```

## Step 4: Upload to Project

Place files in these folders:
```
public/images/hero/
  - server-room.jpg (background for hero section)

public/images/hardware/
  - dell-server.jpg
  - huawei-server.jpg
  - h3c-server.jpg

public/images/services/
  - server-hardware.jpg
  - coding.jpg
  - cloud-infrastructure.jpg
  - database.jpg
```

## Step 5: Upload to VPS

From your Mac, run:
```bash
# Upload images to VPS
rsync -avz public/images/ racknerd:/var/www/hongyanaab/public/images/
```

Or use Git:
```bash
git add public/images/
git commit -m "Add real server hardware photos"
git push origin main

# Then on VPS
cd /var/www/hongyanaab
git pull origin main
pm2 restart nextjs-app
```

## Current Image Paths in Code

The website is looking for these images:
- `/images/hero/server-room.jpg` - Hero background
- `/images/hardware/dell-server.jpg` - Dell server work
- `/images/hardware/huawei-server.jpg` - Huawei server work
- `/images/hardware/h3c-server.jpg` - H3C server work
- `/images/services/server-hardware.jpg` - Service card
- `/images/services/coding.jpg` - Service card
- `/images/services/cloud-infrastructure.jpg` - Service card
- `/images/services/database.jpg` - Service card

## Tips

- Use high-quality photos but keep file size under 500KB each
- Make sure photos are well-lit and professional
- Blur any sensitive information (IP addresses, client names, etc.)
- Landscape orientation works best for most sections
