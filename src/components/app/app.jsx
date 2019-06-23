import React from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField'
import NavBar from '../navbar/navbar'



function App(props) {
  return (
    <div>
      <NavBar/>
      <TextField
        style={{padding: 24}}
        margin="normal"
        placeholder="Search video"
      />
    </div>
  )
}

export default App;
