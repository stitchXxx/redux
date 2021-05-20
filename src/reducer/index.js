// import {combineReducers} from "redux"
import { combineReducers } from "redux-immutable"
import { count } from './count';
import { data } from './data';

// 不可变对象 immutable 
export const reducers = combineReducers({
    count,
    data,
})