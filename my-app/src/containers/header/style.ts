import styled from "styled-components";
import {styleProps} from "../../assets/styles";

export const WrapperHeader = styled.section<{ props: styleProps }>`
    position: fixed;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  height: 80px;
  z-index: 12;
  background-color: ${({props}) => props.background };
  @media (max-width: 1050px) {
    flex-wrap: wrap;
    height: 170px;
  }
 &::after{
   content: '';
   display: inline-flex;
   background-color: #e7e7e7;
   height: 2px;
   width: 58rem;
   margin: 0 321px;
 }
  
`