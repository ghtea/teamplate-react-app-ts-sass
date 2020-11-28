import styled from 'styled-components';


export const Div__SoloDestination = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("flex-start")}
  ${m.align_items("center")}
	
	& > *:nth-child(1) {
	  margin-left: 10px;
	  
	  & > a {
	    color: ${c.Nav.nav2_link___font};
	  
  	  &:hover {
  	    color: ${c.Nav.nav2_link___font__hover};
  	  }
	  }
	
	}
  
`}`;



