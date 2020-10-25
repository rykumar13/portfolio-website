import styled from "styled-components"
import theme from './theme';
const { colors } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 30px;
  width: 100%;
  white-space: nowrap;
  color: ${colors.navy};
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${colors.navy};
    position: relative;
    top: 4px;
    margin-left: 20px;
  }
`

export default Heading
