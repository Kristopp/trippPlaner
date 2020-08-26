import React from "react";
import Styled, { keyframes } from "styled-components";
import Plus from "../Assets/pictures/plus.png";


const bounce = keyframes`
 0% {
  transform: translateY(-500px);
  animation-timing-function: ease-in;
  opacity: 0;
}
38% {
  transform: translateY(0);
  animation-timing-function: ease-out;
  opacity: 1;
}
55% {
  transform: translateY(-65px);
  animation-timing-function: ease-in;
}
72% {
  transform: translateY(0);
  animation-timing-function: ease-out;
}
81% {
  transform: translateY(-28px);
  animation-timing-function: ease-in;
}
90% {
  transform: translateY(0);
  animation-timing-function: ease-out;
}
95% {
  transform: translateY(-8px);
  animation-timing-function: ease-in;
}
100% {
  transform: translateY(0);
  animation-timing-function: ease-out;
}
`
const boxShdow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
}
`

const ButtonWrapper = Styled.div`
  height: 100px;
  width: 100px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const AddButtonMain = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: transparent;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.25);
  
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`;

const PlusSign = Styled.img`
 height: 50px;
  width: 50px;
  `;

const AddButton = () => {
  return (
    <ButtonWrapper>
      <AddButtonMain>
        <PlusSign src={Plus}></PlusSign>
      </AddButtonMain>
    </ButtonWrapper>
  );
};

export default AddButton;
