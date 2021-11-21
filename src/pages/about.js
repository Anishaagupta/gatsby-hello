import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        {" "}
        About Page.
        <p>
          My LinkedIn Profile
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/anisha-gupta-66096318b/"
          >
            Anisha
          </a>
        </p>
        Got to <a href="/">Home Page</a>
      </Layout>
    </div>
  )
}

export default AboutPage
