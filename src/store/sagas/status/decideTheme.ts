import { call, spawn, put, takeEvery, select } from "redux-saga/effects";

import Cookies from 'js-cookie';

import instanceI18n from 'language/i18n';

import * as actionsStatus from "store/actions/status";
import {StateRoot} from 'store/reducers';




function* decideTheme(action: actionsStatus.type__READ_OPTION_THEME) {
    
    const optionThemeCurrent:string =  yield select( (state:StateRoot) => state.status.current.theme.option ); 
        
    if ( optionThemeCurrent === 'light' ) {
        yield put( actionsStatus.return__REPLACE({
            listKey: ['current', 'theme', 'name'],
            replacement: 'themeLight'
        }) );
    }
    else if ( optionThemeCurrent === 'dark' ) {
        yield put( actionsStatus.return__REPLACE({
            listKey: ['current', 'theme', 'name'],
            replacement: 'themeDark'
        }) );
    }
    else if ( optionThemeCurrent === 'auto' ){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('browser is dark mode');
            yield put( actionsStatus.return__REPLACE({
                listKey: ['current', 'theme', 'name'],
                replacement: 'themeDark'
            }) );
        }
        else {
            console.log('browser is light mode');
            yield put( actionsStatus.return__REPLACE({
                listKey: ['current', 'theme', 'name'],
                replacement: 'themeLight'
            }) );
        }
    }
}

export default decideTheme;
