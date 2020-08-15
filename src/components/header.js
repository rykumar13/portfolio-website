import React from "react"
import { IconLogo } from '@components/icons';
import styled from "styled-components"
import { navLinks } from "@config"
import { theme, mixins } from "@styles"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.div`
  background-color: ${colors.navy};
  ${mixins.flexBetween};
`

const NavList = styled.ol`
  ${mixins.flexBetween};
  //margin: 25px 25px 25px 25px;
  //list-style-type: none;
`

const NavListItem = styled.li`
  margin: 25px 0px 35px 35px;
  position: relative;
  font-size: ${fontSizes.smish};
`

const MenuLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.lg};
  color: ${colors.lightestSlate};
`

const StyledName = styled.h3`
  ${mixins.flexCenter};
  font-family: ${fonts.SFMono};
  margin: 25px 50px 50px 50px;
`

const StyledResumeButton = styled.a`
  ${mixins.smallButton};
  font-size: ${fontSizes.smish};
  margin: 25px 50px 50px 50px;
`
const StyledLogo = styled.div`
  margin: 25px 50px 50px 50px;
  ${mixins.flexCenter};
  a {
    display: block;
    color: ${colors.green};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${colors.transGreen};
      }
    }
    svg {
      fill: none;
      transition: ${theme.transition};
      user-select: none;
    }
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledLogo tabindex="-1">
          <a href="/" aria-label="home">
            <IconLogo />
          </a>
      </StyledLogo>
      <NavList>
        {navLinks.map(({ url, name }) => (
          <NavListItem>
            <MenuLink to={url}>{name}</MenuLink>
          </NavListItem>
        ))}
      </NavList>
      <StyledResumeButton
        href="/resume.pdf"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Resume
      </StyledResumeButton>
    </StyledContainer>
  )
}

export default Header
