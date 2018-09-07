import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import authReducer from './reducer';

const reducer = combineReducers({
    auth: authReducer
})

const store = createStore(
    reducer,
    applyMiddleware(reduxPromiseMiddleware())
    );

export default store;