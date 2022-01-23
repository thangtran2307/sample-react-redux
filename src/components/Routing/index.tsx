import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectIsLoggedIn } from '../Authentication/authSlice';
import Dashboard from '../Dashboard';
import Sample from '../Sample';
import ProtectedRoute from './protectedRoute';
import RoutingPath from './routingPath';

export default function Routing() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={RoutingPath.Home} />
      </Route>

      <Route path={RoutingPath.Home} exact>
        <Dashboard />
      </Route>

      <Route path={RoutingPath.SampleDetail}>
        <Sample />
      </Route>

      <Route path={RoutingPath.Sample}>
        <Sample />
      </Route>

      <ProtectedRoute
        path={RoutingPath.Protected}
        isAuthenticated={isLoggedIn}
        authenticationPath={RoutingPath.Home}
      >
        <div>Protected page</div>
      </ProtectedRoute>

      <Route path="*">
        <div>Page not found</div>
      </Route>
    </Switch>
  );
}
