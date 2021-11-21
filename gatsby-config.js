module.exports = {
  siteMetadata: {
    title: "Anisha Gupta Blog",
    author: "Änisha",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/ `,
      },
    },
  ],
}
