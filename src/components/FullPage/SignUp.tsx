import React, { useCallback, useEffect, useState } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsAuth from 'store/actions/auth';
import * as actionsStatus from 'store/actions/status';

import useInput from 'tools/hooks/useInput';

import Cookies from 'js-cookie';


//import IconSignUp from 'svgs/basic/IconSignUp';

import * as Styled from './SignUp_Styled';


type PropsSignUp = {};

function SignUp({}: PropsSignUp) {
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const inputEmail = useInput(""); // {value, setValue, onChange};
  const inputPassword1 = useInput(""); // {value, setValue, onChange};
  const inputPassword2 = useInput(""); // {value, setValue, onChange};
  
  const messageEmail = useState('');
  const messagePassword = useState('');
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  const onClick_SignUp = useCallback(
    () => {
      if (!inputEmail.value || !inputPassword1.value || !inputPassword2.value) {
        console.log('enter text')
      }
      else {
        dispatch(actionsAuth.return_SIGN_UP({
          identification: inputEmail.value,
          password1: inputPassword1.value,
          password2: inputPassword2.value
        }));
      }
    },
    [inputEmail, inputPassword1, inputPassword2]
  );
  
  
  // (event: React.ChangeEvent<HTMLInputElement>)
  const onKeyPress_SignUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onClick_SignUp();
      }
    },
    []
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
          <div> 
            <input 
              type='text' 
              
              value={inputEmail.value}
              onChange={inputEmail.onChange}
              
              placeholder=""  
            /> 
          </div>
          <div> {messageEmail} </div>
        </Styled.Div__SignUp_Identity>
        
        <Styled.Div__SignUp_Password> 
          <div> password </div>
          <div> 
            <input  
              type='password'
              value={inputPassword1.value}
              onChange={inputPassword1.onChange}
              
              placeholder=""  
            /> 
          </div>
          <div> 
            <input 
              type='password'
              value={inputPassword2.value}
              onChange={inputPassword2.onChange}
              
              placeholder="" 
              onKeyPress={onKeyPress_SignUp}
            /> 
          </div>
          <div> {messagePassword} </div>
        </Styled.Div__SignUp_Password> 
        
        <Styled.Div__SignUp_Enter> 
          <button
            onClick={onClick_SignUp}
          > Sign Up </button>
        </Styled.Div__SignUp_Enter> 
        
      
        <div> 
          <div> or </div>
        </div> 
        
        <Styled.Div__SignUp_Social> 
          <button> Log In with Google </button>
        </Styled.Div__SignUp_Social> 
        
        <Styled.Div__SignUp_Social> 
          <button> Log In with Twitter </button>
        </Styled.Div__SignUp_Social> 
        
        <Styled.Div__SignUp_CollectionLink> 
          <div> 
            <a
              onClick={(event)=>onClick_LinkInsideApp(event, '/')}
            > Home </a> 
          </div>
          <div> 
            <a
              onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')}
            > Log In </a> 
          </div>
        </Styled.Div__SignUp_CollectionLink>
        
        
    </Styled.Div__SignUp>
  );
}

SignUp.defaultProps = {};

export default SignUp;
