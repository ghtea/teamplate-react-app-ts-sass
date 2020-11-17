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
          <div> message </div>
        </Styled.Div__SignUp_Identity>
        
        <Styled.Div__SignUp_Password> 
          <div> password </div>
          <div> <input type='password' /> </div>
          <div> <input type='password' /> </div>
          <div> message </div>
        </Styled.Div__SignUp_Password> 
        
        <Styled.Div__SignUp_Enter> 
          <button> Sign Up </button>
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
              onClick={(event)=>onClick_LinkInsideApp(event, '/sign-up')}
            > Log In </a> 
          </div>
        </Styled.Div__SignUp_CollectionLink>
        
        
    </Styled.Div__SignUp>
  );
}

SignUp.defaultProps = {};

export default SignUp;
