import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const postData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            childContentfulBlogPostPostTitleTextNode{
            postTitle
            }
            publishedDate
            spaceId
            slug
            
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
          {postData.allContentfulBlogPost.edges.map((edge, index) => {
            return (
              <li key={index} className={blogStyles.post}>
              <Link rel="noreferrer" to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.childContentfulBlogPostPostTitleTextNode.postTitle}</h2>
                <h6>
                  on{" "}
                  {edge.node.publishedDate}
                </h6>
               
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
