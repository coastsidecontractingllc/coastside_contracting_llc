# GitHub Pages Deployment Instructions

This website is built with Gatsby and can be easily deployed to GitHub Pages.

## Automatic Deployment (Recommended)

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**

2. **Create GitHub Actions Workflow:**
   Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

4. **Access Your Site:**
   Your site will be available at:
   `https://coastsidecontractingllc.github.io/coastside_contracting_llc/`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d public"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `static/` directory with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in repository settings

## Updating the Logo

To replace the placeholder logo with your actual business logo:

1. Replace `/static/logo-placeholder.svg` with your logo file
2. Update the src path in `/src/pages/index.js` if needed
3. Rebuild and redeploy

## Contact Information

The contact form uses a mailto link. To integrate with a form service:

1. Sign up for a service like Netlify Forms, Formspree, or EmailJS
2. Update the ContactForm component in `/src/components/ContactForm/ContactForm.js`
3. Follow the service's integration instructions

## Support

For technical questions about this website, contact your web developer or create an issue in this repository.