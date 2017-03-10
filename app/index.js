import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
// import store from 'store/configureStore'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

import 'styles/common.less'

import Home from 'pages/home/index'
import App from './containers/App'

store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component ={App}>
        <Route path='/home' component ={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)