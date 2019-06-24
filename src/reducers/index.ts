import {ActionModel} from '../actions/index'
import { SEARCH, ON_TEXT_CHANGED } from '../constants/action-types'

const initialState = {
    searchTerm: '',
    videoList: {},
    isFetching: false,
}

function rootReducer(state = initialState, action: ActionModel){
    if(action.type === ON_TEXT_CHANGED){
        return Object.assign({}, state, {searchTerm: action.payload})
    }

    if(action.type === SEARCH){
        return Object.assign({}, state, {
            videoList: action.payload['data'],
            searchTerm: action.payload['searchTerm']
        })
    }

    return state
}

export default rootReducer