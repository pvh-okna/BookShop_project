import styled from "styled-components";
import {styleProps} from "../../../assets/styles";

export const WrapperCards = styled.section`
  margin: 20px auto 50px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
  max-width: 1700px;
`
export const TitleWrapper = styled.div <{ props: styleProps }>`
  font-family:Bebas Neue,system-ui;
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;

  max-height: 100px;
  margin: 30px auto 0;
  padding: 0 50px;
  width: 63%;
  max-width: 1700px;
  color:  ${({props}) => props.color };

    `
