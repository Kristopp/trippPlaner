import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import "../index.css";


//Components
import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";

export const App = () => {
  return (
      <MainContainer>
        <Header />
        <FormWrapper>
          <TrippForm></TrippForm>
        </FormWrapper>
        <TabWrapper>
          <TrippTab></TrippTab>
        </TabWrapper>
        <ButtonContainer>
          <AddButton></AddButton>
        </ButtonContainer>
      </MainContainer>
  )
};

const MainContainer = Styled.div`
min-width: 100vh;
min-height: 100vh;
overflow: auto;
margin: 0;
padding: 0;
background: linear-gradient(45deg,#00cdac,#02aab0) no-repeat, repeat center center / cover;
`;

const FormWrapper = Styled.div`
display: flex;
justify-content: center;
`;

const TabWrapper = Styled.div`
display: flex;
flex-direction: row;
`;

const ButtonContainer = Styled.div`
bottom: 60px; 
right: 60px;
position: absolute; 
`;

export default App;
