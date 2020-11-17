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

const requestSignUp = (bodyRequest: BodyRequest) => {
    
    /*
    let bodyReq = {
        email, 
        password
    }
    */  
    return axios.post(`${config.URL_BACK}/auth/sign-up`, bodyRequest, {withCredentials: true});
};


function* signUp(action: actionsAuth.type__SIGN_UP) {
    try {
            
            if (action.payload.email === "") {
                //addDeleteNotification("auth01", language);
            }
            else if ( !(/\S+@\S+\.\S+/).test(action.payload.email) ){
                //addDeleteNotification("auth021", language);
            }
            
            else if (action.payload.password1 === "" || action.payload.password2 === "") {
                //addDeleteNotification("auth03", language);
            }
            else if (action.payload.password1 !== action.payload.password2) {
                //addDeleteNotification("auth04", language);
            }
            else if (action.payload.password1.length < 6) {
                //addDeleteNotification("auth04", language);
            }
            
            else {
            
                
                const bodyRequest = {
                    _id: uuidv4(),
                    email: action.payload.email, 
                    password: action.payload.password1
                };
            
        
                const res = yield call( requestSignUp, bodyRequest );
        
        
                if (res.data.code_situation) {
            
                    const code_situation = res.data.code_situation;
                    removeCookie('logged');
                    addDeleteNotification(code_situation, language);
                }
                  
                 // 성공시
                else if (res.status === 200) {
                
                    addDeleteNotification("auth08", language);
                    
                    // 배틀태그 확인하러 여행!
                    history.push( `${config.URL_FRONT}/log-in/`);
                    
                    // Cookies.set('logged', 'yes', { expires: 7, path: '/' });    
                }
                  
                  // 그 외 (에러는 못받아들이는듯)
                else { 
                    console.log(res) 
                };
                
            } // higher else
        

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
