import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Content/Home";
//import SignUp from "./components/Auth/SignUp";
//import LogIn from "./components/Auth/LogIn";

// import * as Styled from './Content__Styled';

type PropsContent = {};

function Content({}: PropsContent) {
  return (
  
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact={true}>
          <Home />
        </Route>
        
      </Switch>
    </BrowserRouter>
    
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

