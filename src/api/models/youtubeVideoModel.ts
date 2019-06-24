export interface YoutubeVideoModel{
    pageInfo: PageInfo,
    items: VideoItem[]
}

interface VideoItem{
    id: any,
    snippet: any
}

interface PageInfo{
    totalResults: number
    resultsPerPage: number
}