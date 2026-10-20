# Deployment Guide for RAAZ – Massage & Spa Therapy

This guide walks you through deploying the RAAZ website to public hosting platforms quickly and easily.

---

## Option 1: Deploy to Vercel (Recommended)

The project includes `vercel.json` with the Vite build command, `dist` output directory, and a rewrite for client-side routes. A root `.gitignore` excludes local dependencies, build output, and Vercel's local settings.

### Steps:
1. Push your project code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for RAAZ Massage & Spa Therapy"
   git branch -M main
   git remote add origin https://github.com/<your-username>/raaz-spa-website.git
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New"** > **"Project"**.
4. Select your `raaz-spa-website` repository and click **Import**.
5. Keep the project root as the **Root Directory**. Vercel will use the settings from `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Vercel will build the site and provide a `https://<project-name>.vercel.app` URL with HTTPS.
7. To use a custom domain, add it under **Project Settings > Domains** and follow Vercel's DNS instructions.
8. After choosing the live domain, update the sitemap URL in `public/robots.txt` and the site URLs in `public/sitemap.xml` to match it, then redeploy.

---

## Option 2: Deploy to Netlify (Drag & Drop or Git)

### Method A: Git Integration
1. Go to [https://app.netlify.com](https://app.netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Choose your GitHub repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Method B: Manual Drag-and-Drop (No Git Required)
1. In your local terminal, run:
   ```bash
   npm run build
   ```
2. Locate the `dist` folder created in your project root.
3. Log in to [Netlify](https://app.netlify.com) and go to **Sites**.
4. Drag and drop the `dist` folder into the Netlify dashboard.
5. Your website is instantly live!

---

## Option 3: Deploy to GitHub Pages

1. In `vite.config.ts`, if your repository is not at root domain, set the base path:
   ```ts
   export default defineConfig({
     base: '/raaz-spa-website/', // replace with your repo name
     plugins: [react()],
   })
   ```
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add these scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, go to **Pages** and ensure the branch is set to `gh-pages` and folder is `/(root)`.

---

## 🔍 Google Search Console & SEO Verification

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your live website URL as a **URL prefix** property (e.g. `https://your-spa-domain.com`).
3. Choose **HTML tag** verification method.
4. Copy the verification code provided by Google (e.g. `abcdef123456...`).
5. Open `index.html` in your project and replace:
   ```html
   <meta name="google-site-verification" content="PLACEHOLDER_GOOGLE_SITE_VERIFICATION_KEY" />
   ```
   with your actual verification token:
   ```html
   <meta name="google-site-verification" content="your_copied_token" />
   ```
6. Deploy the update, then click **Verify** in Google Search Console.
7. Under **Sitemaps**, submit your sitemap URL: `https://your-spa-domain.com/sitemap.xml`.
