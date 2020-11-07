import axios from "axios";
import React, { useContext, useState } from "react";
import Styled, { keyframes } from "styled-components";
import { Context } from "../context/Store";

/**need to make reusable */
const boxShadow = keyframes`
   0% {
    transform: translateZ(0);
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.45);
  }
  100% {
    transform: translatey(1px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.65);
  }
}
`;
const boxShadowGreen = keyframes`
   0% {
    transform: translateZ(0);
    box-shadow: 0 0 5px 0px #00cdac;
  }
  100% {
    transform: translatey(1px);
    box-shadow: 0 0 15px 0px #00cdac;
  }
}
`;

/**need to make reusable */
const MainContainer = Styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
z-index: 10;
min-width: 100vh;
min-height: 100vh;
overflow: auto;
margin: 0;
padding: 0;
`;
const HeadlineText = Styled.h1`
color: #00cdac;
letter-spacing: 2px;
`;
const FormContainer = Styled.div`
display:flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
min-width: 300px;
min-height: 315px;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
background: #0f2027;
border-radius: 5%;
&:hover :active { 
    animation: ${boxShadowGreen} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;
/**need to make reusable */
const FormInput = Styled.input`
width: 250px;
height: 35px;
margin: 10px;
border-radius: 20px;
padding: 10px;
background: #00cdac;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 2px;
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
&:hover { 
    animation: ${boxShadowGreen} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;

const RegisterButton = Styled.button`
width: 100px;
height: 20px;
border-radius: 20px;
margin: 15px;
background-color: #00cdac;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 2px;
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
&:hover { 
    animation: ${boxShadowGreen} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;

/**need to make reusable */
const CloseTab = Styled.button`
align-self: flex-end;
position: absolute;
z-index: 10;
margin: 10px 10px 0 0;
width: 12px;
height: 12px;
border-radius: 50%;
border: none;
box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.45);
`;

const RegisterModal = () => {
  const [state, dispatch, toggleRegModal, setRegModal] = useContext(Context);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    password_confirm: "",
    errors: {},
  });

  const inputHandlerEmail = (event) => {
    let email = event.target.value;
    setUserInput({...userInput, email:email })
  };
  const inputHandlerPassword = (event) => {
    let pw = event.target.value;
    setUserInput({...userInput, password: pw})
  };
  const inputHandlerConfirmedPassword = (event) => {
    let confirmedPw = event.target.value;
    setUserInput({...userInput, password_confirm: confirmedPw })
  };
  const confirmHandler = () => {
    console.log(userInput)
    axios
      .post(`http://localhost:5000/users/register`, userInput)
      .catch((err) => {
        dispatch({
          type: "REGISTER_USER_ERROR",
          payload: err.response.data,
        });
        setRegModal(false)
      });
  };

  return (
    <React.Fragment>
      {toggleRegModal ? (
        <MainContainer>
          <FormContainer>
            <HeadlineText>Join us!</HeadlineText>
            <CloseTab
              onClick={() => setRegModal((toggleRegModal) => !toggleRegModal)}
            ></CloseTab>
            <FormInput
              type="text"
              placeholder="email"
              name="email"
              onChange={inputHandlerEmail}
            />
            <FormInput
              type="text"
              placeholder="password"
              name="name"
              onChange={inputHandlerPassword}
            />
            <FormInput
              type="text"
              placeholder="confirm password"
              name="password_confirm"
              onChange={inputHandlerConfirmedPassword}
            />
            <RegisterButton
             name="confirm"
             onClick={confirmHandler}
            >confirm</RegisterButton>
          </FormContainer>
        </MainContainer>
      ) : null}
    </React.Fragment>
  );
};
export default RegisterModal;
