import { combineReducers } from 'redux';
import usersReducer from './usresReducer';
import authReducer from './authReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer
});
