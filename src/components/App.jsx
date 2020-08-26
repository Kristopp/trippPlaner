import React from "react";
import Styled from 'styled-components'
import '../index.css'

import Header from "./Header";
import AddButton from './AddButton.jsx'
import TrippTab from './TrippTab'
import TrippForm from './TrippForm'


const App = () => {
  return (
    <div>
      <Header></Header>
      <TrippTab></TrippTab>
      <TrippForm></TrippForm>
      <AddButton></AddButton>
    </div>
  );
};

export default App;