import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Youtube Video Searcher
                    </Typography>
                    <div style={{marginLeft: 350}}>
                        <Link to="/user/videos">My saved Videos</Link>
                        <Button onClick={props.logout} color="inherit">Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar