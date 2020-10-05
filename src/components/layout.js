/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GlobalStyle, theme } from "@styles"
import Footer from "./footer"
import Header from "./header"
import { Email, Social } from "@components"
import "./layout.css"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Layout = ({ children }) => {
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
          <GlobalStyle />

          <StyledContent>
            <Header />
            <Email />
            <Social />
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

export default Layout
