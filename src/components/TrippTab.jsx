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
        songs: action.payload,
      };
    case "FETCH_LIST_FAILURE":
      return {
        ...state,
        hasError: true,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const TrippTab = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [tabsArray, setTabsArray] = useState([1]);

React.useEffect(() => { 
    dispatch({ 
      type: "FETCH_LIST_REQUEST",
    });
    fetch("http://localhost:5000/allTrips")
    .then((res) => { 
      console.log(res)
      if (res.ok) { 
        return res.json();
      } else { 
        throw res;
      }
    })
    .then((resJson) => { 
      console.log(resJson)
      dispatch({ 
        type: "FETCH_LIST_SUCCESS",
        payload: resJson,
      })
    })
    .catch((error) => { 
      console.log(error);
      dispatch({ 
        type: "FETCH_LIST_FAILURE",
      })
    })
  }, []) 

  return tabsArray.map((data, index) => (
    <CardWrapper key={data._id}>
      <TitleText name="Title" label="title" type="text">
        {data.title}
      </TitleText>
      <TabImg src={demoPic} onClick={props.onClick}></TabImg>
      <AddDate name="date" label="date" type="date" onChange={props.onChange} />
      <button></button>
    </CardWrapper>
  ));
};
export default TrippTab
/*     <CardWrapper>
        <TitleText name="title" label="title" type="text" onChange={props.onChange} value={props.data.title}/>
        <TabImg src={demoPic} onClick={props.onClick}></TabImg>
        <AddDate name="date" label="date" type="date" onChange={props.onChange} value={props.data.date}/>
      </CardWrapper> */

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
width: 150px;
height: 190px;
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

`;
const TitleText = Styled.p`
font-family: "Yeseva One";
font-size: 1.3em;
letter-spacing: 1px;
 color: #041e29;
 margin: 0px;
 width: 120px;
 background-color: transparent;
border: none;
outline: none;
`;
const TabImg = Styled.img`
border: 1px solid black;
margin: 10px;
width: 130px;
height: 90px;
`;
const AddDate = Styled.input`
color: #041e29;
width: 100px;
margin: 0px;
font-family: "Roboto";
font-size: 1.1em;
letter-spacing: 1px;
background-color: transparent;
border: none;
outline: none;
`;
