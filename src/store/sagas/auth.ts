import { call, spawn, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
//import * as config from '../../config';

import logIn from 'store/sagas/auth/logIn';
//import signUp from 'store/sagas/auth/signUp';


import * as actionsAuth from "../actions/auth";


export default function* sagaAuth() {
    yield takeLatest( actionsAuth.name__LOG_IN, logIn ); 
    //yield takeEvery( actionsAuth.name__SIGN_UP, signUp ); 
}

