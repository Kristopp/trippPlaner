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

  let addButton;
  if (addButtonShow) {
    addButton = <AddButton></AddButton>;
  }

  let openForm;
  if (trippTabState) {
    console.log(trippTabState);
    openForm = <TrippForm></TrippForm>;
  }

  console.log(openForm);

  return (
    <React.Fragment>
      <MainContainer>
        <Header></Header>
        <ContentContainer>
          {/* <TrippTab onClick={()=> setTripTabState(true)}></TrippTab> */}
          {openForm}
          {addButton}
        </ContentContainer>
      </MainContainer>
    </React.Fragment>
  );
};

const MainContainer = Styled.div`

`

const ContentContainer = Styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
z-indez: -1;
width: 100%;
height: 100%;
margin: 0;
padding: 0;
background: linear-gradient(45deg,#00cdac,#02aab0) no-repeat, repeat center center / cover;
`;

export default App;
