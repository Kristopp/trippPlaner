import React, { useState, useEffect, useContext } from "react";
import { useReducer } from "react";
import Styled, { keyframes } from "styled-components";
import demoPic from "../Assets/pictures/demoPicture1.jpg";
import { Context } from "../context/Store";

export const TrippTab = () => {

  const [state, dispatch] = useContext(Context);
  const [loaded, setStateLoaded] = useState(false);
console.log(state)
  return (
    <React.Fragment>
      {state.trippList.map((data) => (
        <CardWrapper key={data._id}>
          <DeleteTabWrapper>
            <DeleteTab
              onClick={() =>
                dispatch({ type: "DELETE_TRIP", payload: data._id })
              }
            ></DeleteTab>
          </DeleteTabWrapper>
          <TitleText name="Title" label="title">
            {data.title}
          </TitleText>
          <TabImg src={data.imgURL}></TabImg>
          {/*  <AddDate name="date" label="date" type="date" onChange={props.onChange} /> */}
        </CardWrapper>
      ))}
    </React.Fragment>
  );
};
export default TrippTab;

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
margin: 60px 10px 0 10px;
border-radius: 5%;
width: 190px;
height: 210px;
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
position: relative;
`;
const TitleText = Styled.p`
display: flex;
justify-content: center;
font-family: "Yeseva One";
font-size: 1.3em;
letter-spacing: 1px;
 color: #041e29;
 width: 120px;
 background-color: transparent;
border: none;
outline: none;
`;
const TabImg = Styled.img`
height: 150px;
width: auto;
object-fit: fill;
text-align: center;
`;

const DeleteTabWrapper = Styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
height: 20px;
`;

const DeleteTab = Styled.button`
width: 15px;
height: 15px;
margin: 10px;
border-radius: 50%;
border: none;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
`;
