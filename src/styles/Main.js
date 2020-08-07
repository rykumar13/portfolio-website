import styled from 'styled-components';
import mixins from './mixins';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;
`;

export default Main;
