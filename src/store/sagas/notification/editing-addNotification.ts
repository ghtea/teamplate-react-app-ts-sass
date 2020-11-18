import { call, spawn, put, takeEvery, select } from "redux-saga/effects";

import * as actionsNotification from "store/actions/notification";
import {Banner} from "store/reducers/notification";
import {StateRoot} from 'store/reducers';

import { v4 as uuidv4 } from 'uuid';

import instanceI18n from 'language/i18n';
import notification from 'language/notification';


function* addNotification(action: actionsNotification.type__ADD_NOTIFICATION) {
    
    const listBannerPrevious: Banner[] =  yield select( (state:StateRoot) => state.notification.listBanner ); 
        
        
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
    
    const listBannerNew = [bannerAdding, ...listBannerPrevious];
        
        
    yield put( actionsNotification.return__REPLACE({
        listKey: ['listBanner'],
        replacement: languageReplacement
    }) );
    
}

export default addNotification;
