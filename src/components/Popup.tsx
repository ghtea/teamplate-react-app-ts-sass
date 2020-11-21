import React, {useCallback} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import Setting from "./Popup/Setting";

import * as Styled from './Popup_Styled';

type PropsPopup = {};

function Popup({}: PropsPopup) {
  
  const showingSetting:boolean = useSelector((state: StateRoot) => state['status']['showing']['popup']['setting']);
  const dispatch = useDispatch();
  
  const onClick_HidePopup = useCallback(
    (idPopup:string) => {
      dispatch(actionsStatus.return__REPLACE({ 
        listKey: ['showing', 'popup', idPopup],
        replacement: false
      }))
    },[showingSetting]
  );
  
  return (
      
    <>
      
      {showingSetting && 
        <>
          <Styled.Div__Shadow
            onClick={()=>onClick_HidePopup('setting')}
          />
          <Setting />
        </>
      }
      
    </>
      
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

