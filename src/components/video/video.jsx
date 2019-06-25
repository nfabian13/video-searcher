import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {PropTypes} from 'prop-types'
import api from '../../api'

class Video extends Component{
    constructor(){
        super()

        this.watchNowClicked = this.watchNowClicked.bind(this)
        this.saveClicked = this.saveClicked.bind(this)
    }

    componentDidMount(){
        //console.log('props', this.props)
    }

    watchNowClicked(e){
        e.preventDefault()
        this.props.openModalClicked(this.props.data.id.videoId);
    }

    saveClicked(e){
        e.preventDefault()
        api.signup().then(user => {
            console.log('user is', user)
        }).catch(e => console.log(e))
    }

    render(){
        const data = this.props.data.snippet
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
    openModalClicked: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        openModal: state.openModal
    }
}

export default Video
//export default connect(mapStateToProps)(Video)