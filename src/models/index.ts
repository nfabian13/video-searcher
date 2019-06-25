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

export interface UserModel{
    userId: string,
    email: string
    displayName: string,
    photoUrl: string
}