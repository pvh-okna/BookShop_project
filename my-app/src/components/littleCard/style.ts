import styled from "styled-components";
import {styleProps} from "../../assets/styles";

export const WrapperLittleCard =styled.div`
  display: flex;
  flex-wrap: wrap;
  &::after{
    content: '';
    display: inline-flex;
    position: relative;
    right: 184px;
    background-color: #e7e7e7;
    height: 2px;
    width: 100%;
    margin: 73px 147px -1px 184px;
  }
  margin: 15px 0 15px 333px;
  
`

export const LittleCardBlock = styled.div<{ props: styleProps }>`
 width: 100%;
  display: flex;
  flex-direction: row;
  height: 175px;
  color:${({props}) => props.color } ;
  
`
export const LittleCardImg = styled.div<{ image: string }>`
  background-image: url(${({image}) => image});
  width: 200px;
  height: 233px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    transition: 1s;
    box-shadow: 0 5px 39px 9px rgba(80, 114, 197, 0.41);
    border-radius: 10px;
  }
    `
export const LittleCardTitle = styled.div<{ props: styleProps }>`
    display: flex;
  flex-direction: row;
  width: 461px;
  margin: 20px 15px;
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  
`
export const LittleCardPrice = styled.div<{ props: styleProps }>`
    margin: 20px 15px;
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`
export const BtnDelete = styled.div<{ props: styleProps }>`
    
    position: absolute;
    color:${({props}) => props.color } ;
    right: 363px;
    width: 24px;
    height: 24px;
    opacity: 0.2;
    cursor: pointer;
    transition: opacity ease 0.5s;

    &:hover {
      opacity: 1;
    }
  
  &::before,
 &::after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 3px;
    background: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
    `