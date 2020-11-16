import styled from 'styled-components';

export const Div__TemplateBasic = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%; min-width: 100%; max-width: 100%;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
	@media (min-width: ${({theme})=>theme.size.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	 
	}
	
  
`;


export const Div__TemplateAdvanced = styled.div
` 
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  position: absolute;
  top: 0px; right: 0px; bottom: 0px; left: 0px;
  
  overflow: auto;
  
  cursor: pointer;
`;


export const Div__TemplateAnimation = styled.div
`
  
  
`;
