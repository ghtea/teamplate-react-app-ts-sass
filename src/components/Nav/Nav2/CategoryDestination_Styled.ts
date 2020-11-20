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
  
  position: relative;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
	&:hover {
	  
	  & > div:nth-child(1) > div:nth-child(1) > a {
	    color: ${({theme})=>theme.color.Nav.nav2_link___font__hover};
	  }
	  
	  & > div:nth-child(1) > div:nth-child(2) {
	    transform: rotate(180deg) translateY(1px);
	  }
	}
  
`;









export const Div__CategoryDestination_Title = styled.div`
  
  display: flex;
  
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  
  width: auto;
	heigth: auto;
	
	& > * {
	  width : auto;
	}
	& a {
	  color: ${({theme})=>theme.color.Nav.nav2_link___font};
	  
	}
	
	
`


export const Div__CategoryDestination_Popup = styled.div<{spotlighted: boolean}>
`

  width: 200px; 
  
  /* 모바일에서 타이틀 클릭으로 온오프가능하게 */
  display: ${props=>props.spotlighted ? 'flex' : 'none' };
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  
  position: absolute;
  z-index: 400;
  top: calc(100% + 10px);
  
  overflow: visible;
  /*box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5); not works */
  
`



// http://apps.eky.hk/css-triangle-generator/
// TraiangleBack is for border effect of traiangle
export const Div__CategoryDestination_Popup_TriangleFront = styled.div
`
  width: 0;
  height: 0;
  border-style: solid;
  content: "";
  position: absolute;
  
  bottom: calc(100% - 1px);
  z-index: 399;
  border-width: 12px;
  border-color: transparent transparent ${({theme})=>theme.color.Nav.nav2_popup___border} transparent;
`;


export const Div__CategoryDestination_Popup_TriangleBack = styled.div
`
  width: 0;
  height: 0;
  border-style: solid;
  content: "";
  position: absolute;
  
  bottom: calc(100%);
  z-index: 401;
  border-width: 10px;
  border-color: transparent transparent ${({theme})=>theme.color.Nav.nav2_popup___bg} transparent;
  
`;

export const Div__CategoryDestination_Popup_TriangleBackground = styled.div
`
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: calc(100% - 1px);
  background-color:red;
`;
  


export const Div__CategoryDestination_Popup_Box = styled.div
`
  z-index: 400;
  background-color: ${({theme})=>theme.color.Nav.nav2_popup___bg};
  color: ${({theme})=>theme.color.Nav.nav2_popup___font};
  border: 1px solid ${({theme})=>theme.color.Nav.nav2_popup___border};
  
`;
  
  
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
    background-color: ${({theme})=>theme.color.Nav.nav2_popup___bg__hover};
  }
  
`
