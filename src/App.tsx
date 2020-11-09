import React from 'react';
import styled, {ThemeProvider }  from 'styled-components';

import { themeLight, themeDark } from "./styles/theme";
import Default_Styled from './styles/Default_Styled';

function App() {
  return (
    
    <ThemeProvider theme={themeLight}>
    
      <Default_Styled />
      
    </ThemeProvider>
    
  );
}

export default App;
