import { delay, put, takeEvery, select } from "redux-saga/effects";

import * as actionsNotification from "store/actions/notification";
import {Banner} from "store/reducers/notification";
import {StateRoot} from 'store/reducers';

import { v4 as uuidv4 } from 'uuid';

import instanceI18n from 'language/i18n';
import notification, {Situation} from 'language/notification';


function* addDeleteBanner(action: actionsNotification.type__ADD_DELETE_BANNER) {
    
    const listBannerPrevious: Banner[] =  yield select( (state:StateRoot) => state.notification.listBanner ); 
        
    const id = uuidv4();
    /*
    let id:string = '';
    
    if (action.payload.id){
      id = action.payload.id;
    }
    else {
      id = uuidv4();
    }
    */
    
    const code: string = action.payload.code;
    
    const situation: Situation = notification[code]['situation'];
    
    const message: string = instanceI18n.t(`Notification.${situation}.${code}`);
    console.log(message);
    
    
    
    let msTime: actionsNotification.MsTimeBanner = actionsNotification.MsTimeBanner.normal;
    if ( situation === 'success'){
      msTime = actionsNotification.MsTimeBanner[ notification[code]['time'] || 'short' ];
    }
    else if ( situation === 'hint'){
      msTime = actionsNotification.MsTimeBanner[ notification[code]['time'] || 'normal' ];
    }
    else if ( situation === 'error'){
      msTime = actionsNotification.MsTimeBanner[ notification[code]['time'] || 'long' ];
    }
    else if ( situation === 'warning'){
      msTime = actionsNotification.MsTimeBanner[ notification[code]['time'] || 'normal' ];
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
        replacement: listBannerNew
    }) );
    
    yield delay( msTime );
    
    yield put( actionsNotification.return__DELETE_BANNER({
        id: id
    }) );
  
}

export default addDeleteBanner;
