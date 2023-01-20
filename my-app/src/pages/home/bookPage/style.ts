import styled from "styled-components";
import {COLORS, styleProps} from "../../../assets/styles";

export const WrapperBookPage = styled.section`
  margin: 20px auto 60px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  max-width: 1700px;`
export const WrapperBookBlock = styled.div`
display: flex;
flex-wrap: wrap;
  width: 754px;
`
export const BookImg = styled.img`

`
export const WrapperBookImg = styled.div`
  background-color:#D7E4FD;
  width: 40%;
`
export const BookPrice = styled.div<{ props: styleProps }>`
font-family: Bebas Neue, cursive;
  font-weight: 400;
  font-size: 35px;
  margin-bottom: 5px;
  color:${({props}) => props.color } ;
`
export const BtnShop = styled.button<{ props: styleProps }>`
width: 41%;
height: 56px;
color: white;
background-color: #313037;
border: none;
  font-family: Bebas Neue, sans-serif;
  font-size: 24px;
margin: 0 72px 0 auto;
  position: relative;
  top:-115px;
  &:hover{
    background-color: #5B5A62;
  }
`

export const BtnPreview= styled.button`
  width:100%;
  height: 56px;
  background-color:white;
  border: 1px solid #313037;
  margin: 0 72px 0 373px;
  position: relative;
  top:-115px;
  font-family: Inter,sans-serif;  
  font-size: 18px;
  color: #313037;
`
export const BookDescription = styled.div <{ props: styleProps }>`
  margin-top:-39px ;
  width: 91%;
  color:  ${({props}) => props.color };
  p{
    color:  ${({props}) => props.color };
  }
    p::after{
      content: '';
      display: inline-flex;
      background-color:#E5E5E5;
      height: 2px;
      width: 100%;
      position: relative;
    }
`
export const BookInform = styled.div`
height: 250px;
width: 40%;
font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin: 15px auto;
  &::before{
    content: '';
    display: inline-flex;
    background-color:#E5E5E5;
    height: 2px;
    width: 100%;
    position: relative;
    top:-25px;
  }
  
`
export const BookParamts= styled.div<{ props: styleProps }>`
  width: 40%;
  color: #A8A8A8;
`
export const BookValue= styled.div <{ props: styleProps }>`
width: 60%;
  padding: 0;
 color: ${({props}) => props.color };
`
export const WrapperBookParamets=styled.div`
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  p{
    margin:5px;
    
  }
    `

export const ArrowLeft  = styled.div<{ props: styleProps }>`
 
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
  left:333px;
  margin: 25px 0;
  cursor: pointer;
  color:${({props}) => props.color};
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 7px;
  }
  &::before {
    width: 25px;
    height: 2px;
    bottom: 10px;
    background: currentColor;
  }`