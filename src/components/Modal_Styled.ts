import styled from 'styled-components';

export const Div__Modal = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: calc(100vw - 20px); max-width: ${s.device.minWidth_xs - 20}px;
  height: auto; max-height: 90vh;  min-height: 100px;
  
  background-color: ${c.Modal.modal___bg};
  color: ${c.Modal.modal___font};
  
  border: 1px solid ${c.Modal.modal___border};
    
  ${m.box_shadow(  `0px 0px 10px 2px ${c.Modal.modal___box_shadow}`)}
  
  border-radius: 12px;
  
  position: fixed;
  z-index: 600;
  top: 5vh;
  
`}`;


export const Div__Shadow = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  width: 100vw;
  height: 100vh;
  
  background-color: ${ c.Modal.shadow___bg };
  
  position: fixed;
  z-index: 599;
  
`}`;
