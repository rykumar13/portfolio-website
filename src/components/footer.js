import React from "react"
import styled from "styled-components"
import { mixins } from "@styles"

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
  border: 1px solid #1C6EA4;
`
function Footer() {
  return <StyledContainer>This is where the footer goes</StyledContainer>
}

export default Footer
