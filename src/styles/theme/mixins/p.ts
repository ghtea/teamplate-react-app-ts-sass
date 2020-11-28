

const mixinsPartial = {


  
  placeholder: (styles:string):string => {
      
    let result:string = ``;
    
      result += `
        &::-webkit-input-placeholder {
          ${styles};
        }
        &:-moz-placeholder {
          /* FF 4-18 */
          ${styles};
        }
        &::-moz-placeholder {
          /* FF 19+ */
          ${styles};
        }
        &:-ms-input-placeholder {
          /* IE 10+ */
          ${styles};
        }
        &::-ms-input-placeholder {
          /* Microsoft Edge */
          ${styles};
        }
        &::placeholder {
          /* modern browser */
          ${styles};
        }
      `
      
    return result;
  }
  
  
  
  
  

};


export default mixinsPartial;