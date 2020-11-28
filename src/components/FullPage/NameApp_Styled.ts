import styled from 'styled-components';

export const Div__NameApp = styled.div
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("flex-start")}
  ${m.align_items("center")}
  
  width: auto; 
  height: 50px;
  
  font-size: 1rem;
  
  & > *:nth-child(1) {
    width: auto;
	}
  & > *:nth-child(2) {
    width: auto;
    color: ${ c.FullPage.full_page_name_app___font };  
  
	  font-size: 1.4rem;
	  font-weight: bold;
	  
	  margin-left: 10px;
	}
`}`;


