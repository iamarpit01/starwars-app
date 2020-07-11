import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { Route } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/dashboard';
import './App.scss';

export default class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoggedin: false
        }
    }

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Redirect exact to="/login" from="/" />
                    </Switch>
                </Router>
            </div>
        )
    }
}