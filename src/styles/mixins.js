import { css } from "styled-components"
import theme from "./theme"
const { colors, fontSizes, fonts } = theme

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    align-items: flex-end;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.cream_text};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      color: ${colors.green};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.green} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      background-color: ${colors.cream_text};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    background-color: ${colors.navy};
    color: ${colors.cream_text};
    border: 1px solid ${colors.black};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.navy_text};
      color: ${colors.green};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
  color: ${colors.cream_text};
    background-color: ${colors.navy};
    border: 1px solid ${colors.black};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.navy_text};
      color: ${colors.green};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    @media (max-width: 63em) {
      padding: 0 100px;
    }

    @media (max-width: 48em) {
      padding: 0 50px;
    }

    @media (max-width: 30em) {
      padding: 0 25px;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.shadowNavy};
    transition: ${theme.transition};
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowNavy};
    }
  `,

  fancyList: css`
    color: ${colors.navy};
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: ${fonts.Calibre};
    font-size: ${fontSizes.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${colors.navy};
      }
    }
  `,
}

export default mixins
