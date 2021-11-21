import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BlogPage = () => {
  return (
    <div>
      <Layout>
        This is Blog Page. Got to <Link to="/contact">Contact Page</Link>
      </Layout>
    </div>
  )
}

export default BlogPage
