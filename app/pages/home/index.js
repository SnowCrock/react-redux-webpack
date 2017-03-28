import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addTodo,
} from 'actions/home'

@connect(
  (state,props)=>({
    counter:state,
  }),
)//两种写法  跟的参数都是一样的


export default class home extends React.Component{
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
  }

  render(){
    return(
      <div>
        主页
      </div>
    )
  }
}



function mapStateToProps(state){
  return{
    counter:state,
  }
}

// export default connect(mapStateToProps)(home)