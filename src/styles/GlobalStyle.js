import { createGlobalStyle } from "styled-components"
import mixins from "./mixins"
import theme from "./theme"
const { colors, fontSizes } = theme

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.bg_greyGreen};
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    @media(max-width: 30em) {
      font-size: ${fontSizes.lg};
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      @media(max-width: 63em) {
        font-size: 70px;
      }
      @media(max-width: 48em) {
        font-size: 60px;
      }
      @media(max-width: 30em) {
        font-size: 50px;
      }
      @media(max-width: 24em) {
        font-size: 40px;
      }
    }

    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      @media(max-width: 63em) {
        font-size: 50px;
      }
      @media(max-width: 48em) {
        font-size: 40px;
      }
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {a
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.navy};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.lightblue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    & > a {
      ${mixins.inlineLink};
    }

    & > code {
      background-color: ${colors.lightNavy};
      color: ${colors.white};
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${colors.green};
        }
      }
    }
  }

  blockquote {
    border-left-color: ${colors.green};
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    --background-color: ${colors.lightestNavy};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  #logo {
    color: ${colors.black};
  }

  .overline {
    color: ${colors.green};
    font-weight: normal;
  }

  .subtitle {
    color: ${colors.green};
    margin: 0 0 20px 0;
    font-weight: normal;
    line-height: 1.5;
    @media(max-width: 63em) {
      font-size: ${fontSizes.sm};
    }
    @media(max-width: 48em) {
      font-size: ${fontSizes.smish};
    }

    a {
      ${mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: ${colors.green};

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }
    a {
      ${mixins.inlineLink};
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

`

export default GlobalStyle
