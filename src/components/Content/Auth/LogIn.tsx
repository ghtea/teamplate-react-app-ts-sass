import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconLogIn from 'svgs/basic/IconLogIn';

import * as Styled from './LogIn_Styled';


type PropsLogIn = {};

function LogIn({}: PropsLogIn) {
  
  //const history = useHistory();

  return (
    <div>
        log in
    </div>
  );
}

LogIn.defaultProps = {};

export default LogIn;
