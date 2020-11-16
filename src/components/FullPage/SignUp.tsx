import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconSignUp from 'svgs/basic/IconSignUp';

import * as Styled from './SignUp_Styled';


type PropsSignUp = {};

function SignUp({}: PropsSignUp) {
  
  const history = useHistory();
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  return (
    <Styled.Div__SignUp>
    
        <Styled.Div__SignUp_NameApp> 
          <a
            onClick={(event)=>onClick_LinkInsideApp(event, '/')}
          > React App </a> 
        </Styled.Div__SignUp_NameApp>
        
        <Styled.Div__SignUp_TitlePage> Sign Up </Styled.Div__SignUp_TitlePage>
        
        <Styled.Div__SignUp_Identity> 
          <div> email address </div>
          <div> <input type='text' /> </div>
        </Styled.Div__SignUp_Identity>
        
        <Styled.Div__SignUp_Password> 
          <div> password </div>
          <div> <input type='password' /> </div>
        </Styled.Div__SignUp_Password> 
        
        <Styled.Div__SignUp_Enter> 
          <div> Sign Up </div>
        </Styled.Div__SignUp_Enter> 
        
        
        <Styled.Div__SignUp_CollectionLink> 
          <div> <a
            onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')}
          > Log In </a> </div>
        </Styled.Div__SignUp_CollectionLink>
        
        
    </Styled.Div__SignUp>
  );
}

SignUp.defaultProps = {};

export default SignUp;
