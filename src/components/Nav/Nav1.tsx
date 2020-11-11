import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from './Nav1__Styled';

type PropsNav1 = {};

function Nav1({}: PropsNav1) {
  
  //const history = useHistory();

  return (
    <Styled.Div__Nav1>
      nav
    </Styled.Div__Nav1>
  );
}

Nav1.defaultProps = {};

export default Nav1;
