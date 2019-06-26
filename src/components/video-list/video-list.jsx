import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../video/video'
import PropTypes from 'prop-types'

const VideoList = (props) => {
    const {title, dataSource} = props

    const getVideoObj = (data) =>{
        return {
            videoId: data.id.videoId,
            title: data.snippet.title,
            description: data.snippet.description,
            thumbnail: {
                url: data.snippet.thumbnails.medium.url,
                height: data.snippet.thumbnails.medium.height,
                width: data.snippet.thumbnails.medium.width,
            }
        }
    }

    if(!dataSource.items || (dataSource.items && dataSource.items.length === 0)){
        return <label style={{marginLeft: 15}}>Type to start searching videos</label>
    }

    return (
        <div style={{margin: 15}}>
            <h3>{title}</h3>
            <Grid container spacing={10} style={{padding: 24}}>
                { dataSource.items.map(video => 
                    (
                        <Grid key={video.id.videoId} item xs={12} sm={6} lg={4} xl={3}>
                            <Video 
                                data={ getVideoObj(video)}
                                openModalClicked={props.openModalClicked}
                                handleSaveVideo={props.handleSaveVideo} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

VideoList.propTypes = {
    title: PropTypes.string.isRequired,
    dataSource: PropTypes.object.isRequired,
    openModalClicked: PropTypes.func.isRequired,
    handleSaveVideo: PropTypes.func.isRequired
}

export default VideoList