# LEXA - Cyber Threat Analyzer Frontend

A modern, cyberpunk-themed security analysis dashboard built with React, TypeScript, Vite, and Tailwind CSS.

![LEXA Dashboard](./public/og-image.png)

## 🚀 Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Google Material Symbols
- **Fonts**: Inter, Domine, IBM Plex Sans, Lexend

## 📁 Project Structure

```
lexa-frontend/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/             # Route pages
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── HistoryPage.tsx
│   │   └── AboutPage.tsx
│   ├── App.tsx            # Main app with routing
│   ├── Layout.tsx         # Layout wrapper
│   └── main.tsx           # Entry point
├── public/                # Static assets
├── dist/                  # Build output (gitignored)
├── index.html             # HTML template
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── tailwind.config.ts     # Tailwind configuration
```

## 🌟 Features

- **Landing Page** - Hero section with threat analysis preview
- **Authentication** - Login, Register, and Forgot Password pages
- **Dashboard** - Real-time threat analysis interface
- **History** - Security incident logs with filtering
- **About** - Team showcase and feedback form
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Glass Morphism UI** - Modern cyberpunk aesthetic
- **Single Page Application** - Fast navigation with React Router

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd lexa-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🚀 Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For Production**
   ```bash
   vercel --prod
   ```

### Option 2: Using GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lexa-frontend.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings

3. **Configure Build Settings** (if needed)
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site

### Vercel Project Settings

Make sure these settings are configured in your Vercel dashboard:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Node.js Version** | 18.x or 20.x |
| **Install Command** | `npm install` |

### Environment Variables

No environment variables are required for this frontend-only project.

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Home page with hero and features |
| `/login` | Login | User authentication |
| `/register` | Register | New user registration |
| `/forgot-password` | Forgot Password | Password recovery |
| `/dashboard` | Dashboard | Main analysis interface |
| `/history` | History | Security incident logs |
| `/about` | About | Team and feedback |

## 🎨 Customization

### Colors

The project uses a custom Tailwind color palette based on Material Design 3:

- **Primary**: `#4edea3` (Cyber Green)
- **Secondary**: `#bec6e0` (Cool Gray)
- **Surface**: `#0b1326` (Dark Navy)
- **Error**: `#ffb4ab` (Soft Red)

### Fonts

- **Display**: Domine
- **Body**: IBM Plex Sans, Inter
- **Labels**: Lexend

## 📦 Build Output

The project uses `vite-plugin-singlefile` which bundles the entire application into a single HTML file:

- **Output**: `dist/index.html` (347 kB gzipped)
- **No external CSS/JS files** - Everything is inlined
- **Benefits**: Fast loading, no broken assets, easy deployment

## 🔧 Troubleshooting

### Common Issues

1. **Build fails**
   - Ensure Node.js version is 18+
   - Delete `node_modules` and run `npm install`

2. **Routes show 404 on refresh**
   - This is handled by `vercel.json` with SPA routing rules

3. **Styles not loading**
   - Check that `tailwind.config.ts` is properly configured
   - Verify `index.css` imports are correct

### Need Help?

- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👥 Team

Built by the Sentinel Oversight Team

---

**Live Demo**: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
