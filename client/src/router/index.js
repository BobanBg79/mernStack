import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from './routes';
import ProtectedRoute from './ProtectedRoute';
import { Container } from 'reactstrap';

import { AppNavbar, Message } from '../components';

const RouterWrapper = () => {
  return (
    <Router>
      <AppNavbar />
      <Message />
      <Container>
        <Switch>
          {Object.entries(PUBLIC_ROUTES).map(([key, route]) => (
            <Route
              key={key}
              exact
              path={route.path}
              component={route.component}
            />
          ))}

          {Object.entries(PROTECTED_ROUTES).map(([key, route]) => (
            <ProtectedRoute
              key={key}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  );
};

export default RouterWrapper;
