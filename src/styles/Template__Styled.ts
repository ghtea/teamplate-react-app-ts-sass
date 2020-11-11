import styled from 'styled-components';

export const Div__TemplateBasic = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: none; 
  color: #000;
  
  width: 100%; min-width: 100%; max-width: 100%;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
	 
	}
  
`;


export const Div__TemplateAdvanced = styled.div
`
  position: absolute;
  top: 0px; right: 0px; bottom: 0px; left: 0px;
  
  overflow: auto;
  
  cursor: pointer;
`;


export const Div__TemplateAnimation = styled.div
`
  
  
`;