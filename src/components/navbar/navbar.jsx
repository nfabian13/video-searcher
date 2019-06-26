import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function NavBar() {
    return(
        <div style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Youtube Video Searcher
                    </Typography>
                    <div style={{marginLeft: 350}}>
                        <Button color="inherit">My saved Videos</Button>
                        <Button color="inherit">Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

}