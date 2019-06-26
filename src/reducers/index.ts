import {ActionModel} from '../actions/index'

import { SEARCH_SUCCESS, SEARCH_STARTED, SEARCH_FAILED, OPEN_MODAL, SAVE_VIDEO_REQUEST, SAVE_VIDEO_SUCCESS
    , SAVE_VIDEO_FAILED, CLOSE_MODAL, AUTH, LOG_OUT, GET_MY_VIDEO,GET_MY_VIDEO_FAILED } 
from '../constants/action-types'

const initialState: any = {
    searchTerm: '',
    videoList: [],
    isFetching: false,
    openModal: false,
    videoId: null,
    currentUser: null,
    error: null,
    myVideos: [],
    isSaving: false,
    searchError: null
}

function rootReducer(state = initialState, action: ActionModel){
    if(action.type === SEARCH_STARTED){
        return Object.assign({}, state, { isFetching: true})
    }

    if(action.type === SEARCH_FAILED){
        return Object.assign({}, state, { isFetching: true, searchError: action.payload.message})
    }

    if(action.type === SEARCH_SUCCESS){
        return Object.assign({}, state, {
            videoList: action.payload['data'].items,
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

    if(action.type === AUTH){
        return Object.assign({}, state, {currentUser: action.payload})
    }

    if(action.type === LOG_OUT){
        return Object.assign({}, state, {...initialState})
    }

    if(action.type === SAVE_VIDEO_REQUEST){
        return Object.assign({}, state, {isSaving: true})
    }

    if(action.type === SAVE_VIDEO_SUCCESS){
        return Object.assign({}, state, {isSaving: false})
    }

    if(action.type === SAVE_VIDEO_FAILED){
        return Object.assign({}, state, {isSaving: false, error: action.payload})
    }

    if(action.type === GET_MY_VIDEO){
        return Object.assign({}, state, {
            isSaving: false, 
            myVideos: action.payload
        })
    }

    return state
}

export default rootReducer