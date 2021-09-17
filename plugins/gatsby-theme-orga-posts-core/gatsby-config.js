const withDefaults = require('./utils/default-options')

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)
  return {
    siteMetadata: {
      title: `Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
    },
    plugins: [
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            quality: 80
          }
        }
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-orga`,
        options: {
          slug: options.slug,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.contentPath,
          path: options.contentPath,
          ignore: ['**/.*', '**/*.db-journal'],
        },
      },
    ],
  }
}
