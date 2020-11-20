import styled from 'styled-components';

export const Div__Popup = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  background-color: ${ ({theme})=>theme.color.FullPage.full_page___bg };  
    
  color: #000;
  
  width: 100%;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: fixed;
  top: 0px;
  z-index: 0;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
  
	@media (min-width: ${({theme})=>theme.size.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	    top: 0px;
	}
  
`;

