/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const navLinks = [
  { name: "Home", to: "/" },
  {
    name: "Members",
    to: [
      { name: "Teachers", to: "/members/teachers" },
      { name: "NQTs", to: "/members/nqt" },
      { name: "Support Staff", to: "/members/support-staff" },
      { name: "Leadership", to: "/members/leadership" },
      { name: "Post 16", to: "/members/post-16" },
      { name: "Independent Sector", to: "/members/independent" },
      { name: "Supply Teachers", to: "/members/supply" },
    ],
  },
  { name: "Events", to: "/events" },
  { name: "Equalities", to: "/equalities" },
  { name: "Reps", to: "/reps" },
  { name: "Gallery", to: "/gallery" },
  { name: "Affiliations", to: "/affiliation" },
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
      <div style={{ background: "teal" }}>
        <Header siteTitle={data.site.siteMetadata.title} navLinks={navLinks} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer navLinks={navLinks} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
