import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {PropTypes} from 'prop-types' 

const Video = (props) => {
    const data = props.data.snippet
    const thumbnail = data.thumbnails.medium

    return (
        <div style={{margin: 10}}>
            <Card>
                <CardMedia 
                    style={{height: 0, paddingTop: '56.25%'}}
                    image={thumbnail.url}
                    title={data.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <Typography component="p">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href="#" target="_blank">
                        Bookmark
                    </Button> 
                </CardActions>
            </Card>
        </div>
    )
}

Video.propTypes = {
    data: PropTypes.object.isRequired
}

export default Video