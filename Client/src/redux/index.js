// insert root reducer here :D 
import rootReducer from './Reducer/rootReducer'
import thunk from 'redux-thunk';
import {applyMiddleware,createStore}from "redux"
import {persistStore}from 'redux-persist'

import {composeWithDevTools}from 'redux-devtools-extension'

// work in progress

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);