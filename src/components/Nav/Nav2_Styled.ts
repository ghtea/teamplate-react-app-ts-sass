import styled from 'styled-components';

export const Header__Nav2 = styled.header<{showingNav: boolean}>
`${( { theme:{mixins: m, colors: c, sizes: s}, showingNav } )=>`

  display: none;
  visibility: ${ showingNav ?  'visible' : 'hidden'};
  
	@media (min-width: ${ s.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	  
	  ${m.display("flex")}
    ${m.flex_flow("row","nowrap")}
    ${m.justify_content ("space-around")}
    ${m.align_items("center")}
  
  
    border-bottom: 1px solid ${ c.Nav.nav2_name_app___border };  /* border: 2px dashed #aaa; */
    
    
    width: 100%;
    height: ${ s.nav.height_nav2 }px;   /* we should let 'Content' know this value too */ 
    
    position: fixed;
    z-index: 200;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
  	
  	& > div:nth-child(1) {
      width: 200px;
    }
    & > div:nth-child(2) {
      width: calc(100% - 400px);  // 768-280 ~
    }
    & > div:nth-child(3) {
      width: 200px;
    }
  	
	}
  
`}`;



export const Div__NameApp = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("flex-start")}
  ${m.align_items("center")}
  
	
	& > *:nth-child(1) {
	  margin-left: 10px;
	}
  & > *:nth-child(2) {
    color: ${ c.Nav.nav2_name_app___font };  
  
	  font-size: 1.4rem;
	  font-weight: bold;
	  
	  margin-left: 10px;
	}
  
`}`;


export const Div__CollectionDestination = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("center")}
  ${m.align_items("center")}
  
  color: ${ c.Nav.nav2_link___font  };  
  
  & > div:nth-child(n+2){
    margin-left: 10px;
  }
  
  & > div {
    
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("center")}
    ${m.align_items("center")}
    
    width: auto;
    height: auto;
    
    cursor: pointer;
    
    &:hover {
      color: ${ c.Nav.nav2_link___font__hover  };  
    }
  }
`}`;


export const Div__CollectionTool = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("flex-end")}
  ${m.align_items("center")}
   
	& > *:last-child {
	  margin-right: 10px;
	}
  
  
`}`;

export const Div__Tool = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("flex-end")}
  ${m.align_items("center")}
  
  width: auto;
  height: auto;
  
	& > *:nth-child(1) {
	  margin-right: 10px;
	}
  
  & > a {
  
    ${m.display("flex")}
    ${m.flex_flow("row","nowrap")}
    ${m.justify_content ("flex-end")}
    ${m.align_items("center")}
    
    color: ${ c.Nav.nav2_link___font  };  
    width: auto;
    
    
    & > div:nth-child(n+2){
      margin-left: 8px;
    }
    
    & > div {
      width: auto;
      color: inherit;  
    }
    
    &:hover {
      color: ${ c.Nav.nav2_link___font__hover};  
    }
    
    
  }
  
`}`;

export const A__LinkMain = styled.a
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  color: ${ c.Nav.nav2_link_main___font  }; 
  background-color: ${ c.Nav.nav2_link_main___bg }; 
  
  padding: 4px 8px 4px 8px; /* top right bottom left */
  
  border-radius: 5px;
  
  font-weight: regular;
  
`}`;