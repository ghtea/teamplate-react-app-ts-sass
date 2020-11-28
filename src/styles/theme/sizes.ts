
export type Sizes = typeof sizes;

const sizes = {
  
  nav :{
    height_nav1: 48,
    height_nav2: 60
  },
  
  fullPage : {
    minHeight: 400
  },
  
  device : {  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
    minWidth_xs : 320,   // iPhone 5, 5s, 5c, SE     height:   568
    minWidth_s : 576,   // iPhone 6, 6s, 7, 8     height: 667
    minWidth_m : 768,   
    minWidth_l : 992,
    minWidth_xl : 1200,
    
    normalHeight_xs: 440
  }
  
};

export default sizes;