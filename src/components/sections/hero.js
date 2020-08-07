import React from "react"
import { email } from "@config"
import styled from "styled-components"
import { mixins, Section } from "@styles"
import PropTypes from 'prop-types';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`
const StyledOverline = styled.h1`
  margin: 0 0 20px 3px;
  font-weight: normal;
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node

  const one = () => (
    <StyledOverline>
      {frontmatter.title}
    </StyledOverline>
  );
  const two = () => (
    <StyledTitle>
      {frontmatter.name}.
    </StyledTitle>
  );
  const three = () => (
    <StyledSubtitle>
      {frontmatter.subtitle}
    </StyledSubtitle>
  );

  const four = () => (
    <StyledDescription
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div>
      <StyledEmailLink href={`mailto:${email}`}>Get In Touch</StyledEmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

    return (
        <StyledContainer>
            {items}
        </StyledContainer>
    );
};

Hero.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default Hero;
