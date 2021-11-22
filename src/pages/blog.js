import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

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
            tableOfContents(
              absolute: true
              pathToSlugField: "frontmatter.path"
              heading: "only show toc from this heading onwards"
              maxDepth: 2
            )
            wordCount {
              paragraphs
              sentences
              words
            }
            headings {
              depth
              value
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>Fresh Blogs</h1>
        <ol>
          {postData.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h6>
                  By {edge.node.frontmatter.author} on{" "}
                  {edge.node.frontmatter.date}
                </h6>
                <p>{edge.node.frontmatter.content}</p>
                Read full blog{" "}
                <Link rel="noreferrer" to={`/blog/${edge.node.fields.slug}`}>here</Link>
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
