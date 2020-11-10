import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, {ThemeProvider }  from 'styled-components';

import { themeLight, themeDark } from "./styles/theme";
import GlobalStyle from './styles/GlobalStyle';

import Nav from "./routes/Nav";
import Home from "./routes/Home";


// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsApp = {};

function App({}: PropsApp) {
  return (
    
    <ThemeProvider theme={themeLight}>
    <BrowserRouter>
    
      <GlobalStyle />
      
      <Nav />

      <Switch>
      
        <Route path="/" exact={true}>
          <Home />
        </Route>
      
      </Switch>
    
    
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;


