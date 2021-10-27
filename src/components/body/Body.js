import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ActivationEmail from '../../pages/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'

import ForgotPassword from '../../pages/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword'

import Profile from '../../pages/profile/Profile'

import { useSelector } from "react-redux"


function Body() {

    const auth = useSelector(state => state.auth)
    const { isLogged } = auth

    return (
        <section>
            <Switch>
                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPassword} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPassword} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />

            </Switch>
        </section>
    )
}

export default Body