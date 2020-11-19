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



// Error
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
        viewBox="0 0 448 512"
      >
      {(!kind || kind === 'regular') && 
        <path d="M184 160c13.24 0 24-10.76 24-24s-10.76-24-24-24-24 10.76-24 24 10.76 24 24 24zm80 0c13.24 0 24-10.76 24-24s-10.76-24-24-24-24 10.76-24 24 10.76 24 24 24zm-128.15 68.54l-7.33 34.61c-2.67 12.62 5.42 24.85 16.45 24.85h158.08c11.03 0 19.12-12.23 16.45-24.85l-7.33-34.61C345.91 205.11 368 169.01 368 128 368 57.31 303.53 0 224 0S80 57.31 80 128c0 41.01 22.09 77.11 55.85 100.54zM224 48c52.94 0 96 35.89 96 80 0 23.3-12.84 45.57-35.21 61.1l-26.2 18.18 6.61 31.2.32 1.52h-83.03l.32-1.52 6.61-31.2-26.2-18.18C140.84 173.57 128 151.3 128 128c0-44.11 43.07-80 96-80zm214.7 418.95L284.31 400l154.39-66.95c8.03-3.71 11.53-13.21 7.82-21.24l-6.71-14.52c-3.71-8.02-13.21-11.52-21.23-7.82L224 373.85 29.42 289.48c-8.02-3.7-17.53-.2-21.23 7.82l-6.71 14.52c-3.71 8.02-.21 17.53 7.82 21.24L163.69 400 9.3 466.95c-8.03 3.7-11.53 13.21-7.82 21.24l6.71 14.52c3.71 8.02 13.21 11.52 21.23 7.82L224 426.15l194.58 84.37c8.02 3.7 17.53.2 21.23-7.82l6.71-14.52c3.71-8.02.21-17.53-7.82-21.23z">
        </path>
      }
      {(kind === 'light') && 
        <path d="M264 160c13.24 0 24-10.76 24-24s-10.76-24-24-24-24 10.76-24 24 10.76 24 24 24zm-80 0c13.24 0 24-10.76 24-24s-10.76-24-24-24-24 10.76-24 24 10.76 24 24 24zm-48.97 67.93l-6.41 30.24c-3.21 15.15 6.5 29.82 19.73 29.82h151.3c13.23 0 22.94-14.67 19.73-29.82l-6.41-30.24C346.25 204.49 368 168.67 368 128 368 57.31 303.53 0 224 0S80 57.31 80 128c0 40.67 21.75 76.49 55.03 99.93zM224 32c61.76 0 112 43.06 112 96 0 28.32-15.11 55.21-41.46 73.77l-17.25 12.15 4.37 20.64 4.54 21.43H161.79l4.54-21.43 4.37-20.64-17.25-12.15C127.11 183.21 112 156.32 112 128c0-52.94 50.24-96 112-96zm45.12 384l174.03-65.94c4.06-1.74 5.94-6.45 4.2-10.51l-6.31-14.71a7.996 7.996 0 0 0-10.5-4.2L224 398.91 17.47 320.65a7.996 7.996 0 0 0-10.5 4.2L.66 339.56c-1.74 4.06.14 8.77 4.2 10.51L178.88 416 4.85 481.94c-4.06 1.74-5.94 6.45-4.2 10.51l6.31 14.7a7.996 7.996 0 0 0 10.5 4.2L224 433.09l206.53 78.26a7.996 7.996 0 0 0 10.5-4.2l6.31-14.7c1.74-4.06-.14-8.77-4.2-10.51L269.12 416z">
        </path>
      }
      {(kind === 'solid') && 
        <path d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z">
        </path>
      }
        
      </svg>
      
    </Div__Icon>
  );
};
Icon.defaultProps = propsDefault;
//

export default Icon;
