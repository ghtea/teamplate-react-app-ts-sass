import device from './theme/device';
import palette from './theme/palette';

export type Theme = typeof themeLight; // This is the type definition for my theme object.


//  basic: [ '#ffffff', '#e8ebee', '#d0d6dc', '#bcc4cd', '#a7b3be', '#95a3b1', '#8796a6', '#788a9b', '#6a7d90', '#627384', '#596978', '#505e6d', '#45525e', '#3d4752', '#323b43', '#293038', '#1e2429', '#16191d', '#0d0f12', '#070809', '#000000' ],

export const themeLight = {
  
  light: true,
  
  device,
  
  
  color: {
    
    GlobalStyle: {
      body___bg: palette.basic['100'],
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
      nav1_bar___bg: palette.main['65'],
      nav1_bar___font: palette.main['100'],
      nav1_bar___border: palette.main['60'],
      
      nav1_board___bg: palette.basic['85'],
      nav1_board___font: palette.basic['25'],
      
      nav2_title___logo: palette.main['60'],
      nav2_title___font: palette.basic['20'],
      nav2_title___border: palette.basic['80'],
      
      nav2_link___font: palette.basic['40'],
      nav2_link___font_hover: palette.basic['10'],
      
      nav2_tool___icon: palette.basic['70']
    }
    
    
  }
}



/*
export const themeDark : Theme = {
  
  light: false,
  
}
*/