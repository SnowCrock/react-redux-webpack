import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'

import 'styles/common.less'

import Home from 'pages/home/index'

ReactDOM.render(
  <Home/>,
  document.getElementById('example')
)