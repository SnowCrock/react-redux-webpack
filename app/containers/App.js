import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchPosts } from 'utils/ansyAction'
@connect(
  (state,props)=>({
    counter:state,
  }),
)//两种写法  跟的参数都是一样的


export default class app extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:1,
      value:2,
    }
    this.send = this.send.bind(this)
  }

  send(){
    this.props.dispatch(fetchPosts(11))
  }

  componentWillMount(){
    const state=this.state
    console.log({...state,loading:false})
  }

  render(){
    const { children } =this.props
    return(
      <div className='home'>
        <ul className='title'>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <Link to='/setting'>Setting</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <a onClick={this.send}>test</a>
          </li>
        </ul>
        {children}
      </div>
    )
  }
}


// export default connect(mapStateToProps)(home)