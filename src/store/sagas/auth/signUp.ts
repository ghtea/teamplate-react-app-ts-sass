import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import Cookies from 'js-cookie';

import * as config from 'config';

import * as actionsStatus from "store/actions/status";
import * as actionsAuth from "store/actions/auth";
//import * as actionsTheme from "../../actions/theme";



interface BodyReq {
    email: string;
    password: string;
}

const requestSignUp = (bodyReq: BodyReq) => {
    
    /*
    let bodyReq = {
        email, 
        password
    }
    */  
    return axios.post(`${config.URL_BACK}/auth/sign-up`, bodyReq, {withCredentials: true});
};


function* signUp(action: actionsAuth.type__LOG_IN) {
    try {
        
            yield put( actionsStatus.return__REPLACE({
                listKey: ['ready', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return__REPLACE({
                listKey: ['loading', 'user'],
                replacement: true
            }) );
        
        
        const bodyReq = {
            email: action.payload.email, 
            password: action.payload.password
        };
        
        const { data } = yield call( requestSignUp, bodyReq );
        //console.log(data);
        
        // main
        yield put( actionsAuth.return__REPLACE({
            listKey: ['user'],
            replacement: data
        }) );
    
            yield put( actionsStatus.return__REPLACE({
                listKey: ['loading', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return__REPLACE({
                listKey: ['ready', 'user'],
                replacement: true
            }) );
        

        Cookies.set('logged', 'yes', { expires: 7, path: '/' });    
        // go to home
        
        
    } catch (error) {
        
            yield put( actionsStatus.return__REPLACE({
                listKey: ['loading', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return__REPLACE({
                listKey: ['ready', 'user'],
                replacement: false
            }) );
            
        console.log(error);
        console.log('LOG_IN has been failed');
        
        // clear inputs
    }
}

export default signUp;
