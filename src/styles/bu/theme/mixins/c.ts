

const mixinsPartial = {

  _calc: (property:string, value: string):string => {
      
    let result:string = `
      ${property}: -webkit-calc(${value});
      ${property}: -moz-calc(${value});
      ${property}: calc(${value});
    `
    
    return result;
  }

};


export default mixinsPartial;