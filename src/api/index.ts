import axios from 'axios'
import {youtube} from '../config/secrets'
import {YoutubeVideoModel} from './models/youtubeVideoModel'
import db from '../db/firebase'
import * as auth from '../auth/authentication'
import {UserModel} from '../models'


async function searchVideoTerm(searchTerm: string): Promise<any>{
    const httpPromise = httpGetRequestPromise(searchTerm)
    try {
        const resp = await httpPromise;
        const data: YoutubeVideoModel = resp.data;
        //const { pageInfo, ...videoItems } = data;
        //console.log('youtube data', data);
        return Promise.resolve(data);
    }
    catch (error) {
        return await Promise.reject(error);
    }
}

function saveVideoToMyLib(video: any){
    const currentUserId = 'sadsfi32u432'
    const usersRef = db.ref('users-videos').child(currentUserId).child('list')
}

async function signup(): Promise<UserModel | any>{
    try{
        const user: UserModel = await auth.signupWithGoogle()
        const { userId, ...remaining} = user
        debugger
        const result = await db.ref('users').child(userId).set(remaining)
        Promise.resolve(user)
    }catch(e){
        Promise.reject(e)
    }
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
    signup
}

export default api