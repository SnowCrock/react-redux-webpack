import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

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
    this.props.dispatch(addTodo(111))
  }

  componentWillMount(){
    const state=this.state
    console.log({...state,loading:false})
  }

  render(){
    return(
      <div className='home'>
        <ul className='title'>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <a onClick={this.send}>Setting</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
        </ul>
      </div>
    )
  }
}


// export default connect(mapStateToProps)(home)