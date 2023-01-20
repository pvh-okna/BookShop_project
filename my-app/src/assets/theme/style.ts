import styled from 'styled-components';
import { COLORS } from '../styles';


export const CheckBoxWrapper = styled.div`
  width: 7%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 -5px;
`

export const IconWrap = styled.div<{strokes?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  cursor: pointer;
  color: black;
  
  & svg:nth-child(n) {
    padding-top: 1px;
    margin-top: 2px;
    stroke: ${props => props.strokes ? `${COLORS.lightContext}` : `${COLORS.primary2}`};
  } 
  &:first-of-type {
    border-right: 1px solid ${COLORS.lightContext};
  }
`
