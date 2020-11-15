import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';


//import IconLogIn from 'svgs/basic/IconLogIn';

import * as Styled from './LogIn_Styled';


type PropsLogIn = {};

function LogIn({}: PropsLogIn) {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    console.log('hi');
    dispatch(actionsStatus.return_REPLACE({
      listKey:['showing', 'nav', 'all'],
      replacement: false
    }))
      
  });


  return (
    <div>
        log in
    </div>
  );
}

LogIn.defaultProps = {};

export default LogIn;
