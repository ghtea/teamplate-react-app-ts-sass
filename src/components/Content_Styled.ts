import styled from 'styled-components';

export const Div__Content = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  top: ${ s.nav.height_nav1 }px;
  z-index: 0;
  
	@media (min-width: ${s.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	    top: ${s.nav.height_nav2}px;
	}
  
`}`;

