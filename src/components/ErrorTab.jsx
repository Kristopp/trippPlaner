import { set } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import Styled, { keyframes } from "styled-components";
import { Context } from "../context/Store";

const ErrorContainer = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-direction: column;
width: 100%;
height: 20px;

`;
const ErrorTabStyled = Styled.div`
border-radius: 10px;
color: #00cdac;
background-color: #0f2027;
width: 170px;
z-index: 5;
letter-spacing: 3px;
text-align: center;
color: #00cdac;
`;

const ErrorTab = () => {
  const [state, dispatch, toggleRegModal, setRegModal] = useContext(Context);

  function isEmpty(str) {
    return !str || 0 === str.length;
  }

/*   const checkString = (state.error) => {
    if (isEmpty(state.error)) {
      return null;
    }
    if(state.error.name === "email")
      return <ErrorTab>{state.error.email}</ErrorTab>;
  } 
  if(key === "password") {
    return <ErrorTab>{state.error.password}</ErrorTab>;
  } */

  const checkString = () => { 
    console.log(state.error)
    if (isEmpty(state.error)) {
      return null;
    }
    if(state.error.name === "email"){ 
      return <ErrorTab>{state.error.email}</ErrorTab>;
    }
    if(state.error.name === "password") { 
      return <ErrorTab>{state.error.password}</ErrorTab>;
    }
  }

  console.log(state.error.name)

return <ErrorContainer>
  <ErrorTabStyled>{checkString()}</ErrorTabStyled>
</ErrorContainer>;
};

export default ErrorTab;
