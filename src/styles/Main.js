import styled from 'styled-components';
import mixins from './mixins';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default Main;
