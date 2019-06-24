import axios, { AxiosResponse } from 'axios'
import {secrets} from '../config/secrets'
import {YoutubeVideoModel} from './models/youtubeVideoModel'
import {VideoModel} from '../models'

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

function httpGetRequestPromise(searchTerm: string) {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
       params: {
           key: secrets.youtubeApiKey,
           part: 'snippet',
           maxResults: 25,
           q: searchTerm,
           type: 'video',
           fields: 'items(id,snippet(title,description,thumbnails)),pageInfo'
       } 
    })
}


const api = {
    searchVideoTerm
}

export default api