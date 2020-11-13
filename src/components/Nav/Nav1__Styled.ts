import styled from 'styled-components';

export const Div__Nav1 = styled.div
`
 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-between; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: none; 
  color: #000;
  
  width: 100%;
  height: auto;      /* we should let 'Content' know this value too */ 
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
    display: none;
	}
  
`;



export const Div__Bar = styled.div
`
 
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: none; 
  color: #000;
  
  width: 100%;
  height: 40px;      /* we should let 'Content' know this value too */ 
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div:nth-child(1) {
    width: 40px;
  }
  & > div:nth-child(2) {
    width: calc(100% - 80px);  // 320-80 ~
  }
  & > div:nth-child(3) {
    width: 40px;
  }
  
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
    display: none;
	}
  
`;


export const Div__Board = styled.div
`
 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: #bbb; 
  color: #000;
  
  width: 100%;
  height: calc(100vh - 40px);      /* we should let 'Content' know this value too */ 
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */

  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
    display: none;
	}
  
`;
