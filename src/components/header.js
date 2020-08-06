import React from "react";
import styled from "styled-components";
import { navLinks, colors } from '@config';

const StyledContainer = styled.div`
  background-color: #020c1b;
  display: flex;
  border: 1px solid #1C6EA4;
  justify-content: space-around;
`
const NavList = styled.ol`
  display: flex;
  border: 1px solid #1C6EA4;
  margin: 25px 25px 25px 25px;

`
const NavListItem = styled.li`
  color: #64ffda;
  display: flex;
  border: 1px solid #1C6EA4;
  margin: 10px 10px 10px 10px
`
const MenuLink = styled.a``

const StyledName = styled.h3`
  color: #64ffda;
  display: flex;
  border: 1px solid #1C6EA4;
  margin: 10px 10px 10px 10px
`

function Header() {
  return (
    <StyledContainer>
      <StyledName>
        Rajiv Kumar
      </StyledName>
          <NavList>
            {navLinks.map(({ url, name }) => (
              <NavListItem>
                <MenuLink to={url}>{name}</MenuLink>
              </NavListItem>
            ))}
          </NavList>
    </StyledContainer>
  )
}

export default Header
