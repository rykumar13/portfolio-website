import React from 'react';
import PropTypes from 'prop-types';
import { FormattedIcon } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;

const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
`;

const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;

const StyledGitHubLink = styled.a`
  color: ${colors.cream_text};
  padding: 10px;
`;

 const Footer = () => {
  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  <FormattedIcon name={name} />
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledMetadata tabindex="-1">
        <StyledGitHubLink
          href="https://github.com/rykumar13/portfolio-website"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <div>Designed &amp; Built by Rajiv Kumar</div>
        </StyledGitHubLink>
      </StyledMetadata>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
