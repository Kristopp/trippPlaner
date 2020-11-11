import React, { useState, useContext, useEffect } from "react";
import Styled from "styled-components";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { Context } from "../context/Store";
import setAuthToken from "../setAuthToken";

//Components
import LandingPage from "./LandingPage";
import Header from "./Header";
import AddButton from "./AddButton.jsx";
import TrippTab from "./TrippTab";
import TrippForm from "./TrippForm";
import TabForm from "./TabForm";
import "../index.css";

const MainContainer = Styled.div`
display: flex;
min-width: 100vh;
min-height: 92vh;
margin: 0;
padding: 0;
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
  const [
    state,
    dispatch,
    toggleTab,
    setToggleTab,
    loadPage,
    setLoadPage,
  ] = useContext(Context);
  const [openTrippForm, setTrippForm] = useState(false);
  let history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch({ type: "SET_CURRENT_USER", payload: {} });
    history.push("/");
  };

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={LandingPage} exact>
          {/* {state.isAuthenticated ? <Redirect to="/trippApp"/> : <Redirect to="/" /> } */}
        </Route>
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
