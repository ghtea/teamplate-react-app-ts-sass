import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import * as config from 'config';

import * as actionsStatus from "store/actions/status";
import * as actionsAuth from "store/actions/auth";
//import * as actionsTheme from "../../actions/theme";



interface BodyRequest {
    email: string;
    password: string;
}

const requestLogCheck = (bodyRequest: BodyRequest) => {
    
    return axios.post(`${config.URL_BACK}/auth/log-in`, bodyRequest, {withCredentials: true});
    // return axios.get('https://back.nextstorm.co/comp');
};


function* logCheck(action: actionsAuth.type__LOG_IN) {
    try {
        
        yield put( actionsStatus.return__REPLACE({
            listKey: ['ready', 'user'],
            replacement: false
        }) );
        
        yield put( actionsStatus.return__REPLACE({
            listKey: ['loading', 'user'],
            replacement: true
        }) );
        
        const logged = Cookies.get('logged') 
        
        if(!logged) {
            console.log("no logged user");
            
            //replaceDataAuth("user", {});
            yield put( actionsAuth.return__REPLACE({
                listKey: ['ready', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return__REPLACE({
                listKey: ['loading', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return__REPLACE({
                listKey: ['ready', 'user'],
                replacement: false
            }) );
            
            return; // 로그인 정보가 없다면 여기서 멈춥니다.
        } 
        
        else {
        
            
            const bodyRequest = {
                email: action.payload.email, 
                password: action.payload.password
            };
        
    
            const res = yield call( requestLogCheck, bodyRequest );
            
            console.log(res);
            
            const codeSituation = res.data.codeSituation;
            
            if (codeSituation === 'LogCheck_UnknownError') {
                
                //Cookies.remove('logged');
                
            }
            else if (codeSituation === 'LogCheck_WrongPassword') {
                
                //Cookies.remove('logged');
                
            }
            else if (codeSituation === 'LogCheck_Succeeded') {
                
                //Cookies.remove('logged');
                console.log(res.data.payload)
                // const user = res.data.payload;
                Cookies.set('logged', 'yes', { expires: 7, path: '/' });  
                
                
            
            }
            else {
                console.log('no code of situation');
            }
              
            
        } // higher else
    

    // go to home
        
        
    } catch (error) {
        
        console.log(error);
        console.log('log in has been failed');
        
        // clear inputs
    }
}

export default logCheck;
