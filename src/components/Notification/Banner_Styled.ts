import styled, {keyframes} from 'styled-components';
import {Banner as TypeBanner} from 'store/reducers/notification';
import {KindSituation} from 'language/catalogSituation';


/* 이런 방식이 안된다... T.T
  background-color: ${({theme, situation})=>theme.color.Notification[`banner___bg__${situation}`]};
*/
  
export const Div__Banner = styled.div<{kindSituation: KindSituation}>

`${( { theme:{mixins: m, colors: c, sizes: s}, kindSituation } )=>`


  ${m.display("flex")}
  ${m.flex_flow("row","nowrap")}
  ${m.justify_content ("space-between")}
  ${m.align_items("center")}
  
  
  width: ${ s.device.minWidth_xs}px; 
  height: auto;
  
  
  border-radius: 8px;
  
  padding: 10px 0px 10px 0px; /* top right bottom left */
  
  
  &:nth-child(n+2) { 
    margin-top: 5px;
    padding: 0px 0px 0px 0px; /* top right bottom left */
    opacity: 0.9;
  }
  
  
  &.success {
    background-color: ${c.Notification.banner___bg__success};
    color: ${c.Notification.banner___font__success};
    border: 2px solid ${c.Notification.banner___border__success};
    
    ${m.box_shadow( `0px 0px 10px 2px ${ c.Notification.banner___box_shadow__success}` )}
    
  }
  
  &.hint {
    background-color: ${c.Notification.banner___bg__hint};
    color: ${c.Notification.banner___font__hint};
    border: 1px solid ${c.Notification.banner___border__hint};
    
    ${m.box_shadow( `0px 0px 10px 2px ${ c.Notification.banner___box_shadow__hint}` )}
    
  }
  
  &.error {
    background-color: ${c.Notification.banner___bg__error};
    color: ${c.Notification.banner___font__error};
    border: 1px solid ${c.Notification.banner___border__error};
    
    ${m.box_shadow( `0px 0px 10px 2px ${ c.Notification.banner___box_shadow__error}` )}
    
  }
  
  &.warning {
    background-color: ${c.Notification.banner___bg__warning};
    color: ${c.Notification.banner___font__warning};
    border: 1px solid ${c.Notification.banner___border__warning};
    
    ${m.box_shadow( `0px 0px 10px 2px ${ c.Notification.banner___box_shadow__warning}` )}
    
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
  
`}`;


export const Button__Banner_Delete = styled.button
`${( { theme:{mixins: m, colors: c, sizes: s} } )=>`

  & > div:nth-child(1){
	    ${m.display("flex")}
	  }
	  & > div:nth-child(2){
	    display: none;
	  }
	  
	&:hover {
	  & > div:nth-child(1){
	    display: none;
	  }
	  & > div:nth-child(2){
	    ${m.display("flex")}
	  }
	}
	
  
`}`;

const keyframes_ScaleGuage = keyframes`
  0% { 
    transform: scaleX(1);
  }
  100% { 
    transform: scaleX(0); 
  }
`

export const Div__Banner_Guage = styled.div<{banner: TypeBanner}>
`${( { theme:{mixins: m, colors: c, sizes: s}, banner } )=>`

  width: inherit;
  height: 1px;
  
  position: absolute;
  top: 0px;
  left: 0px;
  
  transform-origin: 0% 50%;
  
  animation: ${keyframes_ScaleGuage} ${ banner.msTime / 1000 }s linear normal forwards;
  
  &.success {
    background-color: ${c.Notification.banner___border__success};
  }
  
  &.hint {
    background-color: ${c.Notification.banner___border__hint};
  }
  
  &.error {
    background-color: ${c.Notification.banner___border__error};
  }
  
  &.warning {
    background-color: ${c.Notification.banner___border__warning};
  }
`}`;