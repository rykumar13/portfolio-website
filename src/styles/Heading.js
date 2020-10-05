import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 30px;
  width: 100%;
  white-space: nowrap;
`;

export default Heading;
