

const mixinsPartial = {


  align_items: (value: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' ): string => {
      
    let result:string = ``
    
    if (value==='flex-start'){
      result += `
        -webkit-box-align: start;
        -moz-box-align: start;
        -ms-flex-align: start;
      `
    }
    else if (value==='flex-end'){
      result += `
        -webkit-box-align: end;
        -moz-box-align: end;
        -ms-flex-align: end;
      `
    }
    else { 
      result += `
        -webkit-box-align: ${value};
        -moz-box-align: ${value};
        -ms-flex-align: ${value};
      `
    }
    
    result += `
      -webkit-align-items: ${value};
      align-items: ${value};
    `;
    
    return result;
  },
  
  // 94.6
  align_self: (value: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' ): string => {
      
    // No Webkit Box Fallback.
    
    let result:string = `
      -webkit-align-self: ${value};
    `
    
    if (value==='flex-start'){
      result += `
        -ms-flex-item-align: start;
      `
    }
    else if (value==='flex-end'){
      result += `
        -ms-flex-item-align: end;
      `
    }
    else { 
      result += `
        -ms-flex-item-align: ${value};
      `
    }
    
    result += `
      align-self: ${value};
    `;
    
    return result;
  },
  
  
  // 93.5
  align_content: (value: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' ): string => {
      
    // No Webkit Box Fallback.
    
    let result:string = `
      -webkit-align-content: ${value};
    `
    
    if (value==='flex-start'){
      result += `
        -ms-flex-line-pack: start;
      `
    }
    else if (value==='flex-end'){
      result += `
        -ms-flex-line-pack: end;
      `
    }
    else { 
      result += `
        -ms-flex-line-pack: ${value};
      `
    }
    
    result += `
      align-content: ${value};
    `;
    
    return result;
  }
  
  

};


export default mixinsPartial;


