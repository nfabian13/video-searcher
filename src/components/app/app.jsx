import React, {Component} from 'react';
import './app.css';
import NavBar from '../navbar/navbar'
import SearchInput from '../search-input/search-input'
import VideoList from '../video-list/video-list'
import {connect} from 'react-redux'
import { searchVideos } from '../../actions/index.ts'
import { Subject, empty, of } from 'rxjs';
import {
  catchError,
  debounceTime
} from 'rxjs/operators';

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
    }, error=>{
      // trigger an error action here
    });
  }

  onTextChanged(e){
    inputStream.next({ value: e.target.value })
  }

  render(){
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

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: value => dispatch(searchVideos(value))
  };
}

export default connect(null, mapDispatchToProps)(App)