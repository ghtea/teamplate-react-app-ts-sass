import 'styled-components';
import { TypeTheme } from './theme'; // Import type from above file
declare module 'styled-components' {
  export interface ThemeDefault extends TypeTheme {} // extends the global DefaultTheme with our ThemeType.
}