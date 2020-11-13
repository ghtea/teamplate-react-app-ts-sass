import styled, {createGlobalStyle} from 'styled-components';
//import Immutable from 'immutable';


const GlobalStyle = createGlobalStyle`
  
  body {
    
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    box-sizing: border-box;
    border: 0px solid #fff;  /* border: 2px dashed #aaa; */
    background-color: #eee; 
    color: #222;
    
    width: 100%; min-width: 320px;
    height: auto;
    
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    
    border-radius: 0px;
    
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    
  }
  
  div {
  
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    box-sizing: border-box;
    border: 0px solid #fff;  /* border: 2px dashed #aaa; */
    background-color: none; 
    color: #000;
    
    width: 100%; 
    height: auto;
    font-size: 1rem;
    border-radius: 0px;
    
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
  }
  
  
  button {
  
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
    
    box-sizing: border-box;
    border: 1px solid #999;  /* border: 2px dashed #aaa; */
    background-color: none; 
    color: #000;
    
    width: auto; 
    height: auto;
    font-size: 1rem;
    border-radius: 0px;
    
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    cursor: pointer;
  }
`

export default GlobalStyle;