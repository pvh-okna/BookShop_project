import styled from "styled-components";

export const IconFavorite = styled.span`
  &,
  &::after {
    border: 2px solid;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    width: 10px;
    height: 8px;
    border-bottom: 0;
  }
  
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    transform:
            translate(
                    calc(-10px / 2 * var(--ggs,1)),
                    calc(-6px / 2 * var(--ggs,1))
            )
            rotate(-45deg)
            scale(var(--ggs,1));
    display: block;
  
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
  }
  &::after {
    right: -9px;
    transform: rotate(90deg);
    top: 5px;
  }
  &::before {
    width: 11px;
    height: 11px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    left: -2px;
    top: 3px;
  }
`
export const IconShoppingBag = styled.span`
  transform: scale(var(--ggs,1));
  cursor: pointer;
&,
&::after {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
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
export const IconUser = styled.span`
  cursor: pointer;
  display: inline-block;
  transform: scale(var(--ggs,1));
  box-sizing: border-box;
  width: 12px;
  height: 18px;

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
  width: 100px;
`