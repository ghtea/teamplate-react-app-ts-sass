import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsNotification from 'store/actions/notification';
import {Banner} from 'store/reducers/notification';


//import IconNotification from 'svgs/basic/IconNotification';

import * as Styled from './Notification_Styled';


type PropsNotification = {};

function Notification({}: PropsNotification) {
  
  const listBanner: Banner[] = useSelector((state: StateRoot) => state['notification']['listBanner']);
  
  return (
    <Styled.Div__Notification>
    
        
        
        
    </Styled.Div__Notification>
  );
}

Notification.defaultProps = {};

export default Notification;
