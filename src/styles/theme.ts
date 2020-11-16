
import size from './theme/size';
import {colorLight} from './theme/color';

export type Theme = typeof themeLight; // This is the type definition for my theme object.


//  basic: [ '#ffffff', '#e8ebee', '#d0d6dc', '#bcc4cd', '#a7b3be', '#95a3b1', '#8796a6', '#788a9b', '#6a7d90', '#627384', '#596978', '#505e6d', '#45525e', '#3d4752', '#323b43', '#293038', '#1e2429', '#16191d', '#0d0f12', '#070809', '#000000' ],

export const themeLight = {
  
  light: true,
  
  size,
  
  color: colorLight
}



/*
export const themeDark : Theme = {
  
  light: false,
  
}
*/