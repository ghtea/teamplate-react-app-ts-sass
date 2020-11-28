import * as types from 'tools/typescript/types';



const mixinsPartial = {


  
  display: (value: types.UnionSuggesting<'flex'|'inline-flex'|'block'|'inline-block'|'none', string>): string => {
      
    if (value==='flex'){
      return `
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      `
    }
    else if (value==='inline-flex'){
      return `
        display: -webkit-inline-box;
        display: -moz-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
      `
    }
    else {
      return `
        display: ${value};  
      `
    }
  }
  
  
  
  
  

};


export default mixinsPartial;