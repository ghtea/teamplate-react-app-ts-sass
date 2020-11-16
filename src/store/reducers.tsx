import {combineReducers} from 'redux';

import reducerStatus from './reducers/status';
import reducerNotification from './reducers/notification';
import reducerAuth from './reducers/auth';

const reducerRoot = combineReducers({
  notification: reducerNotification,
  status: reducerStatus,
  auth: reducerAuth
  //theme: themeReducer
});



export default reducerRoot;

export type StateRoot = ReturnType<typeof reducerRoot>; // https://velog.io/@velopert/use-typescript-and-redux-like-a-pro