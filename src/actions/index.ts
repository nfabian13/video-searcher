import {SEARCH, ON_TEXT_CHANGED} from '../constants/action-types'
import api from '../api/index'

export interface ActionModel{
    type: string,
    payload: any
}

export function searchVideos(searchTerm: string){
    return (dispatch: any) => {
        api.searchVideoTerm(searchTerm)
            .then((data: any) => {
                debugger
                return dispatch({ type: SEARCH, payload: {
                    data,
                    searchTerm
                }
            })
        })
        .catch((error: any) => {
            //return dispatch()
        })
    }
}

export function onTextChanged(value: string){
    return (dispatch: any) => {
        const model : ActionModel = {
            type: ON_TEXT_CHANGED,
            payload: value
        } 
        return dispatch(model)
    }
}