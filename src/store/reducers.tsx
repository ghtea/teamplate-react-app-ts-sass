import {combineReducers} from 'redux';

//import statusReducer from './reducers/status';
//import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  //status: statusReducer,
  //auth: authReducer,
  //theme: themeReducer
});



export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; // https://velog.io/@velopert/use-typescript-and-redux-like-a-pro