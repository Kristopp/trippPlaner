import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import "../index.css";
//Components
import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";
import { UserContext } from '../context/Provider';
//API functions
/* import MyContext from "../context/GlobalState"; */
//Context

const App = () => {
  const user = useContext(UserContext);
  const [tabsArray, setTabsArray] = useState([]);
  const [trippFormState, setFormState] = useState(true);
  const [id, setId] = useState(0);
  //Holds input values until pushed
  const [tabForm, setTabForm] = useState({
    id: 0,
    title: "",
    picture: "",
    date: "YYYY-MM-DD",
  });

  console.log(user)
  const handleTrippInput = (index, event) => {
    //Get object and add input values
    const values = [...tabsArray];
    //we change values of array copy
    values[index][event.target.name] = event.target.value;
    /* setTabForm(form); */
  };
  //Kui Form on open siis hide add ja hide
  const toggleForm = () => {
    if (trippFormState) {
      setFormState(false);
    } else {
      setFormState(true);
    }
  };
  return (
      <MainContainer>
        <Header />
        <FormWrapper>
          {trippFormState ? (
            <TrippForm onClick={toggleForm}></TrippForm>
          ) : undefined}
        </FormWrapper>
        <TabWrapper>
          {tabsArray.map((tabArray, index) => {
            return (
              <TrippTab
                key={id + index}
                onClick={toggleForm}
                onChange={(event) => handleTrippInput(index, event)}
              ></TrippTab>
            );
          })}
        </TabWrapper>
        <ButtonContainer>
          <AddButton onClick={toggleForm}></AddButton>
        </ButtonContainer>
      </MainContainer>
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
