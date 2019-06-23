import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../video/video'

const VideoList = () => {
    return (
        <div>
            <Grid container spacing={24} style={{padding: 24}}>
                { [1,2,3].map(video => 
                    (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <Video />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default VideoList