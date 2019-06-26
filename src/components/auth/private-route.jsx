import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route { ...rest } render={props => (
    rest.currentUser !== null ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    )
  )} />
);

export default connect(state => ({ currentUser: state.currentUser}))(PrivateRoute);