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
import { GlobalStyle, theme } from '@styles';
import Footer from "./footer"
import Header from "./header"
import { Email } from '@components';
import "./layout.css"
const { colors, fontSizes, fonts } = theme;

const StyledContent = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
border: 1px solid #1c6ea4;
`
const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  border: 1px solid #1c6ea4;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.green};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;


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
          
          <SkipToContent href="#content">Skip to Content</SkipToContent>

          <StyledContent>
            <Header />
            <Email />
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
