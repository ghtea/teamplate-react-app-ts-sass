import styled, {createGlobalStyle} from 'styled-components';
//import Immutable from 'immutable';


const Default_Styled = createGlobalStyle`
  
  body {
    font-family: 'Noto Sans KR', 'Noto Sans JP', sans-serif;
    font-size: 16px;
    
    background-color: #eee;
    
    color: #222;
    
  }
  
  div {
    width: 100%; /* is good for */
    height: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    flex-shrink: 0;
    flex-grow: 0;
    
    box-sizing: border-box;
    
  }
  
`

export default Default_Styled;