import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../video/video'
import PropTypes from 'prop-types'

const VideoList = (props) => {
    const {title, dataSource} = props

    if(!dataSource.items || (dataSource.items && dataSource.items.length === 0)){
        return <label>Type to start searching videos</label>
    }

    return (
        <div style={{margin: 15}}>
            <h3>{title}</h3>
            <Grid container spacing={10} style={{padding: 24}}>
                { dataSource.items.map(video => 
                    (
                        <Grid key={video.id.videoId} item xs={12} sm={6} lg={4} xl={3}>
                            <Video 
                                data={video}
                                openModalClicked={props.openModalClicked} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

VideoList.propTypes = {
    title: PropTypes.string.isRequired,
    dataSource: PropTypes.object.isRequired
}

export default VideoList