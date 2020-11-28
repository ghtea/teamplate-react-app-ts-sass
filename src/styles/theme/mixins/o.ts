

const mixinsPartial = {

  // value should be integer
  order: (value: number = 0 ): string => {
    
    let result:string = `
      -webkit-box-ordinal-group: ${value} + 1;
      -moz-box-ordinal-group: ${value} + 1;
      -webkit-order: ${value};
      -ms-flex-order: ${value};
      order: ${value};
    `
    
    return result;
  }
  
  
  
  

};


export default mixinsPartial;