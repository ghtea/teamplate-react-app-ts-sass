import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from './Nav2__Styled';

type PropsNav2 = {};

function Nav2({}: PropsNav2) {
  
  //const history = useHistory();

  return (
    <Styled.Div__Nav2>
      nav
    </Styled.Div__Nav2>
  );
}

Nav2.defaultProps = {};

export default Nav2;
