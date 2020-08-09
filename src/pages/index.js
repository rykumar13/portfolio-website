import React from "react";
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Main } from '@styles';
import styled from 'styled-components';
import { Layout, Hero, About } from '@components';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({data}) => (
  <Layout>
    <StyledMainContainer className="fillHeight">
    <Hero data={data.hero.edges} />
    <About data={data.about.edges} />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) 
    {
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

    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) 
    {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }

  }`;