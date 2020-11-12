import {combineReducers} from 'redux';

import reducerStatus from './reducers/status';
//import authReducer from './reducers/auth';

const reducerRoot = combineReducers({
  status: reducerStatus
  //auth: authReducer,
  //theme: themeReducer
});



export default reducerRoot;

export type StateRoot = ReturnType<typeof reducerRoot>; // https://velog.io/@velopert/use-typescript-and-redux-like-a-pro