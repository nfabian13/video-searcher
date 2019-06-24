import {ActionModel} from '../actions/index'
import { SEARCH_SUCCESS, SEARCH_STARTED, SEARCH_FAILED, OPEN_MODAL, CLOSE_MODAL } from '../constants/action-types'

const initialState = {
    searchTerm: '',
    videoList: {},
    isFetching: false,
    openModal: false,
    videoId: null
}

function rootReducer(state = initialState, action: ActionModel){
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

    if(action.type === OPEN_MODAL){
        return Object.assign({}, state, {openModal: true, videoId: action.payload.videoId})
    }

    if(action.type === CLOSE_MODAL){
        return Object.assign({}, state, {openModal: false, videoId: null})
    }

    return state
}

export default rootReducer