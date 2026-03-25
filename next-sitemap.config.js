/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://squishtoyguide.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for key pages
    let priority = config.priority;
    if (path === "/") priority = 1.0;
    else if (path === "/needoh") priority = 0.9;
    else if (path.startsWith("/needoh/")) priority = 0.8;
    else if (path.startsWith("/guides/")) priority = 0.7;
    else if (path.startsWith("/blog/")) priority = 0.6;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
