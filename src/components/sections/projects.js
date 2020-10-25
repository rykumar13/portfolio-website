import React, { useRef } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { FormattedIcon } from "@components/icons"
import styled from "styled-components"
import { theme, mixins, Section } from "@styles"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled(Section)`
  flex-direction: column;
  align-items: flex-start;
`

const StyledGrid = styled.div`
  margin-top: 50px;
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
  }
`

const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.navy};
  color: ${colors.cream_text};
  &:hover,
  &:focus {
  }
`

const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`

const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`

const StyledFolder = styled.div`
  color: ${colors.cream_text};
  svg {
    width: 40px;
    height: 40px;
  }
`

const StyledProjectLinks = styled.div`
  margin-right: -10px;
`

const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`

const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
`

const StyledProjectDescription = styled.div`
  font-size: 17px;
  font-family: ${fonts.Calibre};
  a {
    ${mixins.inlineLink};
  }
`

const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  font-family: ${fonts.Calibre};
  li {
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const ProjectsHeading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px;
  width: 100%;
  white-space: nowrap;
`

const Projects = ({ data }) => {
  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  const GRID_LIMIT = 6
  const projects = data.filter(({ node }) => node)
  const projectsToShow = projects

  return (
    <StyledContainer id="projects">
      <ProjectsHeading ref={revealTitle}>Project Portfolio</ProjectsHeading>
      <StyledGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { github, external, title, tech } = frontmatter
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                  >
                    <StyledProjectInner>
                      <header>
                        <StyledProjectHeader>
                          <StyledFolder>
                            <FormattedIcon name="Folder" />
                          </StyledFolder>
                          <StyledProjectLinks>
                            {github && (
                              <StyledIconLink
                                href={github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="GitHub Link"
                              >
                                <FormattedIcon name="GitHub" />
                              </StyledIconLink>
                            )}
                            {external && (
                              <StyledIconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link"
                              >
                                <FormattedIcon name="External" />
                              </StyledIconLink>
                            )}
                          </StyledProjectLinks>
                        </StyledProjectHeader>
                        <StyledProjectName>{title}</StyledProjectName>
                        <StyledProjectDescription
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      </header>
                      <footer>
                        {tech && (
                          <StyledTechList>
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </StyledTechList>
                        )}
                      </footer>
                    </StyledProjectInner>
                  </StyledProject>
                </CSSTransition>
              )
            })}
        </TransitionGroup>
      </StyledGrid>
    </StyledContainer>
  )
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Projects
