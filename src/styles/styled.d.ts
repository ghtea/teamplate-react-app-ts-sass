import  { DefaultTheme  } from  'styled-components';
import { Theme } from './theme'; // Import type from above file

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}



// 아주 잘 정리해줌
// https://velog.io/@hwang-eunji/styled-component-typescript