const mixins = {
    
    return_display: (valueFull:string) => {
      
      const listValueEach = valueFull.split(" ");
      
      if (listValueEach[0]==='flex'){
        return `
          display: -webkit-box;
          display: -moz-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
        `
      }
      
      
      
    }
    
};


export default mixins;