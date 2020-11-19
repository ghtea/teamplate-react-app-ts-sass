import styled from 'styled-components';

export const Div__Banner = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: space-betwwen; align-items: center;
  
  box-sizing: border-box;
  
  
  width: ${({theme})=>theme.size.device.minWidth_xs}px; 
  height: auto;
  font-size: 1rem;
  border-radius: 8px;
  
  position: fixed;
  top: 20px;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 10px 0px 10px 0px; /* top right bottom left */
  
  -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow};
  box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow };

  &.success {
    background-color: ${({theme})=>theme.color.Notification.banner___bg__success};
    color: ${({theme})=>theme.color.Notification.banner___font__success};
    border: 2px solid ${({theme})=>theme.color.Notification.banner___border__success};
    
    -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__success};
    box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__success };
  }
  
  &.hint {
    background-color: ${({theme})=>theme.color.Notification.banner___bg__hint};
    color: ${({theme})=>theme.color.Notification.banner___font__hint};
    border: 1px solid ${({theme})=>theme.color.Notification.banner___border__hint};
  }
  
  &.error {
    background-color: ${({theme})=>theme.color.Notification.banner___bg__error};
    color: ${({theme})=>theme.color.Notification.banner___font__error};
    border: 1px solid ${({theme})=>theme.color.Notification.banner___border__error};
  }
  
  &.warning {
    background-color: ${({theme})=>theme.color.Notification.banner___bg__warning};
    color: ${({theme})=>theme.color.Notification.banner___font__warning};
    border: 1px solid ${({theme})=>theme.color.Notification.banner___border__warning};
  }
  
  
  & > div:nth-child(1){
    width: 50px;
    border-right: 2px solid red;
  }
  & > div:nth-child(2){
    width: calc(100% - 100px);
  }
  & > div:nth-child(3){
    width: 50px;
    border-left: 2px solid red;
  }
`;


export const Div__Banner_ButtonClose = styled.div
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
  
  
  
  & > div:nth-child(1){
	    display: flex;
	  }
	  & > div:nth-child(2){
	    display: none;
	  }
	  
	&:hover {
	  & > div:nth-child(1){
	    display: none;
	  }
	  & > div:nth-child(2){
	    display: flex;
	  }
	}
	
  
`;
