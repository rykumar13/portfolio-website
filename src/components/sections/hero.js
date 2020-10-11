import React from "react"
import { email } from "@config"
import styled from "styled-components"
import { mixins, Section, theme } from "@styles"
import PropTypes from "prop-types"
const { fontSizes, fonts } = theme

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`

const StyledOverline = styled.h1`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
  font-weight: normal;
  margin: 0 0 20px 3px;
`

const StyledTitle = styled.h2`
  font-family: ${fonts.SFMono};
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
`

const StyledSubtitle = styled.h3`
  font-family: ${fonts.SFMono};
  font-size: 70px;
  font-weight: normal;
  line-height: 1.1;
`

const StyledDescription = styled.div`
  font-family: ${fonts.Calibre};
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node

  return (
    <StyledContainer>
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