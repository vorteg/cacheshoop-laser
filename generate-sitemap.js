const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define the base URL of your site
const baseUrl = 'https://cacheshoop.com';

// List all your routes
const pages = [
  '/',
  '/about',
  '/contact',
  '/products',
  // Add more routes here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  pages.forEach(page => {
    sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
  });

  sitemap.end();

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);
  streamToPromise(sitemap.pipe(writeStream)).then(() => {
    console.log('Sitemap generated successfully!');
  }).catch(err => {
    console.error('Error generating sitemap:', err);
  });
}

generateSitemap();
