import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie';

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


import IconX from 'svgs/basic/IconX';

import * as Styled from './Setting_Styled';


type PropsSetting = {};

function Setting({}: PropsSetting) {
  
  const dispatch = useDispatch();
  const history = useHistory();

  const languageCurrent:string = useSelector((state: StateRoot) => state['status']['current']['language']);
  const optionThemeCurrent:string = useSelector((state: StateRoot) => state['status']['current']['theme']['option']);

  const { t } = useTranslation();
  
  const onClick_HideSetting = useCallback(
    () => {
      dispatch(actionsStatus.return__REPLACE({ 
        listKey: ['showing', 'popup', 'setting'],
        replacement: false
      }))
    },[]
  );
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  
  const onClick_ChangeOptionTheme = useCallback(
    (replacement:string) => {
      dispatch(actionsStatus.return__REPLACE({
        listKey: ['current', 'theme', 'option'],
        replacement: replacement
      }) );
      Cookies.set('optionTheme', replacement, { expires: 14});
    }, []
  );
  
  const onClick_ChangeLanguage = useCallback(
    (replacement:string) => {
      dispatch(actionsStatus.return__CHANGE_LANGUAGE({
        replacement: replacement
      }) )
    }, []
  );
  
  
  return (
    <Styled.Div__Setting>
      
      <Styled.Div__Setting_Header>
        <div> {t('.Setting')} </div>
        <div
          onClick={()=>onClick_HideSetting()}
        > 
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
            <Styled.Button__Option 
              onClick={()=>onClick_ChangeOptionTheme('auto')}
              active={optionThemeCurrent === 'auto'}
            > auto 
            </Styled.Button__Option>
            <Styled.Button__Option 
              onClick={()=>onClick_ChangeOptionTheme('light')}
              active={optionThemeCurrent === 'light'}
            > light 
            </Styled.Button__Option>
            <Styled.Button__Option 
              onClick={()=>onClick_ChangeOptionTheme('dark')}
              active={optionThemeCurrent === 'dark'}
            > dark 
            </Styled.Button__Option>
          </div>
        </Styled.Div__Setting_Content_Section>
        
        <Styled.Div__Setting_Content_Section>
          <div> Language </div>
          <div>
            <Styled.Button__Option 
              onClick={()=>onClick_ChangeLanguage('en')}
              active={languageCurrent === 'en'}
            > English 
            </Styled.Button__Option>
            <Styled.Button__Option 
              onClick={()=>onClick_ChangeLanguage('ko')}
              active={languageCurrent === 'ko'}
            > 한국어 
            </Styled.Button__Option>
          </div>
        </Styled.Div__Setting_Content_Section>
        
      </Styled.Div__Setting_Content>
        
        
    </Styled.Div__Setting>
  );
}

Setting.defaultProps = {};

export default Setting;


