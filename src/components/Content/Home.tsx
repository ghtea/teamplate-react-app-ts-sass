import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import useTranslationTyped from 'tools/hooks/useTranslationTyped'

import {useSelector, useDispatch} from "react-redux";


import * as actionsNotification from 'store/actions/notification';

import * as Styled from './Home_Styled';


type PropsHome = {};

function Home({}: PropsHome) {
  
  const dispatch = useDispatch();
  const { t } = useTranslationTyped();
  
  const onClick_AddTestingBanner = useCallback(
    (codeSituation:string) => {
      dispatch(actionsNotification.return__ADD_DELETE_BANNER({
        codeSituation: codeSituation
      }) )
    }, []
  );
  
  return (
    <Styled.Div__Home>
        <div> {t('Content', 'Home', 'Welcome')} </div>
        
        <div> 
          <button
            onClick={event=>onClick_AddTestingBanner('Test1')}
          > test 1 
          </button>
        </div>
        
        <div> 
          <button
            onClick={event=>onClick_AddTestingBanner('Test2')}
          > test 2 
          </button>
        </div>
        
    </Styled.Div__Home>
  );
}

Home.defaultProps = {};

export default Home;
