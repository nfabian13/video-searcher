import React from 'react';
import './app.css';
import NavBar from '../navbar/navbar'
import SearchInput from '../search-input/search-input'
import VideoList from '../video-list/video-list'

function App(props) {
  return (
    <div>
      <NavBar/>
      <SearchInput />
      <VideoList />
    </div>
  )
}

export default App;
