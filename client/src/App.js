import React from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './router'
import store from './store'
import { authOperations } from './modules/auth'
import './App.css'

store.dispatch(authOperations.authenticateUser())

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
