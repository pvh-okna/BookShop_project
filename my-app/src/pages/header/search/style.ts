import styled from "styled-components";

export const WrapperSearch = styled.section`
  display: flex;
  width: 32%;
  position: relative;
  margin: 0 45px;
  @media (max-width: 1050px) {
    display: none;
  }
`
export const InputSearch = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #bbbbbb;
  
  padding: 0 120px 0 10px;
  font-size: 20px;
  color: black;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: auto;
  }
 
`
export const IconSearch = styled.span`
  box-sizing: border-box;
  position: relative;
  right: 27px;
  top: 14px;
  cursor: pointer;
  display: block;
  transform: scale(var(--ggs,1));
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-radius: 100%;
  margin-left: -4px;
  margin-top: -4px
}
&::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
  width: 2px;
  height: 8px;
  background: currentColor;
  transform: rotate(-45deg);
  top: 10px;
  left: 12px    
`