import React, {useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";

import styled, {ThemeProvider }  from 'styled-components';

import {useSelector, useDispatch} from "react-redux";
import * as actionsStatus from 'store/actions/status';

import { themeLight } from "./styles/theme";
import GlobalStyle from 'styles/GlobalStyle';
import 'styles/importFonts.css';

import Nav from "./components/Nav";
import Content from "./components/Content";

// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsApp = {};

function App({}: PropsApp) {
  
  
  const dispatch = useDispatch();
  
  
  return (
    
    <ThemeProvider theme={themeLight}>
    
      <GlobalStyle />
      
      <Nav/>
      <Content/>
  
    </ThemeProvider>
    
  );
}

export default App;


