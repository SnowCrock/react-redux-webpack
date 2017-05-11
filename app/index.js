import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { routers } from './routers'
// import store from 'store/configureStore'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import { store } from 'store/configureStore'


store.subscribe(()=>console.log(store.getState()))
// console.log(routers)
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routers}
    </Router>
  </Provider>,
  document.getElementById('root')
)