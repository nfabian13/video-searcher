import {SEARCH_SUCCESS, SEARCH_STARTED, SEARCH_FAILED, OPEN_MODAL, 
    CLOSE_MODAL, AUTH, LOG_OUT, SAVE_VIDEO_REQUEST, SAVE_VIDEO_SUCCESS, SAVE_VIDEO_FAILED}  
    from '../constants/action-types'
import api from '../api/index'
import { UserModel, VideoModel } from '../models';

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
                dispatch({ type: SEARCH_SUCCESS, payload: { data, searchTerm }})
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

export function signupUser(){
    return (dispatch: any) => {
        return api.signup()
            .then((user: UserModel) => {
                dispatch({type: AUTH, payload: user})
            })
            .catch((e: any) => console.log('error', e))          
    }
}

export function logoutUser(){
    return (dispatch: any) => {
        return api.signOut()
            .then(() => dispatch({type: LOG_OUT, payload: null}))
            .catch((e: any) => console.log('error', e))        
    }
}

export function saveVideo(video: VideoModel, userId: string){
    return (dispatch: any) => {
        dispatch({type: SAVE_VIDEO_REQUEST})
        return api.saveVideo(video, userId)
            .then(() => dispatch({type: SAVE_VIDEO_SUCCESS, payload: video}))
            .catch((e: any) => {
                console.log('error', e)
                dispatch({type: SAVE_VIDEO_FAILED, payload: 'Error Saving video'})
            })        
    }
}