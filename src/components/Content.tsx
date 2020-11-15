import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Content/Home";
//import SignUp from "./components/Auth/SignUp";

import LogIn from "./Content/Auth/LogIn";

import * as Styled from './Content_Styled';

type PropsContent = {};

function Content({}: PropsContent) {
  return (
    <Styled.Div__Content>
    
      <BrowserRouter>
        <Switch>
          
          <Route path="/" exact={true}>
            <Home />
          </Route>
          
          <Route path="/log-in" >
            <LogIn />
          </Route>
          
        </Switch>
      </BrowserRouter>
      
    </Styled.Div__Content>
  );
}

export default Content;

/*
<Route path="/sign-up" >
            <SignUp />
          </Route>
          <Route path="/log-in" >
            <LogIn />
          </Route>
*/

