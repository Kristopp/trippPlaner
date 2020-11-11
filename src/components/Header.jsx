import React from "react";
import Styled from "styled-components";

const HeaderWraper = Styled.div`
height: 8vh;
background-color: #041e29;
posistion: absolute;
`;

const Header = () => {
  return (
    <React.Fragment>
      <HeaderWraper></HeaderWraper>
    </React.Fragment>
  );
};

export default Header;
