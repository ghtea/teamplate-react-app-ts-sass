import React from "react";
import styled from 'styled-components';

type PropsIcon = {
  
  width: string;
  height: string;
  
  className?: string;
  color?: string;
  
  listKeyTheme?: string[];
  kind?: string; // thin, light, regular, solid, ...
  
} & typeof propsDefault;

const propsDefault = {  
  width: '30px',
  height: '30px',
  
  color: '#000',
  className: ''
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



// Success
const Icon = ({ width, height, color, className, listKeyTheme, kind }: PropsIcon) => {
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
        viewBox="0 0 512 512"
      >
      {(!kind || kind === 'regular') && 
        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
        </path>
      }
      {(kind === 'light') && 
        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z">
        </path>
      }
      {(kind === 'solid') && 
        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
        </path>
      }
        
      </svg>
      
    </Div__Icon>
  );
};
Icon.defaultProps = propsDefault;
//

export default Icon;
