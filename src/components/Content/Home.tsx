import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";


import * as actionsNotification from 'store/actions/notification';

import * as Styled from './Home_Styled';


type PropsHome = {};

function Home({}: PropsHome) {
  
  const dispatch = useDispatch();
  
  const onClick_AddTestingBanner = useCallback(
    (code:string) => {
      dispatch(actionsNotification.return__ADD_DELETE_BANNER({
        code: code
      }) )
    }, []
  );
  
  return (
    <Styled.Div__Home>
        <div> This app is a template for React app </div>
        
        <div> 
          <button
            onClick={event=>onClick_AddTestingBanner('test1')}
          > test 1 
          </button>
        </div>
        
        <div> 
          <button
            onClick={event=>onClick_AddTestingBanner('test2')}
          > test 2 
          </button>
        </div>
        
    </Styled.Div__Home>
  );
}

Home.defaultProps = {};

export default Home;
