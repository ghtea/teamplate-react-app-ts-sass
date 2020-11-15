import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Content/Home";
//import SignUp from "./components/Auth/SignUp";


import * as Styled from './Content_Styled';

type PropsContent = {};

function Content({}: PropsContent) {
  return (
      <Styled.Div__Content>
      
          <Switch>
            
            <Route exact path="/" >
              <Home />
            </Route>
            
          </Switch>
        
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

