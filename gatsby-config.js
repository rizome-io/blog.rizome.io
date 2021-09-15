module.exports = {
  siteMetadata: {
    title: `Rizome & Lucid`,
    description: `Cardano blockchain infrastructure and architecture`,
    author: `rizome.io`,
    twitter: 'lucid_ada_pool',
    github: 'rizome-io',
    siteUrl: `https://blog.rizome.io`,
    social: [
      { name: 'twitter', url: 'https://twitter.com/lucid_ada_pool' },
      { name: 'website', url: 'https://rizome.io' },
      { name: 'email', url: 'mailto:id@rizome.io' },
    ],
  },
  plugins: [
    {
     resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-9WVNPCGXSC'],
      }
    },
    {
      resolve: 'gatsby-theme-orga-posts',
      options: {
        columns: 1,
        preset: require.resolve('./src/gatsby-plugin-theme-ui/index.ts')
      }
    },
  ],
}

// G-9WVNPCGXSC
