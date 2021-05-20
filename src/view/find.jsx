import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCity, updateMsg, deletePhone } from '../action'

@connect(
  state => ({
    data: state.get('data'),
  }),
  dispatch => ({
    changeCity: payload => dispatch(changeCity(payload)),
    updateMsg: payload => dispatch(updateMsg(payload)),
    deletePhone: () => dispatch(deletePhone())
  })
)
class Fine extends Component {
  render(){
    const data = this.props.data.toJS()
    const { changeCity, updateMsg, deletePhone } = this.props;
    return (
      <div>
        <h4>Fine - fine - fine</h4>
        <div>data - city == {data.city}</div>
        <button onClick={()=>changeCity('江苏')}>set city</button>
        <div>data - msg == {data.msg}</div>
        <button onClick={()=>updateMsg('   XiaoMing')}>update msg</button>
        <div>data - users - phone == {data.users.phone}</div>
        <button onClick={()=>deletePhone()}>update msg</button>
      </div>
    )
  }
}

export default Fine;