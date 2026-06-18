const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ANALYTICS_SNIPPET = '  <script src="analytics-config.js" defer></script>\n  <script src="analytics.js" defer></script>\n';

const pages = fs.readdirSync(ROOT)
  .filter((file) => file.endsWith('.html'))
  .filter((file) => !file.startsWith('.'));

let updated = 0;

pages.forEach((file) => {
  const filePath = path.join(ROOT, file);
  const html = fs.readFileSync(filePath, 'utf8');

  if (html.includes('analytics.js')) {
    return;
  }

  if (!html.includes('</head>')) {
    console.warn(`Skipped ${file}: missing </head>`);
    return;
  }

  fs.writeFileSync(filePath, html.replace('</head>', `${ANALYTICS_SNIPPET}</head>`));
  updated += 1;
});

console.log(`Analytics scripts present on ${pages.length} HTML pages. Updated ${updated} page(s).`);
