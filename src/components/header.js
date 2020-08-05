import React from "react";
import styled from "styled-components";
import { navLinks, colors } from '@config';
import { mixins } from '@styles';

const Nav = styled.div`
  background-color: #0a192f;
  border-bottom: 1px solid rgba(0, 0, 0, 0.9975);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
`

const Sidebar = styled.aside`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.lightNavy};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
`

const NavLinks = styled.nav`
  ${mixins.flexBetween};
  color: #0a192f;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`

const NavListItem = styled.li`
  color: #64ffda;
  margin: 0 auto 20px;
  position: relative;
`

const MenuLink = styled.a`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`

function Header() {
  return (
    <Nav>
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks.map(({ url, name }) => (
              <NavListItem>
                <MenuLink to={url}>{name}</MenuLink>
              </NavListItem>
            ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </Nav>
  )
}

export default Header
