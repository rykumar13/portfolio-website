import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { github } from "@config"
import { theme, mixins, Section, Heading } from "@styles"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled(Section)`
  position: relative;
`

const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  margin-top: 0px;
  align-items: flex-start;

  @media(max-width: 48em) {
    display: block;
  }
`

const StyledContent = styled.div`
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.lg};
  width: 60%;
  max-width: 500px;
  @media(max-width: 48em) {
    width: 100%;
  }
  a {
    ${mixins.inlineLink};
  }
`

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.sm};
  color: ${colors.black};
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${colors.black};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`

const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  @media(max-width: 48em) {
    margin: 60px auto 0;
  }
  @media(max-width: 30em) {
    width: 70%;
  }
  a {
    &:focus {
      outline: 0;
    }
  }
`

const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`

const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightestSlate};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.black};
    mix-blend-mode: screen;
  }
  &:after {
    border: 1px solid ${colors.black};
    top: 10px;
    left: 10px;
    z-index: -1;
  }
`

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { title, skills, avatar } = frontmatter

  return (
    <StyledContainer id="about">
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About