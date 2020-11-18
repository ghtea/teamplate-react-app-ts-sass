import styled from 'styled-components';

export const Div__Notification = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: ${({theme})=>theme.size.device.minWidth_xs}px; 
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: fixed;
  top: 20px;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;


