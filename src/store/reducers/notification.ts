import produce from 'immer';
import {handleActions} from 'redux-actions';

import instanceI18n from 'language/i18n';


import * as actionsNotification from 'store/actions/notification';

import { v4 as uuidv4 } from 'uuid';
import putValueToNestedObject from 'tools/vanilla/putValueToNestedObject';
//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'
import notification from 'language/notification';

//import addNotification from './notification/addNotification';

// https://react-etc.vlpt.us/07.typescript-redux.html

//export type State = typeof stateInitial;


export type Banner = {
  id: string,  
  code: string, 
  situation: 'success' | 'hint' | 'error' | 'warning',
  message: string,
  msTime: number 
}

export type State = {
  listBanner: Banner[]
}

const stateInitial: State = {
  
  listBanner: []
  
};



const reducerNotification = handleActions<State, any>({
  
  [actionsNotification.name__ADD_NOTIFICATION]: (statePrevious, action: actionsNotification.type__ADD_NOTIFICATION) => {
    
    return produce(statePrevious, stateNew => {
      if (action.payload === undefined) { 
        return;
      }
      else {
        
        let id:string = '';
        if (action.payload.id){
          id = action.payload.id;
        }
        else {
          id = uuidv4();
        }
        
        const code: string = action.payload.code;
        
        const situation: 'success' | 'hint' | 'error' | 'warning' = notification[code]['situation'];
        
        const message: string = instanceI18n.t(code);
        
        
        enum MsTime {
          normal = 3000,
          short = 2000,
          long = 5000,
          lasting = 10000
        }
        
        let msTime: MsTime = MsTime.normal;
        if ( situation === 'success'){
          msTime = MsTime[ notification[code]['time'] || 'short' ];
        }
        else if ( situation === 'hint'){
          msTime = MsTime[ notification[code]['time'] || 'normal' ];
        }
        else if ( situation === 'error'){
          msTime = MsTime[ notification[code]['time'] || 'long' ];
        }
        else if ( situation === 'warning'){
          msTime = MsTime[ notification[code]['time'] || 'normal' ];
        }
        
        
        const bannerAdding = {
          id: id,  
          code: code, 
          situation: situation,
          message: message,
          msTime: msTime 
        }
        
        
        
        
      }
      
    });
  }
 
  
}, stateInitial);



// key가 차례대로 적혀있는 list를 이용해서 object access 하기!
// https://medium.com/better-programming/4-ways-to-safely-access-nested-objects-in-vanilla-javascript-8671d09348a8

/*
const reducerNotification = (statePrevious: typeState = stateInitial, action: any): typeState => {
  switch (action.type) {
    
    case notification.REPLACE:
      
      return produce(statePrevious, stateNew => {
        if (action.payload === undefined) { 
          return;
        }
        else {
          const listKey: string[] = action.payload.listKey;
          if (Array.isArray(listKey)) {
            
            console.log(stateNew);
            
            const location = listKey.reduce( (obj: any, key: string) => {
              return obj[key]; 
            }, stateNew);
            
          }
      }
      
    });
    
    
    default:
      return statePrevious;
  }
}

*/



export default reducerNotification;


/*
const notificationReducer = handleActions({
  
  
  [notification.REPLACE_STATUS]: (state, action) => {
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







