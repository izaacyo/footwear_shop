import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ActivationEmail from '../../pages/ActivationEmail'

function Body() {

    return (
        <section>
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
            </Switch>
        </section>
    )
}

export default Body