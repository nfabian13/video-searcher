import {ActionModel} from '../actions/index'
import { SEARCH_SUCCESS, SEARCH_STARTED, SEARCH_FAILED, OPEN_CLOSE_MODAL } from '../constants/action-types'

const initialState = {
    searchTerm: '',
    videoList: {},
    isFetching: false,
    openModal: false
}

function rootReducer(state = initialState, action: ActionModel){
    // if(action.type === ON_TEXT_CHANGED){
    //     return Object.assign({}, state, {searchTerm: action.payload})
    // }

    if(action.type === SEARCH_STARTED
        || action.type === SEARCH_FAILED){
        return Object.assign({}, state, { isFetching: !state.isFetching})
    }

    if(action.type === SEARCH_SUCCESS){
        return Object.assign({}, state, {
            videoList: action.payload['data'],
            searchTerm: action.payload['searchTerm'],
            isFetching: false
        })
    }

    if(action.type === OPEN_CLOSE_MODAL){
        return Object.assign({}, state, {openModal: action.payload})
    }

    return state
}

export default rootReducer