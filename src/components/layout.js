import React from "react";
import Footer from "./footer";
import Header from "./Header";
import '../styles/index.scss';

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
