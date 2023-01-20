import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle<{ props: styleProps }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    border: none;
    cursor: pointer;
  }
  body {
   background-color: ${({props}) => props.background }!important;
   font-family: 'Rubik', sans-serif;
    
  }
  
`
export type styleProps = {
    background: string,
    color?: string,
}

export const COLORS = {
    primary2: '#917CFF',
    secondary: '#313037',
    blackBg: '#26252a',
    darkBg: '#242426',
    lightContext: '#313037',
    whiteContext: '#FFFFFF',

};
