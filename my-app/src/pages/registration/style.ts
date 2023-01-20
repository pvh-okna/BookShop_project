import styled from "styled-components";
import {styleProps} from "../../assets/styles";

export const WrapperRegistration = styled.div`
  border: 1px solid #A8A8A8;
  width: 26%;
  
  margin: 130px auto;
  background-color:#F7F7F7`
export const WrapperForm= styled.div<{ props: styleProps, formState: boolean }>`

  button {
    width: 50%;
    height: 53px;   
  }

  button:hover {
   cursor: pointer;
    background-color: white;
  }
`
export const BtnSignIn = styled.button<{formState: boolean}>`
  color: ${({formState}) => formState ? 'black' :  '#A8A8A8;'};
  border-bottom: 1px solid ${({formState}) => formState ? 'black;' :  '#A8A8A8;'};
   background-color: #F7F7F7;
  font-family:Bebas Neue,system-ui;
font-size: 20px;

`
export const BtnSignUp = styled.button <{formState: boolean}>`
  font-family:Bebas Neue,system-ui;
  color: ${({formState}) => formState ? '#A8A8A8;' :  'black;'};
  border-bottom: 1px solid ${({formState}) => formState ? '##A8A8A8;' :  'black;'};
  background-color:#F7F7F7;
  font-size: 20px;
`
