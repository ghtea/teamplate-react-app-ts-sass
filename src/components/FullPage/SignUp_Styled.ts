import styled from 'styled-components';

export const Div__SignUp = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;
  
  width: ${({theme})=>theme.sizes.device.minWidth_xs}px; 
  height: auto;
  font-size: 1rem;
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
  height: 50px;
  font-size: 1.6rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 20px 0px 0px 0px; /* top right bottom left */
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
  height: 56px;
  
  border-radius: 0px;
  
  position: relative;

  &:nth-child(n+2){
    margin-top: 5px;
  }
  
  
  
  & > input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    
    border-radius: 5px;
    
    &:focus::placeholder { color:transparent; }
    &:focus::-webkit-input-placeholder { color:transparent; }
    &:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
    &:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
    &:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
    
    &:focus {
      padding-top: 12px; 
      border-radius: 5px;
    }
    &:focus + div{
      display: block;
    }
  }
  
  
  & > div:nth-child(2) {
    
    display: none;
    font-size: 0.8rem;
    color: ${ ({theme})=>theme.colors.Content.label___font };  
    
    position: absolute;
    top: 1px;
    left: 8px;
  }
  
  
  
`;



export const Div__SignUp_Identity = styled(Div__SignUp_Input)
`
  & > div:nth-child(2) {
    height: 40px;
    margin-top: 2px;
    & > input {
      width: 100%;
      height: 100%;
    }
  }
  
  & > div:nth-child(3) {
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
  
    height: 22px;
  }
`


export const Div__SignUp_Password = styled(Div__SignUp_Input)
`
  & > div:nth-child(2), & > div:nth-child(3) {
    height: 36px;
    & > input {
      width: 100%;
      height: 100%;
    }
  }
  
  & > div:nth-child(3) {
    margin-top: 2px;
  }
  
  & > div:nth-child(3) {
    margin-top: 4px;
  }
  
  & > div:nth-child(4) {
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
  
    height: 22px;
  }
`



export const Div__SignUp_CollectionLink = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-end; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent; 
  color: #000;
  
  width: 100%; min-width: 100%; max-width: 100%;
  height: 40px;
  
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div {
    width: auto;
  }
  
  & > * {
    margin-left: 10px;
    & > a {
      font-size: 1.1rem;
    }
  }
  
`;



export const Div__SignUp_Enter = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  
  background-color: transparent;
  
  width: 100%;
  height: auto;
  
  position: static;
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > button {
  
    background-color: ${ ({theme})=>theme.colors.GlobalStyle.button_main___bg };
    color: ${ ({theme})=>theme.colors.GlobalStyle.button_main___font };
  
    width: 100%;
    height: 44px;
    
    font-weight: normal;
    border-radius: 4px;
    font-size: 1.2rem;
  }
  
`;


export const Div__SignUp_Social = styled.div
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;

  background-color: ${ ({theme})=>theme.colors.GlobalStyle.button_main___bg };
  color: ${ ({theme})=>theme.colors.GlobalStyle.button_main___font };
  
  width: 100%;
  height: 44px;
  
  font-weight: normal;
  border-radius: 4px;
  
  position: static;
  
  margin: 10px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div {
    font-size: 1rem;
  }
  
`;

