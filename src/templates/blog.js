import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      childContentfulBlogPostPostTitleTextNode {
        postTitle
      }
      publishedDate
    }
  }
`
const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      Template : This is the blog posts using createNodeField.
      <h3>
        {
          props.data.allContentfulBlogPost
            .childContentfulBlogPostPostTitleTextNode.postTitle
        }
      </h3>
      <h3>{props.data.allContentfulBlogPost.publishedDate}</h3>
      <p>
        {documentToReactComponents(props.data.allContentfulBlogPost.body.json),options}
      </p>
      {/* <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div> */}
    </Layout>
  )
}

export default Blog
