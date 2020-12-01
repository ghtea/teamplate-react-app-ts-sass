

const mixinsPartial = {

    transform: (value: string):string => {
      
    let result:string = `
        -webkit-transform: ${value};
        -moz-transform:  ${value};
        -ms-transform:  ${value};
        -o-transform:  ${value};
        transform:  ${value};
    `
    
    return result;
  },

};


export default mixinsPartial;