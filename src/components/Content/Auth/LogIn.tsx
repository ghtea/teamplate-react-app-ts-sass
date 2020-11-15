import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconLogIn from 'svgs/basic/IconLogIn';

import * as Styled from './LogIn_Styled';


type PropsLogIn = {};

function LogIn({}: PropsLogIn) {
  
  
  return (
    <div>
        log in
    </div>
  );
}

LogIn.defaultProps = {};

export default LogIn;
