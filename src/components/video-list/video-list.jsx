import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../video/video'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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

const renderVideoList = (props) => {
    return Object.keys(props.dataSource).map(key => {
        const data = props.dataSource[key]
        const video = props.parseDataSource ? getVideoObj(data) : data

        return (
            <Grid key={video.videoId} item xs={12} sm={6} lg={4} xl={3}>
                <Video 
                    data={video}
                    openModalClicked={props.openModalClicked}
                    handleSaveVideo={props.handleSaveVideo}
                    showSaveButton={props.showSaveButton} />
            </Grid>
        )})
}

const VideoList = (props) => {
    const {title, dataSource} = props
    
    if(!dataSource || dataSource.length === 0){
        return <label style={{marginLeft: 15}}>Type to start searching videos</label>
    }
    
    return (
        <div style={{margin: 15}}>
            <h3>{title}</h3>
            <Grid container spacing={10} style={{padding: 24}}>
                { renderVideoList(props) }
            </Grid>
        </div>
    )
}

VideoList.propTypes = {
    title: PropTypes.string.isRequired,
    //dataSource: PropTypes.array.isRequired,
    openModalClicked: PropTypes.func.isRequired,
    handleSaveVideo: PropTypes.func,
    showSaveButton: PropTypes.bool.isRequired,
    parseDataSource: PropTypes.bool.isRequired
}

VideoList.defaultProps = {
    handleSaveVideo: () => {}
    //dataSource: []
}

export default VideoList