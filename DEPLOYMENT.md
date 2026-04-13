# 🚀 Vercel Deployment Guide

This guide will walk you through deploying the LEXA frontend to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A [GitHub](https://github.com) account
- Node.js 18+ installed locally

---

## Method 1: Deploy with Vercel CLI (Fastest)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

Navigate to your project folder and run:

```bash
cd lexa-frontend
vercel
```

The CLI will ask you a few questions:
- **Set up "~/lexa-frontend"?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (create new)
- **What's your project name?** → lexa-frontend (or choose your own)
- **In which directory is your code located?** → ./ (current directory)

### Step 4: Production Deployment

```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

---

## Method 2: Deploy with GitHub (Recommended for Teams)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `lexa-frontend`)
3. Make it Public or Private
4. Click "Create repository"

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lexa-frontend.git

# Push
git push -u origin main
```

### Step 3: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Find and select your `lexa-frontend` repo
4. Click "Import"

### Step 4: Configure Project

Vercel should auto-detect the settings. Verify these:

| Setting | Value |
|---------|-------|
| Framework Preset | **Vite** |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 30-60 seconds)
3. Click "Visit" to see your live site!

---

## ⚙️ Project Settings on Vercel

After deployment, you can adjust these settings:

### Build & Development Settings

Go to **Project Settings** → **Build & Development Settings**:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Development Command: npm run dev
```

### Environment Variables

This project doesn't require any environment variables.

If you add a backend later:

```
VITE_API_URL=https://your-api-url.com
```

### Domain Settings

To use a custom domain:

1. Go to **Project Settings** → **Domains**
2. Add your domain (e.g., `lexa.yourdomain.com`)
3. Follow the DNS configuration steps

---

## 🔧 Configuration Files Explained

### `vercel.json`

This file handles:
- SPA routing (404s on refresh)
- Build configuration
- Caching headers for assets

```json
{
  "version": 2,
  "builds": [{"src": "package.json", "use": "@vercel/static-build"}],
  "routes": [{"src": "/[^.]+", "dest": "/index.html"}]
}
```

### `vite.config.ts`

Build configuration for Vite with single-file output.

### `package.json`

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "vercel-build": "npm run build"
  }
}
```

---

## 🔄 Continuous Deployment

With GitHub integration, Vercel automatically:

1. **Preview Deployments**: Every Pull Request gets a unique preview URL
2. **Production Deployments**: Every push to `main` branch updates production

### Deployment Pipeline

```
Push to branch → Build → Preview URL
Push to main → Build → Production URL
```

---

## 🐛 Troubleshooting

### Issue: "404 Page Not Found" on refresh

**Solution**: The `vercel.json` file should handle this. If not:

1. Go to Project Settings → Functions
2. Or add a `vercel.json` in your project root:

```json
{
  "rewrites": [{"source": "/(.*)", "destination": "/index.html"}]
}
```

### Issue: Build Fails

**Check**:
1. Node.js version is 18+ (set in package.json engines)
2. All imports are correct (case-sensitive)
3. No TypeScript errors

**Fix**:
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Styles Not Loading

**Check**:
1. `index.css` is imported in `main.tsx`
2. Tailwind classes are correct
3. No CSS import errors in console

### Issue: Images Not Showing

**Check**:
1. Image URLs are correct
2. Images are in the `public/` folder (for static assets)
3. No 404 errors in browser console

---

## 📊 Monitoring

### Vercel Analytics

Enable Web Analytics in your Vercel dashboard:

1. Go to **Analytics** tab
2. Click "Enable" for Web Analytics
3. Redeploy your project

### Performance

Check your site's performance:

1. Go to **Speed Insights** tab
2. View Core Web Vitals
3. Optimize based on recommendations

---

## 🎯 Production Checklist

Before going live:

- [ ] All pages load correctly
- [ ] Navigation works (no 404s)
- [ ] Responsive on mobile/tablet
- [ ] Forms work (if connected to backend)
- [ ] Images load correctly
- [ ] No console errors
- [ ] Favicon is set
- [ ] Page titles are descriptive

---

## 📝 Useful Commands

```bash
# Test build locally
npm run build

# Preview production build
npm run preview

# Deploy with Vercel CLI
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# Open project dashboard
vercel open
```

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [React Router on Vercel](https://vercel.com/guides/using-react-router-on-vercel)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

## ✅ Success!

Your LEXA frontend is now live on Vercel! 🎉

**Next Steps**:
- Connect to a backend API
- Add authentication
- Set up a custom domain
- Enable analytics

---

*Built with ❤️ by Sentinel Oversight*
