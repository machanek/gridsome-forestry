// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Dieta Medycyna Zdrowie Anna Chrobak",
  siteUrl: `https://vital-platinum.pl`,
  host: "localhost",
  titleTemplate: "%s",
  siteDescription: "Kreatywnie o medycynie i zdrowiu",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/journal/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
		  '/projects/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
