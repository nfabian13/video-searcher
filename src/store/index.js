import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index.ts'
import thunk from "redux-thunk";
//import { routerMiddleware } from 'react-router-redux';
//import createHistory from 'history/createBrowserHistory';

//export const history = createHistory();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)))

export default store