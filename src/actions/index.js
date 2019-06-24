import {SEARCH} from '../constants/action-types'
import api from '../api/index.ts'

export function searchVideos(payload){
    return (dispatch) => {
        api.searchVideoTerm('surfing')
        return dispatch({ type: SEARCH, payload})
    }
}