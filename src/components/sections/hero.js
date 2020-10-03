import React from "react"
import { email } from "@config"
import styled from "styled-components"
import { mixins, Section, theme } from "@styles"
import PropTypes from "prop-types"
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`

const StyledOverline = styled.h1`
  margin: 0 0 20px 3px;
  font-weight: normal;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
  //color: ${colors.green};

`

const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  font-family: ${fonts.SFMono};

`

const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  font-family: ${fonts.SFMono};

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

  const one = () => <StyledOverline>{frontmatter.title}</StyledOverline>
  const two = () => <StyledTitle>{frontmatter.name}.</StyledTitle>
  const three = () => <StyledSubtitle>{frontmatter.subtitle}</StyledSubtitle>

  const four = () => (
    <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
  )
  const five = () => (
    <div>
      <StyledEmailLink href={`mailto:${email}`}>Get In Touch</StyledEmailLink>
    </div>
  )

  const items = [one, two, three, four, five]

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
