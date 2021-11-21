import React from "react"
import Footer from "./footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
