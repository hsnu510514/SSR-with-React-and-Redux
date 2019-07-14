import { combineReducers } from 'redux';
import usersReducer from './usresReducer';


export default combineReducers({
  users: usersReducer
})
