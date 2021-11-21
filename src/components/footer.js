import React from "react";
import {graphql, useStaticQuery} from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`)
  return (
    <div>
      This is the Footer. Created by
      <a rel="noreferrer" href="https://www.linkedin.com/in/anisha-gupta-66096318b/">@{data.site.siteMetadata.author}
      </a>
    </div>
  )
}

export default Footer
