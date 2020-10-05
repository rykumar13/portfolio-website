import React from "react"
import { IconLogo } from "@components/icons"
import styled from "styled-components"
import { navLinks } from "@config"
import { theme, mixins } from "@styles"
import { Link } from "react-scroll"
import Headroom from "react-headroom"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.div`
  ${mixins.flexBetween};
  background-color: ${colors.white};
  height: 80px;
`

const NavList = styled.ol`
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
  ${mixins.smallButton};
  font-size: ${fontSizes.smish};
  margin: 45px 50px 50px 50px;
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
`

const Header = () => {
  return (
    <Headroom>
      <StyledContainer>
        <StyledLogo tabindex="-1">
          <a href="/" aria-label="home">
            <IconLogo />
          </a>
        </StyledLogo>
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
