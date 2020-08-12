import React from "react"
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
  margin: 25px 25px 25px 25px;
  list-style-type: none;
`

const NavListItem = styled.li`
  margin: 0 10px;
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
  margin: 50px 50px 50px 50px;
`

const Header = () => {
  return (
    <StyledContainer>
      <StyledName>RK</StyledName>
      <NavList>
        {navLinks.map(({ url, name }) => (
          <NavListItem>
            <MenuLink to={url}>{name}</MenuLink>
          </NavListItem>
        ))}
      </NavList>
      <StyledName>RK</StyledName>
    </StyledContainer>
  )
}

export default Header
