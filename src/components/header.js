import React from "react"
import { IconLogo } from "@components/icons"
import styled from "styled-components"
import { navLinks } from "@config"
import { theme, mixins } from "@styles"
import { Link } from "gatsby"
import Headroom from "react-headroom"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  // background-color: ${colors.white};
  background-color: ${colors.black};
  height: 80px;
  @media (max-width: 63em) {
    padding: 0 40px;
  }
  @media (max-width: 48em) {
    padding: 0 25px;
  }
`

const NavList = styled.ol`
color: ${colors.white};
  ${mixins.flexBetween};
  list-style-type: none;
  margin-top: 15px;
`

const NavListItem = styled.li`
  margin: 35px 0px 35px 35px;
  position: relative;
  font-size: ${fontSizes.smish};
`

const MenuLink = styled.a`
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.lg};
`

const StyledResumeButton = styled.a`
  display: flex;
  align-items: center;
  ${mixins.smallButton};
  font-size: ${fontSizes.smish};
  margin: 40px 50px 50px 50px;
  @media (max-width: 48em) {
    margin: 40px -10px 50px 50px;
  }
`

const StyledLogo = styled.div`
  margin: 45px 50px 50px 50px;
  a {
    display: block;
    width: 52px;
    height: 52px;
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
  @media (max-width: 48em) {
    margin: 45px 50px 50px 50px;
    margin-left: -15px;
  }
`

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 48em) {
    display: none;
  }
`
// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = () => {
  return (
    <Headroom>
      <StyledContainer id="home">
        <StyledLogo tabindex="-1">
          <Link to="/#home" aria-label="home">
            <IconLogo />
          </Link>
        </StyledLogo>
        <StyledLink>
          <NavList>
            {navLinks.map(({ url, name }) => (
              <NavListItem>
                <MenuLink>
                  <Link
                    activeClass="active"
                    to={url}
                    spy={true}
                    smooth={true}
                    duration={700}
                  >
                    {name}
                  </Link>
                </MenuLink>
              </NavListItem>
            ))}
          </NavList>
        </StyledLink>
        <StyledResumeButton
          href="/resume.pdf"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Resume
        </StyledResumeButton>
      </StyledContainer>
    </Headroom>
  )
}

export default Header
