import styled from 'styled-components';

export const Div__SignUp = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: ${({theme})=>theme.size.device.minWidth_xs}px; 
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;



export const Div__SignUp_NameApp = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;

  background-color: transparent; 
  color: #000;
  
  width: 100%;
  height: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;


export const Div__SignUp_TitlePage = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%;
  height: 60px;
  font-size: 1.5rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;


export const Div__SignUp_Input = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: flex-start;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%;
  height: 80px;
  font-size: 1.6rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: space-evenly; align-items: flex-start;
    
    color: ${ ({theme})=>theme.color.Content.label___font };  
    
  }
  
  & input {
    width: 240px;
    height: 24px;
  }
  
  & > *:nth-child(n+2){
    margin-top: 2px;
  }
`;



export const Div__SignUp_Identity = styled(Div__SignUp_Input)
`
  
`


export const Div__SignUp_Password = styled(Div__SignUp_Input)
`
  
`



export const Div__SignUp_CollectionLink = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%; min-width: 100%; max-width: 100%;
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




export const Div__SignUp_Enter = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;

  background-color: transparent; 
  color: #000;
  
  width: 100%;
  height: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;