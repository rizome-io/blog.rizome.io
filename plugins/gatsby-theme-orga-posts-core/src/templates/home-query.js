import { graphql } from 'gatsby'
import HomePage from '../components/home'

export default HomePage

export const query = graphql`
  query HomePostsQuery($ids: [String!]!, $width: Int!, $height: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allOrgPost(
      filter: { id: { in: $ids } }
      sort: { fields: [date, title], order: DESC }
    ) {
      nodes {
        id
        title
        category
        excerpt
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
        image {
          childImageSharp {
            gatsbyImageData(width: $width, height: $height)
          }
        }
      }
    }
  }
`
