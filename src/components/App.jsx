import React, { useState, useContext } from "react";
import Styled from "styled-components";
import "../index.css";
import { Route, Switch } from "react-router-dom";
import { Context } from "../context/Store";

//Components
import LandingPage from "./LandingPage";
import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";
import TabForm from "./TabForm";

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

export const App = () => {
  const [state, dispatch, toggleTab, setToggleTab] = useContext(Context);
  const [openTrippForm, setTrippForm] = useState(false);

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/trippApp">
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
              <AddButton
                onClick={() => setToggleTab((toggleTab) => !toggleTab)}
              />
            </ButtonContainer>
          </MainContainer>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
