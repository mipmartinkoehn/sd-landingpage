module.exports = {
  siteMetadata: {
    title: 'mip Software - Individualsoftware aus Berlin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-next`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    }
  ],
}
