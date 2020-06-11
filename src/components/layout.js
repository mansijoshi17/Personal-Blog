/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "../styles/layout.css"
import LogoHeader from "./logo"

const Layout = () => {


  return (
    <>
      <Header />
      <LogoHeader/>
    </>
  )
}



export default Layout
