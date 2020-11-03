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

const MainContainer = Styled.div`
display: flex;

min-width: 50vh;
min-height: 50vh;
overflow: auto;
margin: 0;
padding: 0;
position: relative;
border: solid black 1px;
`;

const FormContainer = Styled.div`
`;

const FormInput = Styled.div`

`;

const RegisterModal = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    password_confirm: "",
    errors: {},
  });

  const inputHandler = (event) => {
    event.target.name = event.target.value;
  };

  return (
    <MainContainer>
      <FormContainer>
        <FormInput></FormInput>
        <FormInput></FormInput>
      </FormContainer>
    </MainContainer>
  );
};
export default RegisterModal;
