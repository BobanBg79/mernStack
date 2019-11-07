import React from 'react';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppNavbar, ShoppingList, ItemModal} from './components';
import {Container} from 'reactstrap';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
