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


// UserCircle
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
        viewBox="0 0 496 512"
      >
        <path 
          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
        </path>
      </svg>
      
    </Div__Icon>
  );
};
Icon.defaultProps = propsDefault;
//

export default Icon;
