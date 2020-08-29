import React from "react";
import Styled from "styled-components";

const HeaderWraper = Styled.div`

height: 65px;
background-color: #041e29;
`;

const Header = () => {
  return (
    <React.Fragment>
      <HeaderWraper></HeaderWraper>
    </React.Fragment>
  );
};

export default Header;
