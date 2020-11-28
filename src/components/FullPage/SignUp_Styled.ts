import styled from 'styled-components';

export const Div__SignUp = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  width: ${s.device.minWidth_xs}px; 
  height: auto;
  
`}`;


export const Div__SignUp_TitlePage = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  width: 100%;
  height: 50px;
  
  font-size: 1.6rem;
  
  margin: 20px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`}`;


export const Div__SignUp_Input = styled.div
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
      ${m.placeholder(`
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



export const Div__SignUp_Identity = styled(Div__SignUp_Input)
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  & > div:nth-child(2) {
  
    height: 40px;
    margin-top: 2px;
    
    & > input {
      width: 100%;
      height: 100%;
    }
  }
  
  & > div:nth-child(3) {
    
    ${m.display("flex")}
    ${m.flex_flow("row","nowrap")}
    ${m.justify_content ("center")}
    ${m.align_items("center")}
    
    height: 22px;
  }
`}`;


export const Div__SignUp_Password = styled(Div__SignUp_Input)
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  & > div:nth-child(2), & > div:nth-child(3) {
    height: 36px;
    
    & > input {
      width: 100%;
      height: 100%;
    }
  }
  
  & > div:nth-child(3) {
    margin-top: 2px;
  }
  
  & > div:nth-child(3) {
    margin-top: 4px;
  }
  
  & > div:nth-child(4) {
  
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("center")}
    ${m.align_items("center")}
    
    height: 22px;
  }
`}`;



export const Div__SignUp_CollectionLink = styled.div
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


export const Div__SignUp_Enter = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("column","nowrap")}
  ${m.justify_content ("center")}
  ${m.align_items("center")}
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > button {
  
    background-color: ${ c.GlobalStyle.button_main___bg };
    color: ${ c.GlobalStyle.button_main___font };
  
    width: 100%;
    height: 44px;
    
    border-radius: 4px;
    
    font-weight: normal;
    font-size: 1.2rem;
  }
  
`}`;
