import {SEARCH_SUCCESS, SEARCH_STARTED, SEARCH_FAILED, OPEN_MODAL, CLOSE_MODAL} from '../constants/action-types'
import api from '../api/index'

export interface ActionModel{
    type: string,
    payload: any
}

function searchStarted(){return {type: SEARCH_STARTED }; }
function searchFailed(e: any){return {type: SEARCH_FAILED }; }

export function searchVideos(searchTerm: string){
    return (dispatch: any) => {
        dispatch(searchStarted())
        return api.searchVideoTerm(searchTerm)
            .then((data: any) => {
                dispatch({ type: SEARCH_SUCCESS, payload: { data, searchTerm }
            })
        })
        .catch((error: any) => dispatch(searchFailed(error)))
    }
}

export function openModal(open: boolean, videoId: string){
    return { type: OPEN_MODAL, payload: { open, videoId } }
}

export function closeModal(){
    return { type: CLOSE_MODAL, payload: { } }
}

// export function onTextChanged(value: string){
//     return (dispatch: any) => {
//         const model : ActionModel = {
//             type: ON_TEXT_CHANGED,
//             payload: value
//         } 
//         return dispatch(model)
//     }
// }