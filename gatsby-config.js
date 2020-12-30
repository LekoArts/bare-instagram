module.exports = {
  siteMetadata: {
    title: 'Bare Instagram',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Bare Instagram`,
        short_name: `Bastagram`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#6D4B20`,
        display: `standalone`,
        icon: 'src/images/bear-instagram.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
