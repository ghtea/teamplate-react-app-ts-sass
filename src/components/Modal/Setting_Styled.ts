import styled from 'styled-components';
import {Div__Modal} from '../Modal_Styled';

export const Div__Setting = styled(Div__Modal)
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
	
`}`;



export const Div__Setting_Header = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`


  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("space-between")}
  ${m.align_items("center")}
  
  ${m.flex(0, 0, 'auto')}
  
  width: 100%;
  height: 50px;
  
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 5px 20px 0px 20px; /* top right bottom left */
  
  & > div:nth-child(1){
    width: auto;
    font-size: 1.2rem;
  }
  & > div:nth-child(2){
    width: auto;
    cursor: pointer;
  }
`}`;


export const Div__Setting_Content = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  
  ${m.display("flex")}
  ${m.flex_flow("column","nowrap")}
  ${m.justify_content ("space-between")}
  ${m.align_items("flex-start")}
  
  ${m.flex(1,1)}
  width: calc(100% - 20px);
  height: auto;  min-height: 50px;
  
  border-top: 1px solid ${c.Modal.modal___border };
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 10px 0px; /* top right bottom left */
  
`}`;



export const Div__Setting_Content_Section = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  ${m.display("flex")}
  ${m.flex_flow("column","nowrap")}
  ${m.justify_content ("flex-start")}
  ${m.align_items("flex-start")}
  
  width: auto;
  height: auto;
  
  & > div:nth-child(1){ /* title */
    width: auto;
    height: 24px;
    font-size: 0.9rem;
  }
  
  & > div:nth-child(2){ /* options */
    
    ${m.display("flex")}
    ${m.flex_flow("row","nowrap")}
    ${m.justify_content ("flex-start")}
    ${m.align_items("center")}
    
    width: auto;
    height: 32px;
    
    background-color: ${c.Modal.setting_option_behind___bg};
    
    border-radius: 5px;
    
    padding: 0px 2px 0px 2px; /* top right bottom left */
    
    
    
    & > div {
      width: auto;
      height: 26px;
      border-radius: 5px;
      padding: 0px 4px 0px 4px; /* top right bottom left */
      
      cursor: pointer;
      
      &:nth-child(n+2){
        margin-left: 8px;
        
      }
    }
  }
`}`;


export const Button__Option = styled.div<{active:boolean}>
`${( { theme:{mixins: m, colors: c, sizes: s}, active} )=>`

  background-color: ${ (active===true) ? 
    c.Modal.setting_option___bg :
    'transparent'
  };
`}`;
