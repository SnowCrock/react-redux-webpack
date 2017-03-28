import React from 'react'
import { Route } from 'react-router'

// import App from './containers/App'
// import Home from 'pages/home/index'
// import Setting from 'pages/setting/index'
// import About from 'pages/about/index'


/*function lazyLoadComponents(lazyModules){
  return (location,cb)=>{
    const modulekeys = Object.keys(lazyModules)
    const promises = modulekeys.map(key =>
      new Promise(resolve => lazyModules[key](resolve))
    )

    Promise.all(promises)
      .then(modules =>{
        cb(null,modules.reduce((obj,module,i) =>{
          obj[modulekeys[i]] = module
          return obj
        },{}))
      })
  }
}*/

/*export const routers=(
      <Route path='/' component ={App}>
        <Route path='/home' component ={Home}/>
        <Route path='/setting' component ={Setting}/>
        <Route path='/about' component ={About}/>
      </Route>
    )
*/

/*export const routers =(
  component: App,
    childRoutes: [
    {
      path: '/',
      indexRoute: {
        getComponent(location, cb){
        // 懒加载 Page1.js 访问根目录的时候才会加载进来Page1.js的模块
            require.ensure([], (require) => {
              cb(null, require('./containers/App').default);
            },'app');
        },
      }   
    }, 
    {
      path: '/home',
      getComponent(location, cb){
        require.ensure([], (require) => {
          cb(null, require('pages/home/index.js').default);
        },'Home');
      },
    }]
)*/


//jsx语法  require.ensure()  异步加载模块

/*export const routers = (
  <Route path = '/'
    getComponent = {
      (location, callback) => {
        require.ensure([],function(require){
          callback(null,require('./containers/App').default)
        },'app')
      }
    }>
    <Route path = '/home'
      getComponent = {
        (location, callback) => {
          require.ensure([],function(require){
            callback(null,require('pages/home/index').default)
          },'home')
        }
      } />
    <Route path = '/setting'
      getComponent = {
        (location, callback) => {
          require.ensure([],function(require){
            callback(null,require('pages/setting/index').default)
          },'setting')
        }
      }/>
    <Route path = '/about'
      getComponent = {
        (location, callback) => {
          require.ensure([],function(require){
            callback(null,require('pages/about/index').default)
          },'about')
        }
      }/>
  </Route>
)*/

export const routers = ( 
  <Route path = '/'
    getComponent = {
      (location, callback) => {
        System.import('./containers/App').then(component => {
          callback(null, component.default || component)
        })
      }
    } >
    <Route path = '/home'
      getComponent = {
        (location, callback) => {
          System.import('pages/home/index').then(component => {
            callback(null, component.default || component)
          })
        }
      } />
      <Route path = '/setting'
      getComponent = {
        (location, callback) => {
          System.import('pages/setting/index').then(component => {
            callback(null, component.default || component)
          })
        }
      } />
      <Route path = '/about'
      getComponent = {
        (location, callback) => {
          System.import('pages/about/index').then(component => {
            callback(null, component.default || component)
          })
        }
      } />
  </Route>
)
