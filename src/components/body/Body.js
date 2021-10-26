import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../pages/Login'

function Body() {

    return (
        <section>
            <Switch>
                <Route path="/login" component={Login} exact />
            </Switch>
        </section>
    )
}

export default Body