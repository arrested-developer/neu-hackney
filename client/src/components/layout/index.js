/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"
import Sidebar from "../sidebar"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        memberCats: allWordpressCategory(
          filter: { name: { ne: "Uncategorised" } }
        ) {
          edges {
            node {
              id
              wordpress_id
              name
              slug
              count
              pageContent {
                id
              }
            }
          }
        }
      }
    `}
    render={data => {
      const isStandalonePage = node =>
        node.pageContent && node.pageContent.length
      const navLinks = [
        { name: "Home", to: "/" },
        { name: "Events", to: "/events" },
        {
          name: "Members",
          to: data.memberCats.edges
            .filter(cat => !isStandalonePage(cat.node))
            .sort((a, b) => a.node.wordpress_id - b.node.wordpress_id)
            .map(cat => ({
              name: cat.node.name,
              to: `/members/${cat.node.slug}`,
            })),
        },
      ].concat(
        data.memberCats.edges
          .filter(cat => isStandalonePage(cat.node))
          .map(cat => ({
            name: cat.node.name,
            to: `/${cat.node.slug}`,
          }))
      )
      return (
        <div style={{ background: "teal" }}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            navLinks={navLinks}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1200,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
            <Sidebar />
          </div>
          <Footer navLinks={navLinks} />
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
