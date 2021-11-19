import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useAuth } from './auth'

function Privateroute({component: Component, ...rest}) {

    const {currentuser} = useAuth()

    return (
        <Route
        {...rest}
            render={props => {
             return currentuser ? <Component {...props}/> : <Redirect to="/login"/>
            }}
        >
            
        </Route>
    )
}

export default Privateroute
