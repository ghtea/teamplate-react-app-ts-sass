import styled from 'styled-components';

export const Header__Nav1 = styled.header<{showingNav: boolean}>
`${( { theme:{mixins: m, colors: c, sizes: s}, showingNav } )=>`

  visibility: ${ showingNav ?  'visible' : 'hidden'};
  
  ${m.display("flex")}
  ${m.flex_flow("column","nowrap")}
  ${m.justify_content ("space-between")}
  ${m.align_items("center")}
  
  position: relative;
  top: 0px;
  z-index: 200;
  
  /*
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px; 
  */
  
	@media (min-width: ${s.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	  display: none;
	}
  
  & * {
    color: ${ c.Nav.nav1_bar___font };  
  
  }
`}`;



export const Div__Bar = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
  
  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("space-around")}
  ${m.align_items("center")}
  
  width: 100%;
  height: ${ s.nav.height_nav1 }px;     /* we should let 'Content', 'Nav1 - Board' know this value too */ 
  
  background-color: ${ c.Nav.nav1_bar___bg };  
  color: ${ c.Nav.nav1_bar___font };  
  
  border-bottom: 1px solid ${ c.Nav.nav1_bar___border };  /* border: 2px dashed #aaa; */

  z-index: 100;
  
  /*
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px; 
  */
  
  & > div:nth-child(1) {
    width: 40px;
  }
  & > div:nth-child(2) {
    width: calc(100% - 80px);  // 320-80 ~
  }
  
  ${m._keyframes('rotateIconX', 
    `{
      0% {
        ${m.transform(`transform: rotate(0deg);`)}
      }
      100% {
        ${m.transform(`transform: rotate(90deg);`)}
      }
    }`
  )}
  
  ${m._keyframes('rotateIconThreeBars', 
    `{
      0% {
        ${m.transform(`translateY(-5px);`)}
      }
      100% {
        ${m.transform(`translateY(0px);`)}
      }
    }`
  )}
  
  & > div:nth-child(3) {
    width: 40px;
    & button .IconX {
      ${m.animation(`rotateIconX 0.4s ease-out 0s 1 normal`)}
    }
    & button .IconThreeBars {
      ${m.animation(`rotateIconThreeBars 0.4s ease-out 0s 1 normal`)}
    }
  }
  
	@media (min-width: ${s.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	  display: none;
	}
  
`}`;


export const Div__Board = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`
 
  width: 100%;
  height: calc(100vh - ${ s.nav.height_nav1 }px);     /* using height of*/
  
  background-color: ${ c.Nav.nav1_board___bg };  

  position: fixed;
  top: ${ s.nav.height_nav1 }px; 
  z-index: 50;
  
  
	@media (min-width: ${s.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	  display: none;
	}
  
  & > div {
    
    ${m.display("flex")}
    ${m.flex_flow("column","nowrap")}
    ${m.justify_content ("center")}
    ${m.align_items("center")}
  
    border-bottom: 1px solid ${ c.Nav.nav1_board___border };
    
    width: calc(100% - 20px);
    height: 70px;
    
    & > a {
      color: ${ c.Nav.nav1_board___font };  
    }
    
  }
`}`;
