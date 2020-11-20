import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import CategoryDestination from './Nav2/CategoryDestination';
import SoloDestination from './Nav2/SoloDestination';

import * as Styled from './Nav2_Styled';
import IconHome from 'svgs/basic/IconHome';
import IconSignIn from 'svgs/basic/IconSignIn';
import IconGlobe from 'svgs/basic/IconGlobe';


type PropsNav2 = {};

function Nav2({}: PropsNav2) {
  
  let history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  const showingNav:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['all']);
  const nameTheme:string = useSelector((state: StateRoot) => state['status']['current']['theme']['name']);
  const languageCurrent:string = useSelector((state: StateRoot) => state['status']['current']['language']);

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
    <Styled.Header__Nav2
      showingNav={showingNav}
    >
      <Styled.Div__Title>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          <IconHome
            listKeyTheme={['color', 'Nav', 'nav2_title___logo']}
            width={'36px'}
            height={'36px'}
          />
        </button>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          React App
        </button>
      </Styled.Div__Title>
      
      
      <Styled.Div__CollectionDestination>
        <CategoryDestination 
          idCategory={'categoryA'}
          listIdLink={['linkA1', 'linkA2']}
        />
  		  <SoloDestination 
  		    keySolo={'solo1'}
  		  />
      </Styled.Div__CollectionDestination>

      
      <Styled.Div__CollectionTool>
      
        <Styled.Div__Tool>
          <a
            onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')}
          >
            <IconSignIn
              color={'inherit'}
              width={'28px'}
              height={'28px'}
            />
            <div> {t('Nav.log_in')} </div>
          </a>
        </Styled.Div__Tool>
        
        <Styled.Div__Tool>
          <a
            onClick={()=>onClick_ChangeLanguage()}
          >
            <IconGlobe
              color={'inherit'}
              width={'24px'}
              height={'24px'}
            />
          </a>
        </Styled.Div__Tool>
        
      </Styled.Div__CollectionTool>
      
    </Styled.Header__Nav2>
  );
}

Nav2.defaultProps = {};

export default Nav2;



// <Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Color') } />