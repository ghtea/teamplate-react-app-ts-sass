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
  
  
  /*
  
  background-color: ${({theme})=>theme.colors.Notification.banner___bg__error};
  color: ${({theme})=>theme.colors.Notification.banner___font__error};
   
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.colors.Notification.banner___box_shadow__error};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.colors.Notification.banner___box_shadow__error };
  
  */
  
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  overflow: auto;
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
    cursor: pointer;
  }
`;


export const Div__Setting_Content = styled.div
` 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-between; align-items: flex-start;
  
  border-top: 1px solid ${({theme})=>theme.colors.Popup.popup___border };
   
  box-sizing: border-box;
  
  /*
  
  background-color: ${({theme})=>theme.colors.Notification.banner___bg__error};
  color: ${({theme})=>theme.colors.Notification.banner___font__error};
  border: 1px solid ${({theme})=>theme.colors.Notification.banner___border__error};
    
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.colors.Notification.banner___box_shadow__error};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.colors.Notification.banner___box_shadow__error };
  
  */
  
  width: calc(100% - 20px);
  height: auto;  min-height: 50px;
  flex-grow: 1;
  flex-shrink: 1;
  
  overflow: auto;
  
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 10px 0px; /* top right bottom left */
  
`;



export const Div__Setting_Content_Section = styled.div
` 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: flex-start;
  
  box-sizing: border-box;
  
  /*
  
  background-color: ${({theme})=>theme.colors.Notification.banner___bg__error};
  color: ${({theme})=>theme.colors.Notification.banner___font__error};
  border: 1px solid ${({theme})=>theme.colors.Notification.banner___border__error};
    
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.colors.Notification.banner___box_shadow__error};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.colors.Notification.banner___box_shadow__error };
  
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
    height: 24px;
    font-size: 0.9rem;
  }
  
  & > div:nth-child(2){ /* options */
    display: flex;
    flex-flow: row nowrap;   /* row */
    justify-content: flex-start; align-items: center;
    
    background-color: ${({theme})=>theme.colors.Popup.setting_option_behind___bg};
    padding: 0px 2px 0px 2px; /* top right bottom left */
    border-radius: 5px;
    
    width: auto;
    height: 32px;
    
    & > div {
      width: auto;
      height: 26px;
      border-radius: 5px;
      padding: 0px 4px 0px 4px; /* top right bottom left */
      
      
      cursor: pointer;
      
      &:nth-child(n+2){
        margin-left: 8px;
        
      }
    }
  }
`;


export const Button__Option = styled.div<{active:boolean}>
`
  background-color: ${({theme, active})=>(active===true) ? 
    theme.colors.Popup.setting_option___bg :
    'transparent'};
`