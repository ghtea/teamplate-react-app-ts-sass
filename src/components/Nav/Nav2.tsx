import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import useTranslationTyped from 'tools/hooks/useTranslationTyped'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import CategoryDestination from './Nav2/CategoryDestination';
import SoloDestination from './Nav2/SoloDestination';

import * as Styled from './Nav2_Styled';


import IconHome from 'svgs/basic/IconHome';
import IconSignIn from 'svgs/basic/IconSignIn';
import IconSetting from 'svgs/basic/IconSetting';
import IconGlobe from 'svgs/basic/IconGlobe';


type PropsNav2 = {};

function Nav2({}: PropsNav2) {
  
  let history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslationTyped();
  


  const showingNav:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['all']);
   
  const readyUser:boolean = useSelector((state: StateRoot) => state['status']['ready']['user']);
  
  

  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  const onClick_ShowSetting = useCallback(
    () => {
      dispatch(actionsStatus.return__REPLACE({ 
        listKey: ['showing', 'popup', 'setting'],
        replacement: true
      }))
    },[]
  );
  
  
  return (
    <Styled.Header__Nav2
      showingNav={showingNav}
    >
      <Styled.Div__NameApp>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          <div>
            <IconHome
              listKeyTheme={['colors', 'Nav', 'nav2_name_app___logo']}
              width={'36px'}
              height={'36px'}
            />
          </div>
        </button>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          {t('Nav', 'NameApp')}
        </button>
      </Styled.Div__NameApp>
      
      
      <Styled.Div__CollectionDestination>
        <CategoryDestination 
          idCategory={'System'}
          listIdLink={['State', 'Styles', 'Language']}
        />
  		  <SoloDestination 
  		    idSolo={'Diary'}
  		  />
      </Styled.Div__CollectionDestination>

      
      <Styled.Div__CollectionTool>
        
        <Styled.Div__Tool>
          <a
            onClick={()=>onClick_ShowSetting()}
          >
            <IconSetting
              color={'inherit'}
              width={'24px'}
              height={'24px'}
            />
          </a>
        </Styled.Div__Tool>
        
        
        { !readyUser &&
          <Styled.Div__Tool>
            <Styled.A__LinkMain onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')} >
              {t('Nav', 'LogIn')}
            </Styled.A__LinkMain>
          </Styled.Div__Tool>
        }
        
        { readyUser &&
          <Styled.Div__Tool> 
            logged in
          </Styled.Div__Tool>
        }
        
      </Styled.Div__CollectionTool>
      
    </Styled.Header__Nav2>
  );
}

Nav2.defaultProps = {};

export default Nav2;


// 브라우저 상의 특정 요소 위치 파악
// https://stackoverflow.com/questions/37200019/how-to-get-elements-clientx-and-clienty-of-an-element

// <Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Color') } />



/*
<a onClick={(event)=>onClick_LinkInsideApp(event, '/sign-up')} >
            {t('Nav', 'SignUp')}
          </a>
*/