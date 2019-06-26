import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index.ts'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2  from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'partnerheroapp',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['currentUser']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, storeEnhancers(applyMiddleware(thunk)))
    let persistor = persistStore(store)
    return { store, persistor }
}