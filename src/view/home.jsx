import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCount, changeCountBySome } from '../action'

@connect(
  state => ({
    count: state.get('count'),
  }),
  dispatch => ({
    changeCount: () => dispatch(changeCount),
    changeCountBySome: payload => dispatch(changeCountBySome(payload)),
  })
)
class Home extends Component {
  render(){
    const { count, changeCount, changeCountBySome } = this.props;
    return (
      <div>
        <h4>Home - home - home</h4>
        <div>count == {count}</div>
        <button onClick={changeCount}>修改count</button>
        <button onClick={()=>changeCountBySome(10)}>修改count</button>
      </div>
    );
  }
}
export default Home;