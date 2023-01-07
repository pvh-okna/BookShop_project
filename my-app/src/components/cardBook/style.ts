import styled from "styled-components";


export const WrapperCard = styled.div`
  position: relative;
  margin: 10px;
  transition: 1s;
  &:hover {
    transition: 1s;
    cursor: pointer;
    box-shadow: 0 5px 39px 9px rgba(80, 114, 197, 0.41);
    border-radius: 10px;
  }
`

export const CardBlock = styled.div`
  font-family: Bebas Neue, sans-serif;
  width: 250px;
  height: 430px;
  overflow: hidden;
  background-color:#D7E4FD;
  font-style: normal;
`

export const CardImg = styled.div<{ image: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: space-between;
`
export const CardInfo = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
height: 190px;
  background-color: white; 
  
`

export const CardTitle = styled.p`
  font-family: Bebas Neue, sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  min-height: 38px;
  font-size: 18px;
  
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 105px;
  & span{
    font-weight: bold;
  }
  & p {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    color: #A8A8A8;
  }
  
`

