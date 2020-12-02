import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";
import useTranslationTyped from 'tools/hooks/useTranslationTyped'
import Cookies from 'js-cookie';

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


import IconX from 'svgs/basic/IconX';

import './Setting.scss';
import '../Modal.scss';


type PropsSetting = {};

function Setting({}: PropsSetting) {
  
  const dispatch = useDispatch();
  const history = useHistory();

  const languageCurrent:string = useSelector((state: StateRoot) => state['status']['current']['language']);
  const optionThemeCurrent:string = useSelector((state: StateRoot) => state['status']['current']['theme']['option']);

  const { t } = useTranslationTyped();
  
  const onClick_HideSetting = useCallback(
    () => {
      dispatch(actionsStatus.return__REPLACE({ 
        listKey: ['showing', 'modal', 'setting'],
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
    <div className={'modal__root, setting__root'}>
      
      <div className={'setting__header'}>
        <div> {t('Modal', 'Setting', 'Title')} </div>
        <div
          onClick={()=>onClick_HideSetting()}
        > 
          <IconX
            listKeyTheme={['colors', 'Modal', 'setting_header___icon']}
            width={'24px'}
            height={'24px'}
          />
        </div>
      </div>
      
      
      <div className={'setting__content'}>
        
        <div className={'setting__content--section'}>
          <div> {t('Modal', 'Setting', 'Theme')} </div>
          <div>
            <div className={`setting__button-option active----${optionThemeCurrent === 'auto'}`}
              onClick={()=>onClick_ChangeOptionTheme('auto')}
            > auto
            </div>
            <div className={`setting__button-option active----${optionThemeCurrent === 'light'}`}
              onClick={()=>onClick_ChangeOptionTheme('light')}
            > light
            </div>
            <div className={`setting__button-option active----${optionThemeCurrent === 'dark'}`}
              onClick={()=>onClick_ChangeOptionTheme('dark')}
            > dark
            </div>
          </div>
        </div>
        
        <div className={'setting__content'}>
          <div> {t('Modal', 'Setting', 'Language')} </div>
          <div>
            <div className={`setting__button-option active----${languageCurrent === 'en'}`}
              onClick={()=>onClick_ChangeLanguage('en')}
            > English
            </div>
            <div className={`setting__button-option active----${languageCurrent === 'ko'}`}
              onClick={()=>onClick_ChangeLanguage('ko')}
            > 한국어
            </div>
          </div>
        </div>
        
      </div>
        
        
    </div>
  );
}

Setting.defaultProps = {};

export default Setting;


