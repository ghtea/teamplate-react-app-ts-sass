import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
//import * as config from '../../config';

import addNotification from 'store/sagas/notification/addNotification';

import * as actionsNotification from "../actions/notification";


export default function* sagaNotification() {
    yield takeEvery( actionsNotification.name__ADD_NOTIFICATION, addNotification ); 
}