import React, {useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";

import styled, {ThemeProvider }  from 'styled-components';

import {useSelector, useDispatch} from "react-redux";
import * as actionsStatus from 'store/actions/status';

import Nav1 from "./Nav/Nav1";
import Nav2 from "./Nav/Nav2";

import * as Styled from './Nav_Styled';

// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsNav = {};

function Nav({}: PropsNav) {
  
  const dispatch = useDispatch();
  let location = useLocation();
  
  useEffect(() => {
    
    if ( (/^\/log-in/).test(location.pathname) || (/^\/sign-up/).test(location.pathname) ) {
      dispatch(actionsStatus.return_REPLACE({
        listKey:['showing', 'nav', 'all'],
        replacement: false
      }))
    }
    else {
      dispatch(actionsStatus.return_REPLACE({
        listKey:['showing', 'nav', 'all'],
        replacement: true
      }))
    }
    
  }, [location]);
  
  
  return (
  
    <>
      <Nav1/>
      <Nav2/>
    </>
    
  );
}

export default Nav;


