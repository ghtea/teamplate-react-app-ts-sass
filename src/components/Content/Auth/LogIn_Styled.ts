import styled from 'styled-components';

export const Div__LogIn = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  background-color: transparent; 
  color: #000;
  
  width: 100%; 
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div:nth-child(1) {
    height: 80px;
    font-size: 2rem;
  }
  & > div:nth-child(2) {
    height: 60px;
    font-size: 1.6rem;
  }
  & > div:nth-child(3), div:nth-child(4) {
    height: 80px;
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: flex-start; align-items: flex-start;
    
    & > * {
      width: auto;
    }
  }

  
`;

