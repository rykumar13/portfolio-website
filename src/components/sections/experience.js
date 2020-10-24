import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, mixins, Section, Heading } from "@styles"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled(Section)`
  color: ${colors.cream_text};
  position: relative;
  max-width: 700px;
`

const StyledTabs = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  @media (max-width: 38em) {
    display: block;
  }
`
const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 38em) {
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  }
  @media (max-width: 30em) {
    width: calc(100% + 50px);
    margin-left: -40px;
  }

  li {
    &:first-of-type {
      @media (max-width: 38em) {
        margin-left: 50px;
      }
      @media (max-width: 30em) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 38em) {
        padding-right: 50px;
      }
      @media (max-width: 30em) {
        padding-right: 25px;
      }
    }
  }
`

const StyledTabButton = styled.button`
  ${mixins.link};
  color: ${colors.cream_text};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 1px solid ${colors.black};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${props => (props.isActive ? colors.cream_text : colors.black)};
  @media (max-width: 48em) {
    padding: 0 15px 2px;
  }
  @media (max-width: 38em) {
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.lightestNavy};
    min-width: 120px;
  }
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`
const StyledHighlight = styled.span`
  display: block;
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props =>
      props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0}px
  );
  @media (max-width: 38em) {
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props =>
        props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0}px
    );
    margin-left: 50px;
  }
  @media (max-width: 30em) {
    margin-left: 25px;
  }
`

const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  @media (max-width: 48em) {
    padding-left: 20px;
  }
  @media (max-width: 38em) {
    padding-left: 0;
  }
  ul {
    ${mixins.fancyList};
    color: ${colors.cream_text};
  }
  a {
    ${mixins.inlineLink};
  }
`

const StyledJobTitle = styled.h4`
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
`

const StyledCompany = styled.span``
const StyledJobDetails = styled.h5`
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.smish};
  font-weight: normal;
  letter-spacing: 0.05em;
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`

const Experience = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([])

  const revealContainer = useRef(null)

  const onKeyPressed = e => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault()
      if (e.keyCode === 40) {
        // Move down
        setTabFocus(tabFocus + 1)
      } else if (e.keyCode === 38) {
        // Move up
        setTabFocus(tabFocus - 1)
      }
    }
  }

  return (
    <StyledContainer id="experience" ref={revealContainer}>
      <Heading>Where I&apos;ve Worked</Heading>
      <StyledTabs>
        <StyledTabList
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={e => onKeyPressed(e)}
        >
          {data &&
            data.map(({ node }, i) => {
              const { company } = node.frontmatter
              return (
                <li key={i}>
                  <StyledTabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                    tabIndex={activeTabId === i ? "0" : "-1"}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                </li>
              )
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        {data &&
          data.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { title, url, company, range } = frontmatter
            return (
              <StyledTabContent
                key={i}
                isActive={activeTabId === i}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                tabIndex={activeTabId === i ? "0" : "-1"}
                hidden={activeTabId !== i}
              >
                <StyledJobTitle>
                  <span>{title}</span>
                  <StyledCompany>
                    <span>&nbsp;@&nbsp;</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {company}
                    </a>
                  </StyledCompany>
                </StyledJobTitle>
                <StyledJobDetails>
                  <span>{range}</span>
                </StyledJobDetails>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledTabContent>
            )
          })}
      </StyledTabs>
    </StyledContainer>
  )
}

Experience.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Experience
