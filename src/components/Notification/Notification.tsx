import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconNotification from 'svgs/basic/IconNotification';

import * as Styled from './Notification_Styled';


type PropsNotification = {};

function Notification({}: PropsNotification) {
  
  const listNotification:any[] = useSelector((state: StateRoot) => state['notification']['']);
  
  return (
    <Styled.Div__Notification>
    
        
        
        
    </Styled.Div__Notification>
  );
}

Notification.defaultProps = {};

export default Notification;
