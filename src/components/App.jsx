import React from "react";
import Styled from 'styled-components'

import Header from "./Header";
import AddButton from './AddButton.jsx'
import TrippTab from './TrippTab'


const App = () => {
  return (
    <div>
      <Header></Header>
      <TrippTab></TrippTab>
      <AddButton></AddButton>
    </div>
  );
};

export default App;