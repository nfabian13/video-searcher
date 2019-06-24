import {SEARCH} from '../constants/action-types'

export function searchVideos(payload){
    return (dispatch) => {
        return dispatch({ type: SEARCH, payload})
    }
}