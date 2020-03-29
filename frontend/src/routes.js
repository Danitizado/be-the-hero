import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes () {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/incident/new" component={NewIncident} />
          </Switch>
        </BrowserRouter>
    );
}