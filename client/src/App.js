import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Message, AppNavbar } from './components';
import { Container } from 'reactstrap';
import Router from './router';
import store from './store';
import { authOperations } from './modules/auth';
import './App.css';

store.dispatch(authOperations.authenticateUser());

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <AppNavbar />
        <Message />
        <Container>
          <Router />
        </Container>
      </Fragment>
    </Provider>
  );
}

export default App;
