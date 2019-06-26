import React from 'react'
import '../index.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './auth/login'
import PrivateRoute from './auth/private-route'
import Home from './home'
//import { ConnectedRouter } from 'react-router-redux';

const App = props => {
    //const { history } = props
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PrivateRoute exact={true} path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App