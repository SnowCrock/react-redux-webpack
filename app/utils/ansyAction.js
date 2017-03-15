import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'


export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function createAjaxAction(api,startAction,endAction){
  const start = createAction(startAction)
  const end = createAction(startAction)
  return function(data,cd,reject){
    return function(dispatch){
      dispatch(start())
      fetch('package.json')
        .then(response =>response.json())
        .then(json =>console.log('success'))
        .then(dispatch(end({req:11})))
    }
  }
}

export function ajaxPosts(){
  
}

export function fetchPosts(subreddit) {

  //thunk middleware 知道如何处理函数
  //这里把dispatch方法通过参数的形式传给函数，
  //以此来让它自己也能dispatch action
  return dispatch => {
    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。
    dispatch(requestPosts(subreddit))
    //thunk middleware调用的函数可以有返回值，
    //他回被当作dispatch方法的返回值传递。（比如这里返回的是一个等待处理的promise）

    return fetch(`package.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}