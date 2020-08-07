/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const StyledContent = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
border: 1px solid #1c6ea4;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Header siteTitle={site.siteMetadata.title} />

          <StyledContent>
            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
