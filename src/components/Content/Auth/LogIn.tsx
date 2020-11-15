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
    <Styled.Div__LogIn>
        <div> React App </div>
        <div> Log In </div>
        <div> 
          <div> email address </div>
          <div> <input type='text' /> </div>
        </div>
        <div> 
          <div> password </div>
          <div> <input type='password' /> </div>
        </div>
    </Styled.Div__LogIn>
  );
}

LogIn.defaultProps = {};

export default LogIn;
