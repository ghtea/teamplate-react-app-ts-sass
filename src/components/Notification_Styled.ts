import styled from 'styled-components';

export const Div__Notification = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`


  position: fixed;
  top: 20px;
  z-index: 900;
  
	@media (min-width: ${ s.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	    top: 0px;
	}
  
`}`;

