import produce from 'immer';
import {handleActions} from 'redux-actions';

import * as status from 'store/actions/status';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'


// https://react-etc.vlpt.us/07.typescript-redux.html

type typeState = {
  
  loading: {
    user: boolean
  },
  
  ready: {
    user: boolean
  },
  
  current: {
    
  },
  
  showing: {
    
  }
  
};


const stateInitial: typeState = {
  
  loading: {
    user: false
  },
  
  ready: {
    user: false
  },
  
  current: {
    
  },
  
  showing: {
    
  }
  
};




// key가 차례대로 적혀있는 list를 이용해서 object access 하기!
// https://medium.com/better-programming/4-ways-to-safely-access-nested-objects-in-vanilla-javascript-8671d09348a8


const reducerStatus = handleActions<typeState, any>({
  
  [status.REPLACE]: (statePrevious, action: status.type_REPLACE) => {
    
    
    return produce(statePrevious, stateNew => {
      if (action.payload === undefined) { 
        return;
      }
      else {
        const listKey = action.payload.listKey;
        if (Array.isArray(listKey)) {
          
          const location = listKey.reduce<string[]>((statePrevious: status.type_REPLACE, key: string): any => {
            return (statePrevious[key]); 
          }, statePrevious);
          
        }
      }
      
    });
  }
  
}, stateInitial);





export default statusReducer;


/*
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

*/