import React, { useContext, useState, useEffect } from "react";
import Styled, { keyframes } from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


const MainContainer = Styled.div`
display: flex;
min-width: 100vh;
min-height: 100vh;
overflow: auto;
margin: 0;
padding: 0;
position: relative;
`;

const LandingPage = () => {
    const authUser = { 
        isAuthenticated: false,
        
    }
    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
  <MainContainer>

      
  </MainContainer>
  )
};
export default LandingPage;
