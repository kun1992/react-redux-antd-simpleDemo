import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import LayOut from './layout/index';
import Login from './page/login/index';

class App extends Component {
    render() {
        return (
            <Router  basename="/">
                <Switch>
                    <Route path="/login"  component={Login}></Route>
                    <Route path="/" component={LayOut}></Route>
                    <Redirect from="**" to="/" />
                </Switch>
            </Router>
        );
    }
}

export default App;
