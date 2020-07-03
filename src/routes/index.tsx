import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

import Card from '../pages/Card';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Dashboard" component={Dashboard} isPrivate />
    <Route path="/Register/:id+" component={Register} isPrivate />
  </Switch>
)

export default Routes;
