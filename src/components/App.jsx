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

  const [tabsArray, setTabArray] = useState([]);
  const [id, setId] = useState(0)
  const [tapForm, setTabForm] = useState({
    id: id,
    title: "",
    picture: "",
    date: "",
  });

  //Kui Form on open siis hide add ja hide
  const createNewTab = () => {
    let newObject = new Object({ 
      tapForm
    })
    setId(id + 1)
    newObject.id = id;
    tabsArray.push(newObject);
    console.log('hello')
  };

  const handleTrippInput = (index, event) => { 
    const values = [...tabsArray];
    values[index][event.target.name] = event.target.value;
    console.log(values)
  }

/* let trippTabs;
  if (!trippTabState) {
    setTripTabState(true)
    trippTabs = <TrippTab onClick={() => setTripTabState(true)}></TrippTab>; 
  }  */

  let form;
  const closeForm = () => {
    if (!trippFormState) {
      setFormState(true);
      form = <FormWrapper onClick={() => closeForm}></FormWrapper>;
      console.log(form);
    } else {
      form = undefined;
      setFormState(false);
      console.log("false");
    }
  };

  return (
    <React.Fragment>
      <MainContainer>
        <Header />
        {form}
        <TabWrapper>
          {tabsArray.map((tabArray, index) => {
            return <TrippTab 
            key={id + index} 
            onChange={(event) => handleTrippInput(index, event)}
            tabArray={tabArray}
            ></TrippTab>;
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
