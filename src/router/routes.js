//import
import React from 'react'
import Login from '../view/login'
import Page1 from '../view/page1'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//função Routes
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </BrowserRouter>
    )
}
//exports
export default Routes

