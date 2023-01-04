import styled from "styled-components";

export const WrapperRegistration = styled.div`
border: 2px solid black;
width: 100%;
height: 500px;
margin: 150px`
export const WrapperForm= styled.div``
export const FormTitle = styled.div``
export const ButtonSignIn = styled.button<{formState: boolean}>`
 border-bottom-right-radius: 20px;
  background: ${({formState}) => formState ? 'rgb(79, 13, 100)' : '#bbbbbb;' };
  color: ${({formState}) => formState ?  '#bbbbbb;' : 'black'};
  cursor: ${({formState}) => formState ?  'default' : 'pointer'};
  &:hover{
    color: ${({formState}) => formState ? "none" :  "#ffe311;"};
  }`
export const ButtonSignUp = styled.button<{formState: boolean}>`
  border-bottom-left-radius: 20px;
  background: ${({formState}) => formState ?  '#bbbbbb;' : 'rgb(79, 13, 100)'};
  color: ${({formState}) => formState ? 'black' :  '#bbbbbb;'};
  cursor: ${({formState}) => formState ? 'pointer' : 'default'};
  &:hover{
    color: ${({formState}) => formState ? "#ffe311;" :  "none"};
  }`

export const ButtonsChangeFormBlock = styled.button`
    `
