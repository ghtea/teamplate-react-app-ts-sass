import styled from 'styled-components';

export const Div__FullPage = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  color: #000;
  
  width: 100%;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
`;


export const Div__FullPage_Background = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  background-color: ${ ({theme})=>theme.color.FullPage.full_page___bg };  
    
  color: #000;
  
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border-radius: 0px;
  
  position: fixed;
  z-index: -100;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;

