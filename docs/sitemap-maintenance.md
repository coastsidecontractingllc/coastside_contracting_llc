# Sitemap Maintenance

The sitemap lives at:

```text
sitemap.xml
```

The public URL is:

```text
https://coastsideswfl.com/sitemap.xml
```

## Automatic Sitemap Generation

Run this after adding or removing root HTML pages:

```bash
node generate-sitemap.js
```

The generator scans root-level `.html` files and writes a fresh `sitemap.xml`.

## Pages Included

The generator includes:

```text
Homepage
Services page
Contact page
Service pages
City pages
Future root-level HTML pages
```

## After Updating the Sitemap

1. Commit and push `sitemap.xml`.
2. Open Google Search Console.
3. Go to Sitemaps.
4. Resubmit:

```text
https://coastsideswfl.com/sitemap.xml
```

5. Use URL Inspection for important new pages.
