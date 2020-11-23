import styled from 'styled-components';

export const Div__Popup = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  
  background-color: ${({theme})=>theme.color.Popup.popup___bg};
  color: ${({theme})=>theme.color.Popup.popup___font};
  border: 1px solid ${({theme})=>theme.color.Popup.popup___border};
    
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Popup.popup___box_shadow};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Popup.popup___box_shadow };
  
  
  width: calc(100vw - 20px); max-width: ${({theme})=> (theme.size.device.minWidth_xs - 20)}px;
  height: auto; max-height: 90vh;  min-height: 100px;
  font-size: 1rem;
  border-radius: 12px;
  
  position: fixed;
  z-index: 600;
  top: 5vh;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
	@media (min-width: ${({theme})=>theme.size.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl

	}
	
`;


export const Div__Shadow = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  
  background-color: ${ ({theme})=> theme.color.Popup.shadow___bg };
  
  border-style: none;
  
  width: 100vw;
  height: 100vh;
  font-size: 1rem;
  
  position: fixed;
  z-index: 599;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
`;