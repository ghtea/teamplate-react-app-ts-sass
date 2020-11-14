import React from "react";
import styled from 'styled-components';

type PropsIcon = {
  className: string;
  width: string;
  height: string;
  color?: string;
  listKeyTheme?: string[];
} & typeof propsDefault;

const propsDefault = {  
  className: '',
  width: '30px',
  height: '30px',
  color: '#000'
};


type PropsDivIcon = {
  width: string;
  height: string;
  color: string;
  listKeyTheme?: string[];
};




export const Div__Icon = styled.div<PropsDivIcon>
`
  
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: none; 
  color: ${props=> (props.listKeyTheme) ? (props.listKeyTheme).reduce((obj: any, key: string) =>  (obj || {})[key], props.theme) : props.color };
  width: ${props=>props.width};
  height: ${props=>props.height };
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;


// Home
const Icon = ({ className, width, height, color, listKeyTheme }: PropsIcon) => {
  return (
    <Div__Icon
      className={className}
      width={width}
      height={height}
      color={color}
      listKeyTheme={listKeyTheme}
    >
      <svg
        width="100%"
        height="100%"
        fill="currentColor"
        className=""
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path 
          d="M570.24 215.42L323.87 13a56 56 0 0 0-71.75 0L5.76 215.42a16 16 0 0 0-2 22.54L14 250.26a16 16 0 0 0 22.53 2L64 229.71V288h-.31v208a16.13 16.13 0 0 0 16.1 16H496a16 16 0 0 0 16-16V229.71l27.5 22.59a16 16 0 0 0 22.53-2l10.26-12.3a16 16 0 0 0-2.05-22.58zM464 224h-.21v240H352V320a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v144H111.69V194.48l.31-.25v-4L288 45.65l176 144.62z">
        </path>
      </svg>
      
    </Div__Icon>
  );
};
Icon.defaultProps = propsDefault;
//

export default Icon;
