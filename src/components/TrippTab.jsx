import React, { useState, useContext } from "react";
import Styled, { keyframes } from "styled-components";
import { Context } from "../context/Store";
import axios from "axios";

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
height: 250px;
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
position: relative;
`;
const HeaderWrapper = Styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 30px;
margin: 5px;
`;

const TitleText = Styled.p`
font-family: "Yeseva One";
font-size: 1.3em;
letter-spacing: 1px;
text-align: center;
 color: #041e29;
 width: 120px;
 background-color: transparent;
border: none;
outline: none;
`;
const ImgWrapper = Styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
height: 150px;
width: 180px;

`;
const TabImg = Styled.img`
display: flex;
justify-content: center;
height: 100%;
width: auto;
object-fit: fill;
text-align: center;
`;

const DeleteTabWrapper = Styled.div`
display: flex;
justify-content: flex-end;
`;

const DeleteTab = Styled.button`
width: 12px;
height: 12px;
margin: 5px 0 0 40px;
border-radius: 50%;
border: none;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
`;


export const TrippTab = () => {
  const [state, dispatch, loadPage, setLoadPage] = useContext(Context);
  /* dispatch({ type: "DELETE_TRIP", payload: data._id }
   */
  const mongoDbDeleteHandler = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:5000/allTrips/delete/${_id}`)
      .then((res) => {
        dispatch({type: "DELETE_TRIP", payload: _id})
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      {state.trippList.map((data) => (
        <CardWrapper key={data._id}>
          <HeaderWrapper>
            <TitleText name="Title" label="title">
              {data.title}
            </TitleText>
            <DeleteTabWrapper>
              <DeleteTab
                onClick={() => mongoDbDeleteHandler(data._id)}
              ></DeleteTab>
            </DeleteTabWrapper>
          </HeaderWrapper>
          <ImgWrapper>
            <TabImg src={data.secureImgUrl}></TabImg>
          </ImgWrapper>
          {/*  <AddDate name="date" label="date" type="date" onChange={props.onChange} /> */}
        </CardWrapper>
      ))}
    </React.Fragment>
  );
};
export default TrippTab;

