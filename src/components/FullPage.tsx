import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import LogIn from "./FullPage/LogIn";
import SignUp from "./FullPage/SignUp";


import * as Styled from './FullPage_Styled';

type PropsFullPage = {};

function FullPage({}: PropsFullPage) {
  return (
      
    <Switch>
    
      <Styled.Div__FullPage>
      
        <Route path="/log-in" >
          <LogIn />
        </Route>
        
        <Route path="/sign-up" >
          <SignUp />
        </Route>
      
      </Styled.Div__FullPage>
      
    </Switch>
        
  );
}

export default FullPage;

/*
<Route path="/sign-up" >
            <SignUp />
          </Route>
          <Route path="/log-in" >
            <LogIn />
          </Route>
*/

