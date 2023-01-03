import styled from "styled-components";

export const WrapperHeader = styled.section`
    position: fixed;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  height: 80px;
  z-index: 12;
  @media (max-width: 1050px) {
    flex-wrap: wrap;
    height: 170px;
  }
 &::after{
   content: '';
   display: inline-flex;
   background-color: #e7e7e7;
   height: 2px;
   width: 54rem;
   margin: 0 auto;
 }
  
`