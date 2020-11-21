import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconSetting from 'svgs/basic/IconSetting';

import * as Styled from './Setting_Styled';


type PropsSetting = {};

function Setting({}: PropsSetting) {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  const onClick_ChangeLanguage = useCallback(
    () => {
      dispatch(actionsStatus.return__CHANGE_LANGUAGE() )
      
      /*
      
      dispatch(actionsStatus.return__CHANGE_LANGUAGE({
        replacement: false
      }))
      
      */
    }, []
  );
  
  
  return (
    <Styled.Div__Setting>
      
      <div>
        <div> Setting </div>
      </div>
      
      <div> Theme </div>
      <div> Language </div>
      <div> Log In </div>
        
    </Styled.Div__Setting>
  );
}

Setting.defaultProps = {};

export default Setting;


