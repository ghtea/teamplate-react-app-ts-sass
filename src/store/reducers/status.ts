import {handleActions} from 'redux-actions';

import * as status from '../actions/status';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'


// 
https://react-etc.vlpt.us/07.typescript-redux.html


const stateInitial = {
  
  loading: {
    user: false
    
  },
  
  ready: {
    user: false
  },
  
  current: {
    
    color: {    // 주의! 각 페이지에서 Editor 
      
      model: 'solo',
      
      solo: {
        position: 'main',
        mode: 'hsl',
        opacity: false 
      },
      
      duo: {
        position: 'main',
        mode: 'hsl'
      },
      
      series: {
        position: '10'
      }

    }
    
  },
  
  showing: {
    
    color:{
      editor: true
    }
    
  }
  
});





const statusReducer = handleActions({
  
  
  [status.REPLACE_STATUS]: (state, action) => {
    //console.log('hiiii');
    
    const location = action['payload']['location'] || [];
    
    if (!location || location.length === 0) {
      return state;
    }
    else {
      return state.setIn(location, Immutable.fromJS(action['payload']['replacement']) );
    }
    
  },
  
  
}, stateInitial);


export default statusReducer;