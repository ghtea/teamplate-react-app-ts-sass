import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NameApp from "./FullPage/NameApp";

import LogIn from "./FullPage/LogIn";
import SignUp from "./FullPage/SignUp";


import * as Styled from './FullPage_Styled';

type PropsFullPage = {};

function FullPage({}: PropsFullPage) {
  return (
    
      <Styled.Div__FullPage>
        
        <NameApp/>
        
        <Switch>
          <Route path="/log-in" >
            <LogIn />
          </Route>
          
          <Route path="/sign-up" >
            <SignUp />
          </Route>
        </Switch>
        
        <Styled.Div__FullPage_Background/>
        
      </Styled.Div__FullPage>
     
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

