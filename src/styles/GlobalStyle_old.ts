import styled, {createGlobalStyle} from 'styled-components';
//import Immutable from 'immutable';


const GlobalStyle = createGlobalStyle`
  
  html {
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    box-sizing: border-box;
  }
  
  body {
    
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    box-sizing: border-box;
  
    background-color: ${ ({theme})=>theme.colors.GlobalStyle.body___bg };  
    color: ${ ({theme})=>theme.colors.GlobalStyle.body___font };  
    
    width: 100%; min-width: ${({theme})=>theme.sizes.device.minWidth_xs}px;
    height: auto;
    
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    
    border-radius: 0px;
    
    position: relative;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    
  }
  
  div {
  
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    box-sizing: border-box;
    border: 1px solid ${ ({theme})=>theme.colors.GlobalStyle.div___border };  /* border: 2px dashed #aaa; */
    background-color: ${ ({theme})=>theme.colors.GlobalStyle.div___bg };
    color: ${ ({theme})=>theme.colors.GlobalStyle.div___font };
    
    width: 100%; 
    height: auto;
    font-size: 1rem;
    border-radius: 0px;
    
    position: static;
    z-index: auto;   /**/
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
  }
  
  
  button {
  
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
    
    box-sizing: border-box;
    border: 1px solid ${ ({theme})=>theme.colors.GlobalStyle.button___border };  /* border: 2px dashed #aaa; */
    background-color: ${ ({theme})=>theme.colors.GlobalStyle.button___bg };
    color: ${ ({theme})=>theme.colors.GlobalStyle.button___font };
    
    width: auto; 
    height: auto;
    font-size: 1rem;
    border-radius: 0px;
    font-family: 'Noto Sans KR', sans-serif;
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    cursor: pointer;
  }
  
  
  a {
  
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    box-sizing: border-box;
    color: ${ ({theme})=>theme.colors.GlobalStyle.a___font };
    
    width: auto; 
    height: auto;
    font-size: inherit;
    border-radius: 0px;
    
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    cursor: pointer;
  }
  
  
  input {
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
    
    box-sizing: border-box;
    border: 1px solid ${ ({theme})=>theme.colors.GlobalStyle.input___border };  /* border: 2px dashed #aaa; */
    background-color: ${ ({theme})=>theme.colors.GlobalStyle.input___bg };
    color: ${ ({theme})=>theme.colors.GlobalStyle.input___font };
    
    width: auto; 
    height: auto;
    font-size: 1rem;
    border-radius: 0px;
    
    position: static;
    
    margin: 0px 0px 0px 0px ; /* top right bottom left */
    padding: 0px 0px 0px 8px; /* top right bottom left */
    
    &:focus {
      background-color: ${ ({theme})=>theme.colors.GlobalStyle.input___bg__focus };
      color: ${ ({theme})=>theme.colors.GlobalStyle.input___font__focus };
      border: 2px solid ${ ({theme})=>theme.colors.GlobalStyle.input___border__focus }; 
      outline: 1px solid ${ ({theme})=>theme.colors.GlobalStyle.input___outline__focus };
      border-radius: 0px;
      
      -webkit-box-shadow: 0px 0px 15px 2px ${ ({theme})=>theme.colors.GlobalStyle.input___box_shadow__focus };
      box-shadow: 0px 0px 15px 2px ${ ({theme})=>theme.colors.GlobalStyle.input___box_shadow__focus };

    }
  }
`

export default GlobalStyle;