
import palette from './palette';

type Color = typeof colorLight;

export const colorLight = {
    
    GlobalStyle: {
      body___bg: palette.basic['100'],
      body___font: palette.basic['25'],
      
      div___bg: 'transparent',
      div___font: 'inherit',
      div___border: 'transparent',
      //div___border: palette.basic['80'],
      
      a___font: 'inherit',
      
      button___bg: 'transparent',
      button___font: 'inherit',
      button___border: 'transparent',
      //button___border: palette.basic['50'],
      
      button___bg__hover: 'transparent',
      button___font__hover: 'inherit',
      button___border__hover: palette.basic['50'],
      
      button___bg__focus: 'transparent',
      button___font__focus: 'inherit',
      button___border__focus: palette.basic['50'],
      button___outline__focus: palette.basic['50'],
      
      button_main___bg: palette.main['50'],
      button_main___font: palette.basic['100'],
      button_main___border: 'transparent',
      
      input___bg: palette.basic['100'],
      input___font: palette.basic['25'],
      input___border: palette.basic['70']
    },
    
    Content : {
      label___font: palette.basic['40']
      
      
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
      nav2_link___font_hover: palette.basic['20'],
      
      nav2_tool___icon: palette.basic['70']
    },
    
    FullPage : {
      full_page___bg: palette.basic['95']
      
    },
    
    
  };