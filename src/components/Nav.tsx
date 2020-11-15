import React from 'react';

import Nav1 from "./Nav/Nav1";
import Nav2 from "./Nav/Nav2";

import * as Styled from './Nav_Styled';

// TS  https://velog.io/@velopert/create-typescript-react-component
type PropsNav = {};

function Nav({}: PropsNav) {
  return (
  
    <>
      <Nav1/>
      <Nav2/>
    </>
    
  );
}

export default Nav;


