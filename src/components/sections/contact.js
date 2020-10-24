import React from "react"
import PropTypes from "prop-types"
import { email } from "@config"
import styled from "styled-components"
import { theme, mixins, Section, Heading } from "@styles"
const { fontSizes, fonts, colors } = theme

const StyledContainer = styled(Section)`
  color: ${colors.cream_text};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`

const StyledHeading = styled(Heading)`
  display: block;
  font-size: ${fontSizes.md};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  @media (max-width: 63em) {
    font-size: ${fontSizes.sm};
  }
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
    @media (max-width: 63em) {
      font-size: ${fontSizes.smish};
    }
  }
  &:after {
    display: none;
  }
`

const StyledTitle = styled.h4`
  margin: 0px 0px 20px;
  font-size: 60px;
  @media (max-width: 63em) {
    font-size: 50px;
  }
  @media (max-width: 48em) {
    font-size: 40px;
  }
`

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

const StyledDiv = styled.div`
  font-family: ${fonts.Calibre};
`

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { title, buttonText } = frontmatter

  return (
    <StyledContainer id="contact">
      <StyledHeading>What&apos;s Next?</StyledHeading>
      <StyledTitle>{title}</StyledTitle>
      <StyledDiv dangerouslySetInnerHTML={{ __html: html }} />
      <StyledEmailLink
        href={`mailto:${email}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {buttonText}
      </StyledEmailLink>
    </StyledContainer>
  )
}

Contact.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Contact
