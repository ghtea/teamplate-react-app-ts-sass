import styled from 'styled-components';

export const Div__CategoryDestination = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  
  width: auto;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
	@media (min-width: ${({theme})=>theme.size.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	 
	}
	
  
`;









export const Div__CategoryDestination_Title = styled.div`
  width: auto;
	heigth: auto;
`


export const Div__CategoryDestination_Popup = styled.div<{spotlighted: boolean}>
`
  width: 100%;   /* this make align center!!! */
  
  /* 모바일에서 타이틀 클릭으로 온오프가능하게 */
  display: ${props=>props.spotlighted ? 'flex' : 'none' };
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: absolute;
  z-index: 400;
  top: 12px;
  left: 0;
  
  overflow: visible;
  /*box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5); not works */
  
`


export const Div__Link = styled.div`
  height: 40px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:first-child { border-radius: 4px 4px 0 0; }
  
  &:last-child { border-radius: 0 0 4px 4px; }
  
  border-collapse: separate; 
  
  
  &:hover {
  
  }
  
`
