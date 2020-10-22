import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import "../index.css";

//Components
import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";
import TabForm from "./TabForm";
import { Context } from "../context/Store";

export const App = () => {
  const [state, dispatch, toggleTab, setToggleTab] = useContext(Context);
  const [openTrippForm, setTrippForm] = useState(false);

  const openTabFormHandler = () => {
    if (toggleTab === false) {
      setToggleTab(true);
    } else {
      setToggleTab(false);
      console.log(toggleTab)
    }
  };

  return (
    <React.Fragment>
      <Header />
      <MainContainer>
        <TabWrapper>
          <TrippTab />
        </TabWrapper>
        {toggleTab ? (
          <TabFormWrapper>
            <TabForm />
          <TrippForm></TrippForm>
          </TabFormWrapper>
        ) : null}
        <ButtonContainer>
          <AddButton onClick={openTabFormHandler} />
        </ButtonContainer>
      </MainContainer>
    </React.Fragment>
  );
};

const MainContainer = Styled.div`
display: flex;
min-width: 100vh;
min-height: 100vh;
overflow: auto;
margin: 0;
padding: 0;
position: relative;
`;

const TabFormWrapper = Styled.div`
display: flex;
justify-content: center;
min-width: 100%;
position: absolute;
z-index: 2;
`;

const TabWrapper = Styled.div`
display: flex;
flex-direction: row;
position: relative;
`;

const ButtonContainer = Styled.div`
bottom: 60px; 
right: 60px;
position: absolute; 
`;

export default App;
