import React, { useContext, useEffect, useState } from "react";
import setAuthToken from "../setAuthToken";
import { Context } from "../context/Store";
import {  useHistory,Redirect } from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import Styled, { keyframes } from "styled-components";

import RegisterModal from "./RegisterModal";

/**need to make reusable */
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

/**need to make reusable */
const MainContainer = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-width: 100vh;
min-height: 100vh;
overflow: auto;
margin: 0;
padding: 0;
`;
const FormContainer = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 100vh;
min-height: 100vh;
position: relative;
`;

/**need to make reusable */
const FormInput = Styled.input`
width: 300px;
height: 50px;
margin: 10px;
border-radius: 20px;
padding: 10px;
background-color: #0f2027;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 3px;
text-align: center;
color: #00cdac;
::placeholder,
  ::-webkit-input-placeholder {
    color: #00cdac;;
  }
  :-ms-input-placeholder {
    color: #00cdac;;
  }
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
box-sizing: border-box;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;

const ButtonContainer = Styled.div`
display: flex;
flex-direction: row;
`;
/**make reusable */
const LogInButton = Styled.button`
width: 100px;
height: 30px;
border-radius: 20px;
margin: 10px;
background-color: #0f2027;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 2px;
text-align: center;
color: #00cdac;
::placeholder,
  ::-webkit-input-placeholder {
    color: #00cdac;
  }
  :-ms-input-placeholder {
    color: #00cdac;
  }
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
box-sizing: border-box;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;
const RegisterButton = Styled.button`
width: 100px;
height: 30px;
border-radius: 20px;
margin: 10px;
background-color: #0f2027;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 2px;
text-align: center;
color: #00cdac;
::placeholder,
  ::-webkit-input-placeholder {
    color: #00cdac;
  }
  :-ms-input-placeholder {
    color: #00cdac;
  }
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
box-sizing: border-box;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
&:hover { 
    animation: ${boxShadow} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;

const LandingPage = () => {
  const [state, dispatch, toggleRegModal, setRegModal] = useContext(Context);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    errors: {},
  });
  const [openModal, setModal] = useState(true);
 let history = useHistory()

  const inputHandlerEmail = (event) => {
    let email = event.target.value;
    setUserInput({ ...userInput, email: email });
  };
  const inputHandlerPassword = (event) => {
    let pw = event.target.value;
    setUserInput({ ...userInput, password: pw });
  };

  const logInHandler = () => {
    axios
      .post("http://localhost:5000/users/login", userInput)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch({type: "SET_CURRENT_USER", payload: decoded})
      })
      .catch((err) => alert(err));
  };
  return (
    <MainContainer>
      {openModal ? <RegisterModal></RegisterModal> : null}
      <FormContainer>
        <FormInput
          type="text"
          placeholder="email"
          name="email"
          onChange={inputHandlerEmail}
        />
        <FormInput
          type="password"
          placeholder="password"
          name="password"
          autocomplete="current-password"
          onChange={inputHandlerPassword}
        />
        <ButtonContainer>
          <LogInButton
            type="button"
            placeholder="login"
            name="login"
            onClick={logInHandler}
          >
            login
          </LogInButton>
          <RegisterButton
            type="button"
            placeholder="register"
            name="register"
            onClick={() => setRegModal((toggleRegModal) => !toggleRegModal)}
          >
            sign up
          </RegisterButton>
        </ButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};
export default LandingPage;
