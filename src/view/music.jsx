import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMusicAsync } from '../action'

@connect(
  state => ({
    data: state.get('data'),
  }),
  dispatch => ({
    getMusicAsync: () => dispatch(getMusicAsync())
  })
)
class Music extends Component {
  
  render(){
    const data = this.props.data.toJS()
    const { getMusicAsync } = this.props;
    return (
      <div>
        <h4>Music - music - music</h4>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            data.music.map((item, index) => {
              return (
                <div style={{display: 'flex', flexDirection: 'column', width: 190,margin: 10}} key={index}>
                  <img src={item.picUrl} style={{height: 190, width: 190}}/>
                  {item.name}
                </div>
              )
            })
          }
        </div>
        <button onClick={getMusicAsync}>点击获取音乐</button>
      </div>
    )
  }
}

export default Music;