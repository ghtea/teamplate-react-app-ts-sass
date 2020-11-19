
import palette from './palette';

type Color = typeof colorLight;

const returnColor = (listHsl:number[], opacity?:number):string => {
  if (opacity === undefined){
    return `hsl(${listHsl[0]}, ${listHsl[1]}%, ${listHsl[2]}%)`;
  }
  else if (typeof opacity === 'number'){
    return `hsla(${listHsl[0]}, ${listHsl[1]}%, ${listHsl[2]}%, ${opacity})`;
  }
  else {
    return ''
  }
}

export const colorLight = {
    
    GlobalStyle: {
      body___bg: returnColor( palette.basic['100'] ),
      body___font: returnColor( palette.basic['25'] ),
      
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
      button___border__hover: returnColor( palette.basic['50']),
      
      button___bg__focus: 'transparent',
      button___font__focus: 'inherit',
      button___border__focus: returnColor( palette.basic['50']),
      button___outline__focus: returnColor( palette.basic['50']),
      
      button_main___bg: returnColor( palette.main['50']),
      button_main___font: returnColor( palette.basic['100']),
      button_main___border: 'transparent',
      
      input___bg: returnColor( palette.basic['100']),
      input___font: returnColor( palette.basic['25']),
      input___border: returnColor( palette.basic['75']),
      
      input___bg__focus: returnColor( palette.main['100']),
      input___font__focus: returnColor( palette.basic['25']),
      input___border__focus: returnColor( palette.main['60']),
      input___outline__focus: 'transparent',
      input___box_shadow__focus: returnColor( palette.main['60'], 0.3)
    },
    
    Content : {
      label___font: returnColor( palette.basic['40'])
      
      
    },
    
    Nav : {
      nav1_bar___bg: returnColor( palette.main['65']),
      nav1_bar___font: returnColor( palette.main['100']),
      nav1_bar___border: returnColor( palette.main['60']),
      
      nav1_board___bg: returnColor( palette.basic['85']),
      nav1_board___font: returnColor( palette.basic['25']),
      
      nav2_title___logo: returnColor( palette.main['60']),
      nav2_title___font: returnColor( palette.basic['20']),
      nav2_title___border: returnColor( palette.basic['80']),
      
      nav2_link___font: returnColor( palette.basic['40']),
      nav2_link___font_hover: returnColor( palette.basic['20']),
      
      nav2_tool___icon: returnColor( palette.basic['70'])
    },
    
    FullPage : {
      full_page___bg: returnColor( palette.basic['95'])
      
    },
    
    Notification : {
      banner___box_shadow: returnColor( palette.basic['60'], 0.3),
      
      banner___bg__success: returnColor( palette.success['90']),
      banner___font__success: returnColor( palette.success['40']),
      banner___border__success: returnColor( palette.success['70']),
      banner___box_shadow__success: returnColor( palette.success['60'], 0.3),
      
      
      banner___bg__hint: returnColor( palette.hint['90']),
      banner___font__hint: returnColor( palette.hint['40']),
      banner___border__hint: returnColor( palette.hint['70']),
      
      banner___bg__error: returnColor( palette.error['90']),
      banner___font__error: returnColor( palette.error['40']),
      banner___border__error: returnColor( palette.error['70']),
      
      banner___bg__warning: returnColor( palette.warning['90']),
      banner___font__warning: returnColor( palette.warning['40']),
      banner___border__warning: returnColor( palette.warning['70'])
      
    },
    
    
  };