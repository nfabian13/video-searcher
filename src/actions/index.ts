import {SEARCH, ON_TEXT_CHANGED} from '../constants/action-types'
import api from '../api/index'

export interface ActionModel{
    type: string,
    payload: any
}

export function searchVideos(searchTerm: string){
    return (dispatch: any) => {
        //api.searchVideoTerm('surfing')
        const model : ActionModel = {
            type: SEARCH,
            payload: searchTerm
        } 
        return dispatch(model)
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