import React from "react";
import { Redirect, Route } from "react-router-dom";
import './App.css';



export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render = { props =>
    localStorage.getItem("Password") ? (
        <Component {...props} />
    ) : (
        <Redirect 
            to={{
                pathname:"/login",
                state: { from : props.location }
            }}
            />
        )        
    }
    />
);