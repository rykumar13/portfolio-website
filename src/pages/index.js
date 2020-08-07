import React from "react";
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Main } from '@styles';
import styled from 'styled-components';
import { Layout, Hero } from '@components';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({data}) => (
  <Layout>
    <StyledMainContainer className="fillHeight">
    <Hero data={data.hero.edges} />
    </StyledMainContainer>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
  }`;