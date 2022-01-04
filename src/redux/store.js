import {createStore,applyMiddleware} from 'redux';
import logger  from 'redux-logger';  //logger can be methods and functions used as a middleware

import rootReducer from './root-reducer';

const middlewares = [logger]

const store =  createStore(rootReducer,applyMiddleware(...middlewares))

export default store ;