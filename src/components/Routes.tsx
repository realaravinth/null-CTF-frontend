import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Leaderboard from './Leaderboard';
import Challenges from './Challenges';
import Root from './Root';
import Logout from './Logout';
import Loading from './Loading';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route component={Leaderboard} path="/leaderboard" />
    <Route component={Challenges} path="/challenges" />
    <Route component={Login} path="/login" />
    <Route component={Logout} path="/logout" />
    <Route component={Loading} exact path="/loading" />
    <Route component={Root} exact path="/" />
  </Switch>
);

export default Routes;
