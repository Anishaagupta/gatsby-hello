import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const postData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
              date
              content
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>Fresh Blogs</h1>
        <ol className={blogStyles.posts}>
          {postData.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index} className={blogStyles.post}>
              <Link rel="noreferrer" to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h6>
                  By {edge.node.frontmatter.author} on{" "}
                  {edge.node.frontmatter.date}
                </h6>
                <p>{edge.node.frontmatter.content}</p>
                </Link>
              </li>
            )
          })}
        </ol>
        This is Blog Page. Got to <Link to="/contact">Contact Page</Link>
      </Layout>
    </div>
  )
}

export default BlogPage
