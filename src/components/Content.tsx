import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Content/Home";
//import SignUp from "./components/Auth/SignUp";

import './Content.scss';

type PropsContent = {};

function Content({}: PropsContent) {
  return (
      <div className={'content__root'}>
      
          <Switch>
            
            <Route exact path="/" >
              <Home />
            </Route>
            
          </Switch>
        
      </div>
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

