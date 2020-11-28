

const mixinsPartial = {

  flex_flow: (direction: 'row' | 'row-reverse' | 'column' | 'column-reverse', wrap: 'nowrap' | 'wrap' | 'wrap-reverse' ): string => {
    return `
      flex-flow: ${direction} ${wrap};
    `
  },
  
  
  // 96
  flex_grow: (value: number = 1):string => {
      
    let result:string = `
      -webkit-box-flex: ${value};
      -moz-box-flex: ${value};
      -webkit-flex-grow: ${value};
      -ms-flex: ${value};
      flex-grow: ${value};
    `
    
    return result;
  },
  
  
  flex_shrink: (value: number = 0):string => {
      
    let result:string = `
      -webkit-flex-shrink: ${value};
      -moz-flex-shrink: ${value};
      -ms-flex: ${value};
      flex-shrink: ${value};
    `
    
    return result;
  },

  flex_basis: (value: string = 'auto'):string => {
      
    let result:string = `
      -webkit-flex-basis: ${value};
      flex-basis: ${value};
    `
    
    return result;
  },
  
  
  // 아직 파악 못한 부분 있다 
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins
  flex: (grow: number = 1,  shrink:number = 0, basis: string = 'auto'):string => {
      
    let result:string = `
      -webkit-box: ${grow};
      -moz-box: ${grow};
      -webkit-flex: ${grow} ${shrink} ${basis};
      -ms-flex: ${grow} ${shrink} ${basis};
      flex: ${grow} ${shrink} ${basis};
    `
    
    return result;
  }
  
};


export default mixinsPartial;



// refs

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins



