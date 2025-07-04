# LAGHF Games - Setup Guide

## What's Been Created

I've successfully recreated the SHS Games website for you with the following changes:

### ✅ Project Structure
- **New project name**: `laghf-games`
- **Updated branding**: All references changed from "SHS Games" to "LAGHF Games"
- **GitHub user**: Updated to "laghf"
- **License**: Changed to MIT
- **Version**: Started at 1.0.0

### ✅ All Original Games Included
- **NES Games**: 50+ classic Nintendo games (Bubble Bobble, Castlevania, Contra, etc.)
- **GBA Games**: Game Boy Advance games
- **Unity Games**: Modern web games (Slope, Subway Surfers, etc.)
- **Iframe Games**: Web-based games (1v1.lol, Cookie Clicker, etc.)
- **Flash Games**: Legacy games via Ruffle emulator

### ✅ Complete Website Features
- **Progressive Web App (PWA)** support
- **Dark/Light theme** toggle
- **Search functionality** with real-time results
- **Favorite games** system with local storage
- **Responsive design** for all devices
- **Game statistics** and frame rate monitoring
- **Keyboard shortcuts** and controls
- **Ad integration** (Adsense components included)

### ✅ Technical Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **PhotonCSS** for UI components
- **React Router** for navigation
- **React Query** for data management
- **PWA** with service worker support

## Next Steps

### 1. Install Dependencies
```bash
# If you have PowerShell execution policy issues, run:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then install dependencies:
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:8080`

### 3. Build for Production
```bash
npm run build
```
This creates a `public_html` folder with all the static files.

### 4. Deploy to GitHub Pages
1. Create a new repository on GitHub named `laghf-games`
2. Push this code to the repository
3. Go to Settings > Pages
4. Set source to "Deploy from a branch"
5. Select the `main` branch and `/public_html` folder
6. Your site will be live at `https://laghf.github.io/laghf-games`

## Files Created

### Core Files
- `package.json` - Project configuration and dependencies
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `app/index.tsx` - Main application entry point
- `app/games.ts` - Complete game database (100+ games)
- `app/manifest.json` - PWA manifest

### Pages
- `app/src/pages/Index.tsx` - Home page with game grid
- `app/src/pages/GamePlayer.tsx` - Individual game player page

### Components
- All UI components copied and adapted for your branding
- Search, navigation, game cards, theme switcher, etc.

### Assets
- All game files and assets copied
- Icons, banners, and public assets included
- Built games (Baldi's Basics, Chrome Dino, Cookie Clicker, etc.)

### Documentation
- `README.md` - Project overview and setup
- `DEPLOYMENT.md` - Detailed deployment guide
- `SETUP.md` - This file

## Customization Options

### Change Branding
- Update `app/manifest.json` for app name and description
- Modify console.log messages in `app/index.tsx`
- Update title in `app/index.html`

### Add/Remove Games
- Edit `app/games.ts` to add or remove games
- Games are categorized by type (NES, GBA, Unity, etc.)

### Modify Styling
- Edit `app/styles/main.less` for main styles
- Edit `app/styles/theme.less` for theme colors
- Edit `app/styles/search.less` for search styling

### Change Domain
- Update `base` field in `app/manifest.json`
- Update `base` field in `vite.config.ts`

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Ensure Node.js 20.x+ is installed
3. Try clearing node_modules and reinstalling
4. Check the deployment guide for hosting-specific issues

## Legal Note

This is a recreation of the SHS Games website with your own branding. Make sure to:
- Respect the original game licenses
- Add appropriate disclaimers if needed
- Consider adding a "Games sourced from various public repositories" note
- Ensure compliance with your hosting provider's terms of service

Your LAGHF Games website is now ready to be deployed and shared! 🎮 