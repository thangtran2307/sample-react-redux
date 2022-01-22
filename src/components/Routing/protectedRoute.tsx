import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    return <Route {...routeProps} />;
  }
  return <Redirect to={{ pathname: authenticationPath }} />;
}
