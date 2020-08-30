import React, { useState } from "react";
import Styled from "styled-components";
import "../index.css";

import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";

const App = () => {

 
  const [addButtonShow, setaddButtonShow] = useState(true);
  const [trippTabState, setTripTabState] = useState(true);
  const [trippFormState, setFormState] = useState(true);

  const [tabArray, setTabArray] = useState([])

  //Kui Form on open siis hide add ja hide

  const createNewTab = () => { 
    const newTabArray = [...tabArray, ]

  }

  let trippTabs;
  if (trippTabState) {
    trippTabs = <TrippTab onClick={() => setTripTabState(true)}></TrippTab>;
  }

  let trppForm;
  if (trippFormState) {
    trppForm = <TrippForm></TrippForm>;
  }

  return (
    <React.Fragment>
      <MainContainer>
        <Header />
        <FormWrapper>
       {trppForm}
        </FormWrapper>
        <TabWrapper>
          {trippTabs}
          {trippTabs}
          {trippTabs}
          {trippTabs}
          {trippTabs}
        </TabWrapper>
        <ButtonContainer>
        <AddButton onClick={() => createNewTab}></AddButton>
        </ButtonContainer>
      </MainContainer>
    </React.Fragment>
  );
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
