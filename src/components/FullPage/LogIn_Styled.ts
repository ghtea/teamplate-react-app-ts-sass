import styled from 'styled-components';

export const Div__LogIn = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: ${ s.device.minWidth_xs}px; 
  height: auto;
  
  margin: 20px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
`}`;




export const Div__LogIn_TitlePage = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: 100%;
  height: 50px;
  
  font-size: 1.6rem;
  
`}`;


export const Div__LogIn_Input = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  
  width: 100%;
  height: 56px;
  
  &:nth-child(n+2){
    margin-top: 5px;
  }
  

  
  & > input {
  
    width: 100%;
    height: 100%;
    
    border-radius: 5px;
    
    
    &:focus {
      ${m._placeholder(`
          color:transparent;
      `)}
      
      padding-top: 12px; 
      border-radius: 5px;
      
      & + div {
        display: block;
      }
    }
    

  }
  
  
  & > div:nth-child(2) {
    
    display: none;
    font-size: 0.8rem;
    color: ${ c.Content.label___font };  
    
    position: absolute;
    top: 1px;
    left: 8px;
  }
  
  
  
`}`;




export const Div__LogIn_Identity = styled(Div__LogIn_Input)
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
`}`;

export const Div__LogIn_Password = styled(Div__LogIn_Input)
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
`}`;


export const Div__LogIn_CollectionLink = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("flex-end")}
  ${m.align_items("center")}
  
  width: 100%; 
  height: 40px;
  
  & > div {
    width: auto;
  }
  
  & > * {
    margin-left: 10px;
    & > a {
      font-size: 1.1rem;
    }
  }
`}`;


export const Div__LogIn_Enter = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("column","nowrap")}
  ${m.justify_content ("center")}
  ${m.align_items("center")}
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > button {
  
    background-color: ${  c.GlobalStyle.button_main___bg };
    color: ${  c.GlobalStyle.button_main___font };
  
    width: 100%;
    height: 44px;
    
    font-weight: normal;
    border-radius: 4px;
    font-size: 1.2rem;
  }
  
`}`;

export const Div__LogIn_Social = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("space-around")}
  ${m.align_items("center")}
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > button {
    
    width: 90px;
    height: 44px;
    
    color: ${ c.GlobalStyle.button_main___font };
    border-radius: 4px;
    
    
    
    &:nth-child(1){
      background-color: ${ c.Share.button_google___bg };
    }
    &:nth-child(2){
      background-color: ${ c.Share.button_facebook___bg };
    }
    &:nth-child(3){
      background-color: ${ c.Share.button_twitter___bg };
    }
  }
  
`}`;