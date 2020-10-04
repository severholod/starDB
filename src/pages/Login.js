import React from 'react'
import {Redirect} from 'react-router-dom'

export const Login = ({ isLoggedIn, onLogin}) => {
    if (isLoggedIn) {
        return <Redirect to="/secret-page"/>
    }
    return (
        <div className="jumbotron">
            <p>Login to see secret page</p>
            <button className="btn btn-primary"
                onClick={onLogin}>
                Login
            </button>
        </div>
    )
}