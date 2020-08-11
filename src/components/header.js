import React from "react";
import styled from "styled-components";
import { navLinks, colors } from '@config';
import { theme, mixins } from '@styles';

const StyledContainer = styled.div`
  background-color: ${colors.navy};
  ${mixins.flexBetween};
`;

const NavList = styled.ol`
  ${mixins.flexBetween};
  margin: 25px 25px 25px 25px;
`;

const NavListItem = styled.li`
  color: #64ffda;
  margin: 0px 0px 0px 50px
`;

const MenuLink = styled.a``

const StyledName = styled.h3`
  color: #64ffda;
  ${mixins.flexCenter};
  margin: 0px 0px 0px 25px;
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledName>
        RK
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

export default Header;
