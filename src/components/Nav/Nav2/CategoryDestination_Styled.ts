import styled from 'styled-components';

export const Div__CategoryDestination = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: auto;
  height: auto;
  
	&:hover {
	  
	  & > div:nth-child(1) > div:nth-child(1) > a {
	    color: ${c.Nav.nav2_link___font__hover};
	  }
	  
	  & > div:nth-child(1) > div:nth-child(2) {
	    ${m.transform(`rotate(180deg) translateY(1px)`)}
	  }
	}
  
`}`;



export const Div__CategoryDestination_Title = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("center")}
  ${m.align_items("flex-end")}
  
  width: auto;
	heigth: auto;
	
	& > * {
	  width : auto;
	}
	& a {
	  color: ${c.Nav.nav2_link___font};
	}
	
`}`;



export const Div__CategoryDestination_Modal = styled.div<{spotlighted: boolean}>
`${( { theme:{mixins: m, colors: c, sizes: s}, spotlighted } )=>`

  width: 200px; 
  
  /* 모바일에서 타이틀 클릭으로 온오프가능하게 */
  display: none;
  ${spotlighted && m.display( `flex` )}
  
  position: absolute;
  z-index: 400;
  ${m._calc('top', `100% + 10px`)}
  
  
  /*
    ${m.box_shadow(`0px 0px 3px 3px ${c.Nav.nav2_modal___box_shadow}`)}
  */
  
`}`;



// http://apps.eky.hk/css-triangle-generator/
// TraiangleBack is for border effect of traiangle
export const Div__CategoryDestination_Modal_TriangleFront = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: 0;
  height: 0;
  border-style: solid;
  content: "";
  position: absolute;
  
  ${m._calc('bottom', `100% - 1px`)}
  z-index: 401;
  border-width: 10px;
  border-color: transparent transparent ${c.Nav.nav2_modal___bg} transparent;
  
`}`;


export const Div__CategoryDestination_Modal_TriangleBack = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: 0;
  height: 0;
  border-style: solid;
  content: "";
  
  position: absolute;
  ${m._calc('bottom', `100% - 2px`)}
  z-index: 399;
  
  border-width: 12px;
  border-color: transparent transparent ${c.Nav.nav2_modal___border} transparent;
  
  ${ m.filter(`drop-shadow(0px 0px 3px ${c.Nav.nav2_modal___drop_shadow})`) }
  
`}`;


export const Div__CategoryDestination_Modal_TriangleBackground = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  width: 100%;
  height: 10px;
  
  position: absolute;
  ${m._calc('bottom', `100% - 1px`)}

  /*background-color:red;*/
`}`;
  


export const Div__CategoryDestination_Modal_Box = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  
  background-color: ${c.Nav.nav2_modal___bg};
  color: ${c.Nav.nav2_modal___font};
  
  border: 1px solid ${c.Nav.nav2_modal___border};
  
  z-index: 400;
  
  ${m.box_shadow(`0px 0px 5px 2px ${c.Nav.nav2_modal___box_shadow}`)}

  border-radius: 4px;
  
`}`;
  
  
export const Div__Link = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  height: 40px;
  
  ${m.display("flex")}
  ${m.flex_flow("column","nowrap")}
  ${m.justify_content ("center")}
  ${m.align_items("center")}
  
  
  &:first-child { border-radius: 4px 4px 0 0; }
  
  &:last-child { border-radius: 0 0 4px 4px; }
  
  border-collapse: separate; 
  
  
  &:hover {
    background-color: ${c.Nav.nav2_modal___bg__hover};
  }
  
`}`;
