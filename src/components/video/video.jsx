import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {PropTypes} from 'prop-types'

class Video extends Component{
    constructor(){
        super()

        this.watchNowClicked = this.watchNowClicked.bind(this)
        this.saveClicked = this.saveClicked.bind(this)
    }
    
    watchNowClicked(e){
        e.preventDefault()
        this.props.openModalClicked(this.props.data.videoId);
    }

    saveClicked(e){
        this.props.handleSaveVideo(this.props.data);
    }

    render(){
        const data = this.props.data
        
        return (
            <div style={{margin: 10}}>
                <Card>
                    <CardMedia 
                        style={{height: 0, paddingTop: '56.25%'}}
                        image={data.thumbnail.url}
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
                        <Button onClick={this.saveClicked} size="small" color="primary">
                            Save for later
                        </Button>
                        <Button onClick={this.watchNowClicked} size="small" color="primary">
                            Watch now
                        </Button> 
                    </CardActions>
                </Card>
            </div>
        )
    }
}

Video.propTypes = {
    data: PropTypes.object.isRequired,
    openModalClicked: PropTypes.func.isRequired,
    handleSaveVideo: PropTypes.func.isRequired
}

export default Video