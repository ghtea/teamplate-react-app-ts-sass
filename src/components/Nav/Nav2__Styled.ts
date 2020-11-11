import styled from 'styled-components';

export const Div__Nav2 = styled.div
`
  display: none;
  
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
	  
	  display: flex;
    flex-flow: row nowrap;   /* row */
    justify-content: space-evenly; align-items: center;
    
    box-sizing: border-box;
    border: 0px solid #fff;  /* border: 2px dashed #aaa; */
    background-color: none; 
    color: #000;
    
    width: 100%;
    height: 60px;      /* we should let 'Content' know this value too */ 
    font-size: 1rem;
    border-radius: 0px;
    
    position: static;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
  	 
  	
  	& > div:nth-child(1) {
      width: 120px;
    }
    & > div:nth-child(2) {
      width: calc(100% - 240px);  // 768-240 ~
    }
    & > div:nth-child(3) {
      width: 120px;
    }
  	
	}
  
`;




export const Div__CollectionLink = styled.div
`
  
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: none; 
  color: #000;
  
  width: 100%; 
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
  
  & > div {
    width: auto;
  }
`;