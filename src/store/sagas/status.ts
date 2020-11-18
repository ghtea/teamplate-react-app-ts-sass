import { call, spawn, put, takeEvery } from "redux-saga/effects";
//import axios from "axios";
//import * as config from '../../config';

import * as actionsStatus from "../actions/status";
import changeLanguage from './status/changeLanguage';


export default function* sagaStatus() {
    
    yield takeEvery( actionsStatus.name__CHANGE_LANGUAGE, changeLanguage );
    
}