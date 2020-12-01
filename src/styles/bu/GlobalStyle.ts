import styled, {createGlobalStyle} from 'styled-components';
//import Immutable from 'immutable';


// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins

const GlobalStyle = createGlobalStyle
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  
  body {
    
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("flex-start")}
    ${m.align_items("center")}
    
    ${m.box_sizing("border-box")}
    
    background-color: ${c.GlobalStyle.body___bg};
    color: ${c.GlobalStyle.body___font };
    
    width: 100%; min-width: ${ s.device.minWidth_xs}px; 
    height: auto;
    
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    
    position: relative;
    
    margin: 0px 0px 0px 0px; 
    padding: 0px 0px 0px 0px; 
    
  }
  
  
  div {
  
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("flex-start")}
    ${m.align_items("center")}
    
    width: 100%; 
    height: auto;
    
    ${m.box_sizing("border-box")}
    
    background-color: ${c.GlobalStyle.div___bg};
    color: ${c.GlobalStyle.div___font };
    
    font-size: 1rem;
    
    position: relative;
    z-index: inherit;
    
    overflow: visible;
    
  }
  
  
  
  button {
  
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("center")}
    ${m.align_items("center")}
    
    width: auto; 
    height: auto;
    
    ${m.box_sizing("border-box")}
    
    background-color: ${c.GlobalStyle.button___bg};
    color: ${c.GlobalStyle.button___font };
    
    border: 1px solid ${c.GlobalStyle.button___border };     
    
    font-size: 1rem;
    border-radius: 4px;
    
    font-family: 'Noto Sans KR', sans-serif;
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    cursor: pointer;
    
  }
  
  
  a {
  
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("flex-start")}
    ${m.align_items("center")}
    
    width: auto; 
    height: auto;
    
    ${m.box_sizing("border-box")}
    
    color: ${c.GlobalStyle.a___font };
    
    font-size: inherit;
    
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
    
    cursor: pointer;
  }
  
  
  input {
  
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("center")}
    ${m.align_items("center")}
    
    width: auto; 
    height: auto;
    
    ${m.box_sizing("border-box")}
    
    background-color: ${c.GlobalStyle.input___bg};
    color: ${c.GlobalStyle.input___font };
    
    border: 1px solid ${c.GlobalStyle.input___border };     
    border-radius: 0px;
    
    font-size: 1rem;
    
    position: static;
    
    margin: 0px 0px 0px 0px ; /* top right bottom left */
    padding: 0px 0px 0px 8px; /* top right bottom left */
    
    &:focus {
      
      background-color: ${c.GlobalStyle.input___bg__focus};
      color: ${c.GlobalStyle.input___font__focus };
    
      border: 2px solid ${c.GlobalStyle.input___border__focus };     
      border-radius: 0px;
      outline: 1px solid ${c.GlobalStyle.input___outline__focus };    /*   more limits compared to borders  https://developer.mozilla.org/en-US/docs/Web/CSS/outline  */
      
      ${m.box_shadow(  `0px 0px 15px 2px ${c.GlobalStyle.input___box_shadow__focus}`)}
      
    }
  }
  
  
  
  header {
  
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("flex-start")}
    ${m.align_items("center")}
    
    width: 100%; 
    height: auto;
    
    ${m.box_sizing("border-box")}
    
    background-color: ${c.GlobalStyle.header___bg};
    color: ${c.GlobalStyle.header___font };
    
    font-size: 1rem;
    
    position: relative;
    z-index: inherit;
    
    
  }
  
  

`}`;

export default GlobalStyle;