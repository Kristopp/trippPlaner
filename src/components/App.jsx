import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import "../index.css";
//Components
import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";
//API functions
import { listFormEntries } from "../API/API";

const App = () => {
  const [tabsArray, setTabsArray] = useState([]);
  const [trippFormState, setFormState] = useState(true);
  const [id, setId] = useState(0);
  //Holds input values until pushed
  const [tabForm, setTabForm] = useState({
    id: 0,
    title: "",
    picture: "",
    date: "",
  });

  useEffect(() => {
    //Becouse we api call is async func
    //we need to use iffi becouse we can make iffi async
    (async () => {
      const logEntries = await listFormEntries();
      console.log(logEntries);
    })();
  }, []);

  const createNewTab = () => {
    //Create new object and push into array
    let newObject = new Object({
      id: 0,
      title: "Where?",
      picture: "",
      date: "when?",
    });
    setId(id + 1);
    newObject.id = id;
    tabsArray.push(newObject);
  };

  const handleTrippInput = (index, event) => {
    //Get object and add input values
    const values = [...tabsArray];
    //we change values of array copy
    values[index][event.target.name] = event.target.value;
    setTabForm(values);
  };
  //Kui Form on open siis hide add ja hide
  const toggleForm = () => {
    if (trippFormState) {
      setFormState(false);
      console.log("hello");
    } else {
      setFormState(true);
    }
  };
  return (
    <React.Fragment>
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
                data={tabArray}
                onClick={toggleForm}
                onChange={(event) => handleTrippInput(index, event)}
              ></TrippTab>
            );
          })}
        </TabWrapper>
        <ButtonContainer>
          <AddButton onClick={() => createNewTab()}></AddButton>
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
