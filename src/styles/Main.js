import styled from "styled-components"
import mixins from "./mixins"

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;

@media(max-width: 63em) {
  padding-top: 200px;
  padding-bottom: 200px;
}

@media(max-width: 48em) {
  padding-top: 150px;
  padding-bottom: 150px;
}

@media(max-width: 30em) {
  padding-top: 125px;
  padding-bottom: 125px;
}

&.fillHeight {
  padding-top: 0;
  padding-bottom: 0;

  @media(max-width: 63em) {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  @media(max-width: 48em) {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  @media(max-width: 30em) {
    padding-top: 0;
    padding-bottom: 0;
  }
}
`;

export default Main
