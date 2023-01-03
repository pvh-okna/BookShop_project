import styled from "styled-components";

export const WrapperFooter = styled.footer`
  display: inline-flex;
 flex-wrap:wrap ;
  width: 100%;
  height: 50px;
  margin: 0 20rem;
  &::before{
    content: '';
    display: inline-flex;
    background-color: #e7e7e7;
    height: 2px;
    width: 54rem;
    margin: 0 ;
  }
`

export const YearFooter  = styled.div`
  width: 50%;
color: #A8A8A8;
`

export const RightsFooter = styled.div`
  width: 50%;
color:#A8A8A8;
`

