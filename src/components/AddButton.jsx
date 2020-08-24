import React from "react";
import Styled from "styled-components";

const ButtonWrapper = Styled.div`
position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddButtonMain = Styled.button`
width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
  &:hover { 
    transition: 1s ease-in-out;
  background: #4F95DA;
  }
`;
const AnimationBorder = Styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
  &:hover { 
    stroke-dashoffset: -480;
  }
`;

const AddButton = () => {
  return (
    <ButtonWrapper>
      <AddButtonMain>
        <AnimationBorder width="180px" height="60px" viewBox="0 0 180 60">
          <polyline points="179,1 179,59 1,59 1,1 179,1" />
        </AnimationBorder>
      </AddButtonMain>
    </ButtonWrapper>
  );
};

export default AddButton;
