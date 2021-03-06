import React, {Component} from 'react';
import NavBar from '../navbar/navbar'
import SearchInput from '../search-input/search-input'
import VideoList from '../video-list/video-list'
import {connect} from 'react-redux'
import { searchVideos, openModal, closeModal, logoutUser, saveVideo } from '../../actions'
import { Subject } from 'rxjs';
import {  debounceTime} from 'rxjs/operators';
import PropTypes from 'prop-types'
import VideoModal from '../video-modal/video-modal'

let inputStream = new Subject();

class Home extends Component {
  constructor(){
    super()

    this.onTextChanged = this.onTextChanged.bind(this)
    this.openModalClicked = this.openModalClicked.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleSaveVideo = this.handleSaveVideo.bind(this)
  }

  componentDidMount(){
    this.initializeInputStream()
  }

  initializeInputStream() {
    inputStream
    .pipe(debounceTime(1000))
    .subscribe(val => {
      this.props.searchVideos(val.value)
        .catch(error =>{
          console.log('err', error)
        })
    });
  }

  onTextChanged(e){
    inputStream.next({ value: e.target.value })
  }

  openModalClicked(videoId){
    this.props.openModal(true, videoId)
  }

  handleModalClose(){
    this.props.closeModal()
  }

  handleLogout(){
    this.props.logout()
  }
  
  handleSaveVideo(video){
    this.props.saveVideo(video, this.props.currentUser.userId)
  }

  render(){
    const { isFetching, videoList, currentUser, searchError } = this.props
    const title = isFetching ? 'Searching videos...' : 'These are the results based on you search'
    const isLoggedIn = currentUser ? true: false

    return (
      <div>
        <NavBar 
          isLoggedIn={isLoggedIn}
          logout={this.handleLogout}
          handleSaveVideo={this.handleSaveVideo}/>
        
        <SearchInput 
          style={{padding: 24, width: 500}}
          onChange={this.onTextChanged} />

        <br/>

        {
          !searchError
            ? (
              <div>
                  <VideoList 
                    title={title}
                    dataSource={videoList}
                    openModalClicked={this.openModalClicked}
                    handleSaveVideo={this.handleSaveVideo}
                    showSaveButton={true}
                    parseDataSource={true} />

                  <VideoModal 
                    open={this.props.isModalOpen}
                    handleClose={this.handleModalClose}
                    videoId={this.props.videoId} />
                </div>
              )
            : (<div>Error: {searchError}</div>)
        }
          
          
      </div>
    )
  }
}

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  videoList: PropTypes.array.isRequired,
  searchVideos: PropTypes.func.isRequired
}

Home.defaultProps = {
  isFetching: false,
  videoList: {}
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    videoList: state.videoList,
    isModalOpen: state.openModal,
    videoId: state.videoId,
    currentUser: state.currentUser,
    searchError: state.searchError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: value => dispatch(searchVideos(value)),
    openModal: (value, videoId) => dispatch(openModal(value, videoId)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logoutUser()),
    saveVideo: (video, userId) => dispatch(saveVideo(video, userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)