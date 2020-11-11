import styled from 'styled-components';

export const Div__Nav = styled.div
` 
  & > *:nth-child(1){
    display: flex;
  }
  & > *:nth-child(2){
    display: none;
  }
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
	  & > *:nth-child(1){
      display: none;
    }
    & > *:nth-child(2){
      display: flex;
    }
	}
  
`;
