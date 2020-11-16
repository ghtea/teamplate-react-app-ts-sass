import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


//import LogIn from "./Notification/LogIn";

import * as Styled from './Notification_Styled';

type PropsNotification = {};

function Notification({}: PropsNotification) {
  return (
      
    <Styled.Div__Notification>
      
      
    </Styled.Div__Notification>
      
  );
}

export default Notification;

/*
<Route path="/sign-up" >
            <SignUp />
          </Route>
          <Route path="/log-in" >
            <LogIn />
          </Route>
*/

