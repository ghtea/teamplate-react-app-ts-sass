import styled from 'styled-components';


export const Div__SoloDestination = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  background-color: transparent; 
  color: #000;
  
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	
	& > *:nth-child(1) {
	  margin-left: 10px;
	  
	  & > a {
	    color: ${({theme})=>theme.color.Nav.nav2_link___font};
	  
  	  &:hover {
  	    color: ${({theme})=>theme.color.Nav.nav2_link___font__hover};
  	  }
	  }
	
	}
  
`;


