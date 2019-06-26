import React, { Component } from 'react'
import {connect} from 'react-redux'
import VideoList from '../video-list/video-list'
import VideoModal from '../video-modal/video-modal'
import { openModal, closeModal, getMyVideos } from '../../actions'
import { Link } from 'react-router-dom';

 class MyVideos extends Component {
     constructor(){
         super()

         this.openModalClicked = this.openModalClicked.bind(this)
         this.handleModalClose = this.handleModalClose.bind(this)
     }

    openModalClicked(){
        this.props.dispatch(openModal(true, this.props.videoId))
    }
    
    handleModalClose(){
        this.props.dispatch(closeModal())
    }
    
    componentDidMount(){
        //trigger get my videos
        this.props.dispatch(getMyVideos(this.props.currentUser.userId))
    }

     render(){
         console.log('my videos', this.props.myVideos)
        return (
            <div>
                <ul><li><Link to="/">Go back Home</Link></li></ul>
                <br/>
                <VideoList 
                    title={'My saved videos'}
                    dataSource={this.props.myVideos}
                    openModalClicked={this.openModalClicked}
                    showSaveButton={false}
                    parseDataSource={false} />
    
                <VideoModal 
                    open={this.props.isModalOpen}
                    handleClose={this.handleModalClose}
                    videoId={this.props.videoId} />
            </div>
        )
     }
}


export default connect(state => ({
    isModalOpen: state.openModal,
    videoId: state.videoId,
    currentUser: state.currentUser,
    myVideos: state.myVideos
}))(MyVideos)
