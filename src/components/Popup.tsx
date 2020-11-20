import React, {useCallback} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsNotification from 'store/actions/notification';

import Setting from "./Popup/Setting";

import * as Styled from './Popup_Styled';

type PropsPopup = {};

function Popup({}: PropsPopup) {
  
  const showingSetting:boolean = useSelector((state: StateRoot) => state['status']['showing']['popup']['setting']);

  return (
      
    <Styled.Div__Popup>
      
      {showingSetting && <Setting />}
      
    
    </Styled.Div__Popup>
      
  );
}

export default Popup;

/*
<Route path="/sign-up" >
            <SignUp />
          </Route>
          <Route path="/log-in" >
            <LogIn />
          </Route>
*/

