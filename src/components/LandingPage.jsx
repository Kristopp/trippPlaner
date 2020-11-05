import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/Store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
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
const FormContainer = Styled.div`
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
letter-spacing: 1px;
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
letter-spacing: 1px;
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
letter-spacing: 1px;
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

  const [openModal, setModal] = useState(true)

  const inputHandler = (event) => {
    event.target.name = event.target.value;
  };

  const logInHandler = () => {};

  const regModalHandler = () => {

  };

  return (
    <MainContainer>
      {openModal ? <RegisterModal></RegisterModal> : null}
      <FormContainer>
        <FormInput
          type="text"
          placeholder="email"
          name="email"
          onChange={inputHandler}
        />
        <FormInput
          type="text"
          placeholder="password"
          name="password"
          onChange={inputHandler}
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
          onClick={() => setRegModal((toggleRegModal) => !toggleRegModal)}>
            register
        </RegisterButton>
        </ButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};
export default LandingPage;
