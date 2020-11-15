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
    
        <Styled.Div__LogIn_NameApp> React App </Styled.Div__LogIn_NameApp>
        
        <Styled.Div__LogIn_TitlePage> Log In </Styled.Div__LogIn_TitlePage>
        
        <Styled.Div__LogIn_Identity> 
          <div> email address </div>
          <div> <input type='text' /> </div>
        </Styled.Div__LogIn_Identity>
        
        <Styled.Div__LogIn_Password> 
          <div> password </div>
          <div> <input type='password' /> </div>
        </Styled.Div__LogIn_Password> 
        
    </Styled.Div__LogIn>
  );
}

LogIn.defaultProps = {};

export default LogIn;
