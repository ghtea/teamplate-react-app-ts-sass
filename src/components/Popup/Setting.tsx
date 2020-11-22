import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


import IconX from 'svgs/basic/IconX';

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
      
      <Styled.Div__Setting_Header>
        <div> Setting </div>
        <div> 
          <IconX
            listKeyTheme={['color', 'Popup', 'setting_header___icon']}
            width={'24px'}
            height={'24px'}
          />
        </div>
      </Styled.Div__Setting_Header>
      
      
      <Styled.Div__Setting_Content>
        
        <Styled.Div__Setting_Content_Section>
          <div> Theme </div>
          <div>
            <div> auto </div>
            <div> light </div>
            <div> dark </div>
          </div>
        </Styled.Div__Setting_Content_Section>
        
        <Styled.Div__Setting_Content_Section>
          <div> Language </div>
          <div>
            <div> English </div>
            <div> Korean </div>
          </div>
        </Styled.Div__Setting_Content_Section>
        
        <Styled.Div__Setting_Content_Section>
          <div> Theme </div>
          <div>
            <div> auto </div>
            <div> light </div>
            <div> dark </div>
          </div>
        </Styled.Div__Setting_Content_Section>
        
      </Styled.Div__Setting_Content>
        
        
    </Styled.Div__Setting>
  );
}

Setting.defaultProps = {};

export default Setting;


