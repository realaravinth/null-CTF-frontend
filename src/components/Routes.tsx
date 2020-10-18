import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Leaderboard from './Leaderboard';
import Register from './Register';
import Challenges from './Challenges';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route component={Leaderboard} path="/leaderboard" />
    <Route component={Register} path="/register" />
    <Route component={Challenges} path="/challenges" />
    <Route component={Login} path="/login" />
    <Route component={Login} exact path="/" />
  </Switch>
);

export default Routes;
