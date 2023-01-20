import styled from "styled-components";
import {styleProps} from "../../assets/styles";

export const WrapperTitle = styled.div<{ props: styleProps }>`
font-family:Bebas Neue,system-ui;   
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  margin-bottom: 45px;
  max-height: 100px;
  color:  ${({props}) => props.color };
`