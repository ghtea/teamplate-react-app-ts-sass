import device from './theme/device';
import palette from './theme/palette';

export type Theme = typeof themeLight; // This is the type definition for my theme object.


//  basic: [ '#ffffff', '#e8ebee', '#d0d6dc', '#bcc4cd', '#a7b3be', '#95a3b1', '#8796a6', '#788a9b', '#6a7d90', '#627384', '#596978', '#505e6d', '#45525e', '#3d4752', '#323b43', '#293038', '#1e2429', '#16191d', '#0d0f12', '#070809', '#000000' ],

export const themeLight = {
  
  light: true,
  
  device,
  
  
  color: {
    
    GlobalStyle: {
      body___bg: palette.basic['95'],
      body___font: palette.basic['25'],
      
      div___bg: 'transparent',
      div___font: 'inherit',
      div___border: 'transparent',
      
      a___font: 'inherit',
      
      button___bg: 'transparent',
      button___font: 'inherit',
      button___border: palette.basic['50'],
      
      button___bg__hover: 'transparent',
      button___font__hover: 'inherit',
      button___border__hover: palette.basic['50'],
      
      button___bg__focus: 'transparent',
      button___font__focus: 'inherit',
      button___border__focus: palette.basic['50'],
      button___outline__focus: palette.basic['50']
    },
    
    Content : {
      
    },
    
    Nav : {
      
    }
    
    
  }
}



/*
export const themeDark : Theme = {
  
  light: false,
  
}
*/