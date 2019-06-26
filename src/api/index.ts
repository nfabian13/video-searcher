import axios from 'axios'
import {youtube} from '../config/secrets'
import {YoutubeVideoModel} from './models/youtubeVideoModel'
import db from '../db/firebase'
import * as auth from '../auth/authentication'
import {UserModel, VideoModel} from '../models'


async function searchVideoTerm(searchTerm: string): Promise<any>{
    const httpPromise = httpGetRequestPromise(searchTerm)
    try {
        const resp = await httpPromise;
        const data: YoutubeVideoModel = resp.data;
        //const { pageInfo, ...videoItems } = data;
        //console.log('youtube data', data);
        return await Promise.resolve(data);
    }
    catch (error) {
        return await Promise.reject(error);
    }
}

async function saveVideo(video: VideoModel, currentUserId: string): Promise<any>{
    const userVidsRef = db.ref(`users-videos/${currentUserId}/list/${video.videoId}`)
    try {
        await userVidsRef.set(video);
        return await Promise.resolve(video);
    }
    catch (e) {
        return await Promise.reject(e);
    }
}

async function signup(): Promise<UserModel | any>{
    try{
        const user: UserModel = await auth.signupWithGoogle()
        const { userId, ...remaining} = user

        return await new Promise((resolve, reject) => {
            db.ref('users').child(userId).set(remaining)
                .then(() => resolve(user))
                .catch(error => reject(error))
        })
    }catch(e){
        return Promise.reject(e)
    }
}

async function signOut(): Promise<any>{
    try{
       const success = await auth.signOut()

        return await Promise.resolve(success);
    }catch(e){
        return await Promise.reject(e)
    }
}

function getMyVideos(currentUserId: string): Promise<any>{
    const userVidsRef = db.ref(`users-videos/${currentUserId}/list`)
    return userVidsRef.once('value').then(videos => {
        return Promise.resolve(videos.val())
    }).catch((e) => Promise.reject(e))
}

function httpGetRequestPromise(searchTerm: string): Promise<any> {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
       params: {
           key: youtube.apiKey,
           part: 'snippet',
           maxResults: 25,
           q: searchTerm,
           type: 'video',
           fields: 'items(id,snippet(title,description,thumbnails)),pageInfo'
       } 
    })
}


const api = {
    searchVideoTerm,
    signup,
    signOut,
    saveVideo,
    getMyVideos
}

export default api