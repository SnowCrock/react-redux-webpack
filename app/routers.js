import React from 'react'
import { Route } from 'react-router'

import App from './containers/App'
import Home from 'pages/home/index'
import Setting from 'pages/setting/index'
import About from 'pages/about/index'


export const routers=(
      <Route path='/' component ={App}>
        <Route path='/home' component ={Home}/>
        <Route path='/setting' component ={Setting}/>
        <Route path='/about' component ={About}/>
      </Route>
    )
