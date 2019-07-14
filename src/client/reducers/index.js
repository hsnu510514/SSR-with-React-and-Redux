import { compbineReducers } from 'redux';
import userReducer from './usresReducer';


export default combineReducers({
  users: usersReducer
})
