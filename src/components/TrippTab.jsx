import React from "react";
import Styled, { keyframes } from "styled-components";
import demoPic from "../Assets/pictures/demoPicture1.jpg";

const TrippTab = (props) => {
  return (
    <CardWrapper>
      <TitleText>Bulgaria</TitleText>
      <TabImg src={demoPic}></TabImg>
      <MainText>dd/mm/yyyy</MainText>
    </CardWrapper>
  );
};

const boxShadow = keyframes`
   0% {
    transform: translateZ(0);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
  }
  100% {
    transform: translatey(1px);
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.65);
  }
}
`;

const CardWrapper = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #0f2027; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
                                  45deg,
                                  #00cdac,
                                  #02aab0
                                );
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
margin: 20px;
border-radius: 5%;
width: 150px;
height: 190px;
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

`;
const TitleText = Styled.h1`
 font: 1.5em 'Quicksand', sans-serif;

 color: #041e29;
 margin: 0px;
`;
const TabImg = Styled.img`
border: 1px solid black;
margin: 10px;
width: 130px;
height: 90px
`;
const MainText = Styled.p`
font: 1.2em 'Nunito', sans-serif;
color: #041e29;
margin: 0px;
`;

export default TrippTab;
