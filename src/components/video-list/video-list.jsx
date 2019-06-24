import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../video/video'
import PropTypes from 'prop-types'

const VideoList = (props) => {
    const {title} = props
    return (
        <div style={{margin: 15}}>
            <h3>{title}</h3>
            <Grid container spacing={10} style={{padding: 24}}>
                { [1,2,3].map(video => 
                    (
                        <Grid key={video} item xs={12} sm={6} lg={4} xl={3}>
                            <Video />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

VideoList.propTypes = {
    title: PropTypes.string.isRequired
}

export default VideoList