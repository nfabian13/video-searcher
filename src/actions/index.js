import {ADD} from '../constants/action-types'

export function add(payload){
    return { type: ADD, payload}
}