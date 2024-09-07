const path = require("path");
const pathPrefix = "/alanlauer.com";
const siteMetadata = {
  title: "Alan Lauer's website",
  shortName: "alanlauer.com",
  description: "my website for my stuff",
  fbAppId: "",
  imageUrl: "/graph-visualisation.jpg", // TODO: need image
  siteUrl: `https://alanlauer.github.io/alanlauer.com/`
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `./content`,
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        icon: "./static/logo.png",
        defaultColorMode: "night", // default color mode, auto, night, day
        // custom sitebar components, value can be summary, latest, tag, category, 
        // example: ["summary", "latest", "tag"], if this be defined, sidebarDefault will not work.
        sidebarComponents: ["category"],
        categoryText: "Content",
        shouldShowLatestOnIndex: true, // should show latest posts on index,
        nav: [
          {
            title: "Github",
            url: "https://github.com/alanlauer/alanlauer.com/",
          },
          {
            title: "Instagram",
            url: "https://www.instagram.com/247alan/",
          },
        ],
        editUrl: "https://github.com/alanlauer/alanlauer.com/tree/master/content/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
