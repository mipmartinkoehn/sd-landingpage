module.exports = {
  siteMetadata: {
    title: 'mip Software - Individualsoftware aus Berlin',
    siteUrl: `https://www.individualsoftware-berlin.de`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-next`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PW3H6M3",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ],
}
