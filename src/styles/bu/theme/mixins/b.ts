

const mixinsPartial = {

  
  background_image: (
    listKind: ('linear-gradient' | 'url' | 'none')[],
    ...listValue: string[]
  ): string => {
    
    
    let result:string = ``;
    
    if (listKind.includes('none')){
      result = 'background-image: none;'
    }
    else {
      
      result = `background-image:`;
      
      for (var iKind = 0; iKind < 5; iKind++){
        if (listKind[iKind] === 'linear-gradient'){
          result += `
            -webkit-linear-gradient(${listValue[iKind]}),
            -moz-linear-gradient(${listValue[iKind]}),
            -ms-linear-gradient(${listValue[iKind]}),
            -o-linear-gradient(${listValue[iKind]}),
            linear-gradient(${listValue[iKind]}),
          `
        }
        else {  // 'url'
          result += `
            url(${listValue[iKind]}),
          `
        }
      }
      
      result.replace(/,$/,';')
      
    }
    
    return result;
  },
  
  
  
  border_radius: (
    value: string | [string, string, string, string], 
    position: 'all' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'all'
  ): string => {
    
    let result:string = ``;
    
    if (typeof value === 'string'){
      if (position === 'all'){
        result = `
          -webkit-border-radius: ${value}; 
          -moz-border-radius: ${value}; 
          border-radius: ${value}; 
        `
      }
      else {
        result = `
          -webkit-border-${position}-radius: ${value}; 
          -moz-border-${position}-radius: ${value}; 
          border-${position}-radius: ${value}; 
        `
      }
    }
    else {
      result = `
          -webkit-border-radius: ${value[0]} ${value[1]} ${value[2]} ${value[3]}; 
          -moz-border-radius: ${value[0]} ${value[1]} ${value[2]} ${value[3]};  
          border-radius: ${value[0]} ${value[1]} ${value[2]} ${value[3]}; 
        `
    }
    
    
    return result;
  },
  
  box_sizing: (value: 'content-box' | 'border-box' ): string => {
    
    let result:string = `
      -webkit-box-sizing: ${value};
      -moz-box-sizing: ${value};
      box-sizing: ${value};
    `
    return result;
  },
  
  
  box_shadow: (value: string ): string => {
    
    let result:string = `
      -moz-box-shadow: ${value};
      -webkit-box-shadow: ${value};
      box-shadow: ${value};
    `
    return result;
  }
  
  
  
  

};


export default mixinsPartial;