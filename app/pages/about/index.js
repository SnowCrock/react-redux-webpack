import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect(
    (state, props) => ({
      counter: state,
    }),
  ) //两种写法  跟的参数都是一样的


export default class about extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        关于
      </div>
    )
  }
}
