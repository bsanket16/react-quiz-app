import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Login from './core/Login'
import Signup from './core/Signup'
import Dashboard from './user/Dashboard'

import PrivateRoutes from './auth/PrivateRoutes'
import ProtectedRoutes from './auth/ProtectedRoutes'
import Quiz from './user/Quiz'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            
                <Redirect from="/" exact to='/auth/login' />
                <ProtectedRoutes path='/auth/login' exact component={ Login } />
                <ProtectedRoutes path='/auth/signup' exact component={ Signup } />
                <PrivateRoutes path='/user/dashboard' exact component={ Dashboard } /> 
                <PrivateRoutes path='/quiz/practice' exact component={ Quiz } /> 

            </Switch>
        </BrowserRouter>
    )
}

export default Routes