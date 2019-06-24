import axios from 'axios'
import {secrets} from '../config/secrets'
import {YoutubeVideoModel} from './models/youtubeVideoModel'
import {VideoModel} from '../models'

function searchVideoTerm(searchTerm: string){
    const httpPromise = httpGetRequestPromise(searchTerm)
    httpPromise.then(resp => {
        const data: YoutubeVideoModel = resp.data
        const { pageInfo, ...videoItems} = data
        
        console.log('youtube data', data)
        return data
    })
    .catch(error => error)
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