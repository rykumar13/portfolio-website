import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;

  &:before {
    margin-right: 10px;
    font-weight: normal;
    color: ${colors.green};
    position: relative;
    bottom: 4px;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${colors.black};
    position: relative;
    //top: -5px;
    margin-left: 20px;
  }
`;

export default Heading;
