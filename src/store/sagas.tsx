import { all, fork } from 'redux-saga/effects'


//import sagaAuth from './sagas/auth';

export default function* sagaRoot() {
  yield all ([
    //fork(sagaColor),
    //fork(sagaAuth)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html