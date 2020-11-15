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
  color: ${props=> (props.listKeyTheme) ? (props.listKeyTheme).reduce((obj: any, key: string) =>  (obj || {})[key], props.theme) : props.color } !important;
  width: ${props=>props.width} !important;
  height: ${props=>props.height } !important;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
`;



// X
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
        viewBox="0 0 320 512"
      >
        <path 
          d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z">
        </path>
      </svg>
      
    </Div__Icon>
  );
};
Icon.defaultProps = propsDefault;
//

export default Icon;
