import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";


import * as actionsNotification from 'store/actions/notification';

import * as Styled from './Home_Styled';


type PropsHome = {};

function Home({}: PropsHome) {
  
  const dispatch = useDispatch();
  
  const onClick_AddTestingBanner = useCallback(
    () => {
      dispatch(actionsNotification.return__ADD_DELETE_BANNER({
        code: 'test'
      }) )
    }, []
  );
  
  return (
    <Styled.Div__Home>
        <div> This app is a template for React app </div>
        
        <div> 
          <button
            onClick={event=>onClick_AddTestingBanner()}
          > test </button>
        </div>
    </Styled.Div__Home>
  );
}

Home.defaultProps = {};

export default Home;
