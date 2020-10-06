import React, { useState, useEffect, useContext } from "react";
import Styled, { keyframes } from "styled-components";
import demoPic from "../Assets/pictures/demoPicture1.jpg";

const initialState = {
  trippList: [],
  isfetching: false,
  hasError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LIST_REQUEST":
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };
    case "FETCH_LIST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        trippList: action.payload,
      };
    case "FETCH_LIST_FAILURE":
      return {
        ...state,
        hasError: true,
        isFetching: false,
      };
    case "ADD_NEW_TRIPP":

    case "DELETE_TRIP":
      let filter = state.trippList.filter((item) => {
        return item._id !== action.payload;
      });
      return {
        ...state,
        trippList: filter,
      };
    default:
      return state;
  }
};

export const TrippTab = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [loaded, setStateLoaded] = useState(false);

  console.log(state);
  React.useEffect(() => {
    dispatch({
      type: "FETCH_LIST_REQUEST",
    });
    fetch("http://localhost:5000/allTrips")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((resJson) => {
        dispatch({
          type: "FETCH_LIST_SUCCESS",
          payload: resJson,
        });
        setStateLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "FETCH_LIST_FAILURE",
        });
      });
  }, []);

  return state.trippList.map((data) => (
    <CardWrapper key={data._id}>
      <DeleteTabWrapper>
        <DeleteTab
          onClick={() => dispatch({ type: "DELETE_TRIP", payload: data._id })}
        ></DeleteTab>
      </DeleteTabWrapper>
      <TitleText name="Title" label="title" type="text">
        {data.title}
      </TitleText>
      <TabImg src={demoPic}></TabImg>
      {/*  <AddDate name="date" label="date" type="date" onChange={props.onChange} /> */}
    </CardWrapper>
  ));
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
margin: 60px 10px 0 10px;
border-radius: 5%;
width: 270px;
height: 190px;
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

`;
const TitleText = Styled.p`
display: flex;
align-items: center;
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
border: 1px solid black;
margin: 10px;
width: 170px;
height: 90px;
`;
const AddDate = Styled.input`
color: #041e29;
width: 200dpx;
margin: px;
font-size: 1em;
letter-spacing: 5px;
background-color: transparent;
border: none;
outline: none;
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
