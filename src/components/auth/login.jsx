import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {signupUser} from '../../actions'
import { Redirect } from 'react-router-dom';

class Login extends Component{
    constructor(){
        super()
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e){
        console.log('props', this.props)
        e.preventDefault()
        this.props.dispatch(signupUser())
    }
    
    render(){
        
        if(this.props.currentUser){
            return <Redirect to="/" />
        }
        return (
            <div>
                <Button onClick={this.handleLogin} size="large" color="primary">
                    Authenticate with Google
                </Button>
            </div>
        )
    }
}

export default connect(state => ({ currentUser: state.currentUser}))(Login)