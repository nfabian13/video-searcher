import React, {Component} from 'react';
import './app.css';
import NavBar from '../navbar/navbar'
import SearchInput from '../search-input/search-input'
import VideoList from '../video-list/video-list'
import {connect} from 'react-redux'
import { searchVideos } from '../../actions/index.ts'
import { Subject } from 'rxjs';
import {  debounceTime} from 'rxjs/operators';
import PropTypes from 'prop-types'

let inputStream = new Subject();

class App extends Component {
  constructor(){
    super()

    this.onTextChanged = this.onTextChanged.bind(this)
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

  render(){
    console.log('is fetching', this.props.isFetching)
    return (
      <div>
        <NavBar/>
        <SearchInput 
          style={{padding: 24, width: 500}}
          onChange={this.onTextChanged}/>
        <VideoList title="These are the results based on you search" />
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  videoList: PropTypes.object.isRequired,
  searchVideos: PropTypes.func.isRequired
}

App.defaultProps = {
  isFetching: false,
  videoList: {}
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    videoList: state.videoList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: value => dispatch(searchVideos(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)