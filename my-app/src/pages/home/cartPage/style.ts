import styled from "styled-components";
import {styleProps} from "../../../assets/styles";

export const Wrapper =styled.div`
    `
export const Amount = styled.div<{ props: styleProps }>`
  display: flex;
  flex-direction: row;
  width: 530px;
  margin-left: auto;
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.08em;
  margin-top: 60px;
  line-height: 32px;
  color:${({props}) => props.color } ;
`
export const BtnChek=styled.button<{ props: styleProps }>`
  width: 14%;
  height: 56px;
  color:${({props}) => props.background } ;
  background-color: ${({props}) => props.color } ;;
  border: none;
  font-family: Bebas Neue, sans-serif;
  font-size: 24px;
  margin:27px 7px 20px 24px;
  position: relative;
  left: 60rem;
  &:hover {
    background-color: #5B5A62;
  }

`