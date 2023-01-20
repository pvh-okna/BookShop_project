import styled from "styled-components";
import {styleProps} from "../../../assets/styles";

export const IconShoppingBag = styled.span<{ props: styleProps }>`
  transform: scale(var(--ggs,1));
  cursor: pointer;
 color:${({props}) => props.color };
&,
&::after {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 19px;
  height: 20px;
  border: 2px solid;
  border-radius: 3px;
}
&::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 6px;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  border-top: 0;
  top: 2px;
  left: 3px;
}
`
export const IconUser = styled.span<{ props: styleProps }>`
  cursor: pointer;
  display: inline-block;
  transform: scale(var(--ggs,1));
  box-sizing: border-box;
  width: 12px;
  height: 18px;
 margin-right: 12px;
 color:${({props}) => props.color } ;

&::after,
&::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border: 2px solid;
}
&::before {
  width: 8px;
  height: 8px;
  border-radius: 30px;
  top: 0;
  left: 2px;
}
&::after {
  width: 12px;
  height: 9px;
  border-bottom: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  top: 9px;
}

`
export const WrapperMenu = styled.div`
display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 57px;

 
 `