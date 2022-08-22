import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients'
import NewClient from './pages/NewClient'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/clients" component={ Clients } />
        <Route exact path="/newclient" component={ NewClient } />
      </Switch>
    )
  }
}
