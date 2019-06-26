import React from 'react'
import '../index.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import Login from './auth/login'
import PrivateRoute from './auth/private-route'
import Home from './home'
import MyVideos from './user/my-videos'

const NotFound = () => (<div style={{margin:50}}>
    <h4>THIS PAGE DOES NOT EXIST. 404 - NOT FOUND</h4>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/user/videos">My saved videos</Link></li>
        </ul>
    </div>
</div>)

const App = props => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PrivateRoute exact={true} path='/' component={Home}/>
                    <PrivateRoute path='/user/videos' component={MyVideos} />
                    <Route path='/login' component={Login}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App