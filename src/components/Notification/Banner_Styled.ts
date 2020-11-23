import styled, {keyframes} from 'styled-components';
import {Banner as TypeBanner} from 'store/reducers/notification';
import {KindSituation} from 'language/catalogSituation';


/* 이런 방식이 안된다... T.T
  background-color: ${({theme, situation})=>theme.color.Notification[`banner___bg__${situation}`]};
*/
  
export const Div__Banner = styled.div<{kindSituation: KindSituation}>
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: space-betwwen; align-items: center;
  
  box-sizing: border-box;
  
  
  width: ${({theme})=>theme.size.device.minWidth_xs}px; 
  height: auto;
  font-size: 1rem;
  
  border-radius: 8px;
  
  position: relative;
  
  padding: 10px 0px 10px 0px; /* top right bottom left */
  
  &:nth-child(n+2) { 
    margin-top: 5px;
    padding: 0px 0px 0px 0px; /* top right bottom left */
    opacity: 0.9;
  }
  
  
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
    
    -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__hint};
    box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__hint };
  }
  
  &.error {
    background-color: ${({theme})=>theme.color.Notification.banner___bg__error};
    color: ${({theme})=>theme.color.Notification.banner___font__error};
    border: 1px solid ${({theme})=>theme.color.Notification.banner___border__error};
    
    -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error};
    box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__error };
  }
  
  &.warning {
    background-color: ${({theme})=>theme.color.Notification.banner___bg__warning};
    color: ${({theme})=>theme.color.Notification.banner___font__warning};
    border: 1px solid ${({theme})=>theme.color.Notification.banner___border__warning};
    
    -webkit-box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__warning};
    box-shadow: 0px 0px 10px 2px ${ ({theme})=>theme.color.Notification.banner___box_shadow__warning };
  }
  
  
  & > div:nth-child(1){
    width: 50px;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: inherit;
  }
  &:nth-child(n+2) { 
    & > div:nth-child(1){
      visibility: hidden;
    }
  }
  
  
  
  & > div:nth-child(2){
    width: calc(100% - 100px);
  }
  &:nth-child(n+2) { 
    & > div:nth-child(2){
      font-size: 0.8rem;
    }
  }
  
  & > div:nth-child(3){
    width: 50px;
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: inherit;
  }
  &:nth-child(n+2) { 
    & > div:nth-child(3){
      border-left-style: none;
    }
  }
`;


export const Button__Banner_Delete = styled.button
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


const keyframes_ScaleGuage = keyframes`
  0% { 
    transform: scaleX(1);
  }
  100% { 
    transform: scaleX(0); 
  }
`

export const Div__Banner_Guage = styled.div<{banner: TypeBanner}>
`
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  width: inherit;
  height: 1px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: absolute;
  top: 0px;
  left: 0px;
  
  transform-origin: 0% 50%;
  animation: ${keyframes_ScaleGuage} ${ props => props.banner.msTime / 1000 }s linear normal forwards;
  
  &.success {
    background-color: ${({theme})=>theme.color.Notification.banner___border__success};
  }
  
  &.hint {
    background-color: ${({theme})=>theme.color.Notification.banner___border__hint};
  }
  
  &.error {
    background-color: ${({theme})=>theme.color.Notification.banner___border__error};
  }
  
  &.warning {
    background-color: ${({theme})=>theme.color.Notification.banner___border__warning};
  }
`;