module.exports = (options) => {
  const { preset = 'orga-theme-ui-preset' } = options

  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      siteUrl: `https://orga.js.org`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      twitter: 'xiaoxinghu',
      social: [
        { name: 'twitter', url: 'https://twitter.com/xiaoxinghu' },
        { name: 'website', url: 'https://huxiaoxing.com' },
        { name: 'email', url: 'mailto:contact@huxx.org' },
      ],
    },
    plugins: [
      {
        resolve: require.resolve('../gatsby-theme-orga-posts-core'),
        options: {
          ...options,
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `src`,
          ignore: ['**/.*'], // ignore files starting with a dot
        },
      },
      {
        resolve: 'gatsby-plugin-theme-ui',
        options: {
          preset: preset,
        },
      },
    ],
  }
}
