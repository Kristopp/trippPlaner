import React from "react"
import Styled, { keyframes } from "styled-components";

const NewCardForm = () => { 
    return ( 
        <CardFormContainer>
            <TitleInput />
            <AddPicture>Add pic</AddPicture>
        </CardFormContainer>
    )
}
export default NewCardForm

const boxShdow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
}
`;

const CardFormContainer = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 50px;
position: absolute;
z-index: 5;
width: 300px;
height: 200px;
overflow: auto;
background: #0f2027; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
                                  45deg,
                                  #02aab0,
                                  #00cdac
                                );
box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.45);
border-radius: 2%;
` 
const TitleInput = Styled.input`
height: 50px;
width: 200px;
margin: 10px;
box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
border-radius: 2%;
background-color: transparent;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 1px;
color: black;
`
const AddPicture = Styled.button` 
width: 100px;
height: 100px;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
background-color: transparent;
box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`