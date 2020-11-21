import styled from 'styled-components';
import {Div__Popup} from '../Popup_Styled';

export const Div__Setting = styled(Div__Popup)
`
  
	
`;



export const Div__Setting_Header = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: space-between; align-items: center;
  
  box-sizing: border-box;
  
  border-bottom: 1px solid ${({theme})=>theme.color.Popup.popup___border };
   
  /*
  
  background-color: ${({theme})=>theme.color.Notification.banner___bg__error};
  color: ${({theme})=>theme.color.Notification.banner___font__error};
   
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error };
  
  */
  
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 5px 20px 0px 20px; /* top right bottom left */
  
  & > div:nth-child(1){
    width: auto;
    font-size: 1.2rem;
  }
  & > div:nth-child(2){
    width: auto;
  }
`;


export const Div__Setting_Content = styled.div
` 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-between; align-items: flex-start;
  
  box-sizing: border-box;
  
  /*
  
  background-color: ${({theme})=>theme.color.Notification.banner___bg__error};
  color: ${({theme})=>theme.color.Notification.banner___font__error};
  border: 1px solid ${({theme})=>theme.color.Notification.banner___border__error};
    
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error };
  
  */
  
  width: calc(100% - 20px);
  height: auto;
  flex-grow: 1;
  flex-shrink: 1;
  
  overflow: auto;
  
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 5px 0px; /* top right bottom left */
  
`;



export const Div__Setting_Content_Section = styled.div
` 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: flex-start;
  
  box-sizing: border-box;
  
  /*
  
  background-color: ${({theme})=>theme.color.Notification.banner___bg__error};
  color: ${({theme})=>theme.color.Notification.banner___font__error};
  border: 1px solid ${({theme})=>theme.color.Notification.banner___border__error};
    
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error };
  
  */
  
  width: auto;
  height: auto;
  
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
  & > div:nth-child(1){ /* title */
    width: auto;
  }
  
  & > div:nth-child(2){ /* options */
    display: flex;
    flex-flow: row nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    width: auto;
    height: 36px;
    
    & > div {
      width: auto;
      &:nth-child(n+2){
        margin-left: 8px;
      }
    }
  }
`;