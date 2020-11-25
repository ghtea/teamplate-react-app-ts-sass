import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';

import * as actionsAuth from 'store/actions/auth';
import * as actionsStatus from 'store/actions/status';

import useInput from 'tools/hooks/useInput';

//import IconLogIn from 'svgs/basic/IconLogIn';

import * as Styled from './LogIn_Styled';


type PropsLogIn = {};

function LogIn({}: PropsLogIn) {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  const inputEmail = useInput(""); // {value, setValue, onChange};
  const inputPassword = useInput(""); // {value, setValue, onChange};
  
  const onClick_LogIn = useCallback(
    () => {
      
      dispatch(actionsAuth.return__LOG_IN({
        email: inputEmail.value,
        password: inputPassword.value
      }));
      
    },
    [inputEmail, inputPassword]
  );
  
  return (
    <Styled.Div__LogIn>
    
      <Styled.Div__LogIn_TitlePage> Log In </Styled.Div__LogIn_TitlePage>
        
        <Styled.Div__LogIn_Identity> 
          <input 
            type='text'
            placeholder='Email Address'
            value={inputEmail.value}
            onChange={inputEmail.onChange} 
          /> 
          <div> Email Address </div>
        </Styled.Div__LogIn_Identity>
        
        <Styled.Div__LogIn_Password> 
          <input 
            type='password'
            placeholder='Password'
            value={inputPassword.value}
            onChange={inputPassword.onChange}
          /> 
          <div> Password </div>
        </Styled.Div__LogIn_Password> 
        
        <div> message </div>
        
        <Styled.Div__LogIn_Enter> 
          <button
            onClick={()=>onClick_LogIn()}
          > Log In 
          </button>
        </Styled.Div__LogIn_Enter> 
        
      
        <div> 
          <div> or Log In with </div>
        </div> 
        
        <Styled.Div__LogIn_Social> 
          <button> Google </button>
          <button> Facebook </button>
          <button> Twitter </button>
        </Styled.Div__LogIn_Social> 
        
        <Styled.Div__LogIn_CollectionLink> 
          <div> 
            <a
              onClick={(event)=>onClick_LinkInsideApp(event, '/')}
            > Home </a> 
          </div>
          <div> <a
            onClick={(event)=>onClick_LinkInsideApp(event, '/sign-up')}
          > Sign Up </a> </div>
        </Styled.Div__LogIn_CollectionLink>
        
        
    </Styled.Div__LogIn>
  );
}

LogIn.defaultProps = {};

export default LogIn;
