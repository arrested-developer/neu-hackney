/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const navLinks = [
  { name: "Home", to: "/" },
  {
    name: "Members",
    to: [
      { name: "Events", to: "/events" },
      { name: "Equalities", to: "/equalities" },
      { name: "Reps", to: "/reps" },
      { name: "Gallery", to: "/gallery" },
    ],
  },
  { name: "Events", to: "/events" },
  { name: "Equalities", to: "/equalities" },
  { name: "Reps", to: "/reps" },
  { name: "Gallery", to: "/gallery" },
]

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} navLinks={navLinks} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer navLinks={navLinks} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
