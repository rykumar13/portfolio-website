import React from 'react';
import { email } from '@config';
import { Side } from '@components';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.cream_text};
  }
`;

const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

const Email = () => (
  <Side orientation="right">
    <StyledLinkWrapper>
      <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
    </StyledLinkWrapper>
  </Side>
);

export default Email;