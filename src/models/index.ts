export interface VideoModel{
    videoId: string,
    title: string,
    description: string,
    thumbnail: Thumbnail
}

interface Thumbnail{
    url: string,
    width: number,
    height: number
}