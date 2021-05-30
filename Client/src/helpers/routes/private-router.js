
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { combineReducers } from 'redux';



const PrivateRoute = ({component:Component, ...rest}) => {
    const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated);
    return (
        <Route {...rest} render={props => (
            isAuthenticated ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute