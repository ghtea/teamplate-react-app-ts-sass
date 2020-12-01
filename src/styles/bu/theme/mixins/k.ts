

const mixinsPartial = {

    _keyframes: (name: string, value: string):string => {
      
    let result:string = `
        @-webkit-keyframes ${name} ${value}
        @-moz-keyframes ${name} ${value}
        @-ms-keyframes ${name} ${value}
        @-o-keyframes ${name} ${value}
        @keyframes ${name} ${value}
    `
    
    return result;
  }
  

};


export default mixinsPartial;