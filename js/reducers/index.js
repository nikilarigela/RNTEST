import { combineReducers } from 'redux';
import countriesReducer from './testReducer';

const rootReducer = combineReducers({ countriesReducer });

export default rootReducer;
