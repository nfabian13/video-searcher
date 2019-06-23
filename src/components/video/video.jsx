import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// <CardMedia style={{height: 0, paddingTop: '56.25%'}}
// image={props.course.fields.courseImage.fields.file.url}
// title={props.course.fields.title} />

const Video = () => {
    return (
        <div style={{margin: 10}}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Video Title
                    </Typography>
                    <Typography component="p">
                        Video Description
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

export default Video