import React from "react"
import { email } from "@config"
import styled from "styled-components"
import { mixins, Section, theme } from "@styles"
import PropTypes from "prop-types"
const { fontSizes, fonts, colors } = theme

const StyledContainer = styled(Section)`
color: ${colors.lightestSlate};
padding: 60px 0;
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 90vh;
  @media(max-width: 48em) {
    padding-top: 00px;
  }
  div {
    width: 100%;
  }
`

const StyledOverline = styled.h1`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
  font-weight: normal;
  margin: 0 0 20px 3px;
  @media(max-width: 63em) {
    font-size: ${fontSizes.sm};
  }
  @media(max-width: 48em) {
    font-size: ${fontSizes.smish};
  }
`

const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  @media(max-width: 63em) {
    font-size: 70px;
  }
  @media(max-width: 48em) {
    font-size: 60px;
  }
  @media(max-width: 30em) {
    font-size: 50px;
  }
  @media(max-width: 24em) {
    font-size: 40px;
  }
`

const StyledSubtitle = styled.h3`
  font-size: 70px;
  font-weight: normal;
  line-height: 1.1;
  @media(max-width: 63em) {
    font-size: 70px;
  }
  @media(max-width: 48em) {
    font-size: 60px;
  }
  @media(max-width: 30em) {
    font-size: 50px;
  }
  @media(max-width: 24em) {
    font-size: 40px;
  }
`

const StyledDescription = styled.div`
  font-family: ${fonts.Calibre};
  margin-top: 25px;
  // width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 20px;
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node

  return (
    <StyledContainer id="hero">
      <StyledOverline>{frontmatter.title}</StyledOverline>
      <StyledTitle>{frontmatter.name}.</StyledTitle>
      <StyledSubtitle>{frontmatter.subtitle}</StyledSubtitle>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
      <div>
        <StyledEmailLink href={`mailto:${email}`}>Get In Touch</StyledEmailLink>
      </div>
    </StyledContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero