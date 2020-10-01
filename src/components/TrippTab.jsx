import React, { useState, useEffect, useContext } from "react";
import { useReducer } from "react";
import Styled, { keyframes } from "styled-components";
import demoPic from "../Assets/pictures/demoPicture1.jpg";
import { FormContext } from "../context/Provider";
import reducer from "../context/reducer";

const TrippTab = (props) => {
 /* const { state } = useContext(FormContext); */
 const context = useContext(FormContext)
  const [tabsArray, setTabsArray] = useState([]);
  const [state, dispatch] = useReducer(reducer, FormContext);
  const [dataLoaded, setLoaded] = useState(false);
  //i use useEffect hook to load data
  console.log(state)
/* useEffect(() => {
    setTabsArray(state);
  }, [tabsArray]);  */
  return tabsArray.map((e, index) => (
    <CardWrapper key={e._id}>
      {/**no need input */}
      <TitleText
        name="Title"
        label="title"
        type="text"
        onChange={props.onChange}
        value={e.category}
      />
      <TabImg src={demoPic} onClick={props.onClick}></TabImg>
      <AddDate
        name="date"
        label="date"
        type="date"
        onChange={props.onChange}
        value={"hello"}
      />
      <button onClick={() => dispatch({type: "REMOVE_TAB"})}></button>
    </CardWrapper>
  ));
};

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
const TitleText = Styled.input`
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

export default TrippTab;
