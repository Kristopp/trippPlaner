import React, { useContext, useState, useEffect } from "react";
import Styled, { keyframes } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import RegisterModal from './RegisterModal'

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

const MainContainer = Styled.div`
display: flex;
align-items: center;
justify-content: center;
min-width: 100vh;
min-height: 100vh;
overflow: auto;
margin: 0;
padding: 0;
position: relative;
`;
const FormContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 100vh;
min-height: 100vh;
padding-bottom: 500px;
`;

const FormInput = Styled.input`
width: 300px;
height: 50px;
margin: 10px;
border-radius: 20px;
padding: 10px;
background-color: transparent;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 1px;
text-align: center;
color: #000000;
::placeholder,
  ::-webkit-input-placeholder {
    color: #000000;
  }
  :-ms-input-placeholder {
     color: #000000;
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
const LogInButton =Styled.button`
width: 100px;
height: 20px;
border-radius: 20px;
margin: 10px;
background-color: transparent;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 1px;
text-align: center;
color: #000000;
::placeholder,
  ::-webkit-input-placeholder {
    color: #000000;
  }
  :-ms-input-placeholder {
     color: #000000;
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
`

const LandingPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const inputHandler = (event) => {
    event.target.name = event.target.value;
  };

  const logInHandler = () => { 

  }

  return (

    <MainContainer>
      <FormContainer>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          onChange={inputHandler}
        />
        <FormInput
          type="text"
          placeholder="Password"
          name="Password"
          onChange={inputHandler}
        />
        <LogInButton 
           type="button"
          placeholder="LogIn"
          name="LogIn"
          onClick={logInHandler}>login</LogInButton>
      </FormContainer>
    </MainContainer>
  );
};
export default LandingPage;
