import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Screens/Login/index';
import Register from './Screens/Register/index';
import Home from './Screens/Home/index';
import Error404 from './Screens/Error404/index';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();   

class Routes extends Component {
   render() {
      return (
        <div>
            <Router history={history}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/home' component={Home} />

                <Route path="*" component={Error404} />
            </Switch>
            </Router>
        </div>
      );
   }
}
export default Routes;