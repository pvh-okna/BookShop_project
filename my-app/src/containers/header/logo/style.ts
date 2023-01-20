import styled from "styled-components";
import {styleProps} from "../../../assets/styles";

export const Wrapper = styled.div<{ props: styleProps }>`
  display: inline-flex;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 64px;
  color: ${({props}) => props.color};
  width: 158px;
  height: 68px;
  margin: 0 35px 0 20rem;
  cursor: pointer;
`