

const mixinsPartial = {

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins
// stretch, space-eveny 우선 제외.. (cross browser 에 약한)
 justify_content: (value: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' ): string => {
      
    //const listValueEach = valueFull.split(" ");
    let result:string = ``
    
    if (value==='flex-start'){
      result += `
        -webkit-box-pack: start;
        -moz-box-pack: start;
        -ms-flex-pack: start;
      `
    }
    else if (value==='flex-end'){
      result += `
        -webkit-box-pack: end;
        -moz-box-pack: end;
        -ms-flex-pack: end;
      `
    }
    else if (value==='space-between'){
      result += `
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
      `
    }
    else if (value==='space-around'){
      result += `
        -ms-flex-pack: distribute;
      `
    }
    else { // center
      result += `
        -webkit-box-pack: ${value};
        -moz-box-pack: ${value};
        -ms-flex-pack: ${value};
      `
    }
    
    result += `
      -webkit-justify-content: ${value};
      justify-content: ${value};
    `;
    
    return result;
  }
  

};


export default mixinsPartial;

