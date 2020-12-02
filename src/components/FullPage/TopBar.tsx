import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";
import useTranslationTyped from 'tools/hooks/useTranslationTyped'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import IconHome from 'svgs/basic/IconHome';

import styles from './TopBar.module.scss';


type PropsTopBar = {};

function TopBar({}: PropsTopBar) {
  
  const history = useHistory();
  const { t } = useTranslationTyped();
  
  // event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, 
   
  const onClick_LinkInsideApp = useCallback(
    (destination:string) => {  history.push(destination);
    },[history]
  );
  
  return (
    <div className={`${styles['root']}`}
      onClick={(event)=>onClick_LinkInsideApp('/')}
    >
    
      <div>
        <IconHome
          listKeyTheme={['colors', 'Nav', 'nav2_name_app___logo']}
          width={'36px'}
          height={'36px'}
        />
      </div>
      
      <div> 
        <a> {t('Nav', 'NameApp')}
        </a>
      </div>
        
    </div>
  );
}

TopBar.defaultProps = {};

export default TopBar;
