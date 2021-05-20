import React, { Component } from 'react'
import './App.css';
import { HashRouter as Hash, Route, Switch, NavLink } from 'react-router-dom'
import Home from './view/home'
import Mine from './view/my'
import Find from './view/find'
import Music from './view/music'

function App() {
  return (
    <div>
      <h4>Main-Router</h4>
      <Hash basename="/"  >
          <AppLayout></AppLayout>
      </Hash>
    </div>
  );
}

export default App;

class AppLayout extends Component {
  render(){
    return (
      <div>
        <div>
          <NavLink to="/" activeStyle={{background:'red'}} exact>  首页  </NavLink>
          <NavLink to="/find" activeStyle={{background:'red'}} >  发现  </NavLink>
          <NavLink to="/music" activeStyle={{background:'red'}} >  音乐  </NavLink>
          <NavLink to="/mine" activeStyle={{background:'red'}} >  我的  </NavLink>
        </div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/music" component={Music}/>
          <Route path="/find" component={Find}/>
          <Route path="/mine" component={Mine}/>
        </Switch>
      </div>

    )
  }
}