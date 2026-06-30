const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://coastsideswfl.com';
const ROOT = __dirname;
const TODAY = new Date().toISOString().slice(0, 10);

const priorityFor = (file) => {
  if (file === 'index.html') return '1.0';
  if (file === 'services.html') return '0.9';
  if (file.includes('handyman') || file.includes('bathroom') || file.includes('kitchen') || file.includes('floor') || file.includes('rental')) {
    return '0.9';
  }
  if (file.includes('home-repair-remodeling')) return '0.8';
  if (file === 'contact.html') return '0.8';
  return '0.5';
};

const locFor = (file) => {
  if (file === 'index.html') return `${SITE_URL}/`;
  return `${SITE_URL}/${file}`;
};

const pages = fs.readdirSync(ROOT)
  .filter((file) => file.endsWith('.html'))
  .filter((file) => !file.startsWith('.'))
  .filter((file) => file !== 'cape-coral-handyman-services.html')
  .filter((file) => file !== 'cape-coral-rental-property-maintenance.html')
  .sort((a, b) => {
    const order = ['index.html', 'services.html', 'contact.html'];
    const aIndex = order.indexOf(a);
    const bIndex = order.indexOf(b);
    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    }
    return a.localeCompare(b);
  });

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((file) => `  <url>
    <loc>${locFor(file)}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${priorityFor(file)}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${pages.length} pages.`);
