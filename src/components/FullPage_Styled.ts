import styled from 'styled-components';

export const Div__FullPage = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  z-index: 100;
  
`}`;


export const Div__FullPage_Background = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  background-color: ${ c.FullPage.full_page___bg };  
  
  width: 100%;
  height: 100%;
  
  position: fixed;
  z-index: 10;
  
`}`;

