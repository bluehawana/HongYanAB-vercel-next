# VPS Deployment Guide

## Step 1: Prepare Your VPS

SSH into your RackNerd VPS:
```bash
ssh root@your-vps-ip
```

### Install Node.js (if not installed)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Should be v20.x
```

### Install Nginx (if not installed)
```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Create deployment directory
```bash
sudo mkdir -p /var/www/your-site
sudo chown -R $USER:$USER /var/www/your-site
```

## Step 2: Upload Your Project

From your local machine, upload the project to VPS:
```bash
# Option 1: Using rsync (recommended)
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  ./ root@your-vps-ip:/var/www/your-site/

# Option 2: Using scp
scp -r ./* root@your-vps-ip:/var/www/your-site/

# Option 3: Using Git (best for updates)
# On VPS:
cd /var/www/your-site
git clone https://github.com/your-username/your-repo.git .
```

## Step 3: Deploy the Application

SSH into your VPS and run:
```bash
cd /var/www/your-site
chmod +x deploy-vps.sh
./deploy-vps.sh
```

## Step 4: Configure Nginx

```bash
# Copy nginx config
sudo cp nginx-config.conf /etc/nginx/sites-available/your-site

# Edit the config with your domain
sudo nano /etc/nginx/sites-available/your-site
# Replace 'your-domain.com' with your actual domain

# Enable the site
sudo ln -s /etc/nginx/sites-available/your-site /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Step 5: Set Up SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot will automatically configure nginx for HTTPS
# Certificates auto-renew via cron
```

## Step 6: Configure Firewall

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

## Managing Your Application

### View logs
```bash
pm2 logs nextjs-app
```

### Restart application
```bash
pm2 restart nextjs-app
```

### Stop application
```bash
pm2 stop nextjs-app
```

### Check status
```bash
pm2 status
```

### Monitor resources
```bash
pm2 monit
```

## Updating Your Site

When you make changes:

```bash
# On your local machine, push to git
git push origin main

# On VPS
cd /var/www/your-site
git pull origin main
npm ci
npm run build
pm2 restart nextjs-app
```

Or create an update script:
```bash
#!/bin/bash
cd /var/www/your-site
git pull origin main
npm ci
npm run build
pm2 restart nextjs-app
echo "✅ Update complete!"
```

## Troubleshooting

### Check if app is running
```bash
pm2 status
curl http://localhost:3000
```

### Check nginx status
```bash
sudo systemctl status nginx
sudo nginx -t
```

### View nginx logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Port already in use
```bash
sudo lsof -i :3000
# Kill the process if needed
sudo kill -9 <PID>
```

## Performance Tips

1. Enable gzip in nginx (add to server block):
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

2. Set up log rotation for PM2:
```bash
pm2 install pm2-logrotate
```

3. Monitor server resources:
```bash
htop
df -h
free -m
```

## Security Checklist

- ✅ Firewall configured (ufw)
- ✅ SSL certificate installed
- ✅ SSH key authentication (disable password auth)
- ✅ Regular system updates: `sudo apt update && sudo apt upgrade`
- ✅ Fail2ban for SSH protection (optional but recommended)
