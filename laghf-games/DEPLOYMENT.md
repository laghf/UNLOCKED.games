# Deployment Guide for LAGHF Gamez

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Deploy the `public_html` folder**

## Deployment Options

### GitHub Pages (Recommended)

1. Create a new repository on GitHub named `laghf-games`
2. Push your code to the repository
3. Go to Settings > Pages
4. Set source to "Deploy from a branch"
5. Select the `main` branch and `/public_html` folder
6. Your site will be available at `https://laghf.github.io/laghf-games`

### Netlify

1. Sign up for Netlify
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `public_html`
5. Deploy!

### Vercel

1. Sign up for Vercel
2. Import your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `public_html`
5. Deploy!

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Set public directory to `public_html`
5. Deploy: `firebase deploy`

### Manual Upload

1. Build the project: `npm run build`
2. Upload the contents of `public_html` to your web server
3. Ensure your server supports SPA routing (configure 404.html to redirect to index.html)

## Custom Domain

To use a custom domain:

1. Purchase a domain
2. Configure DNS to point to your hosting provider
3. Update the `base` field in `app/manifest.json` if needed
4. Update the `base` field in `vite.config.ts` if needed

## Environment Variables

Create a `.env` file in the root directory for any environment-specific settings:

```env
# Example environment variables
NODE_ENV=production
```

## Troubleshooting

### Build Issues
- Ensure Node.js version 20.x or higher is installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

### Deployment Issues
- Ensure all files in `public_html` are uploaded
- Check that your hosting provider supports SPA routing
- Verify that the base URL is correctly configured

### Performance Optimization
- Enable gzip compression on your server
- Use a CDN for static assets
- Enable browser caching for static files

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure the build completed successfully
4. Check your hosting provider's documentation 