  
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';





const PublicRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuthenticated ?
               <Redirect to="/" />
               :  <Component {...props} />
        )} />
    );
};

export default PublicRoute;