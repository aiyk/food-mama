import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'
import MainNav from './components/layout/MainNav'
import AppBar from './components/layout/AppBar'

import Dashboard from './components/dashboard/Dashboard'
import Login from './components/auth/Login'
import Users from './components/users/Users'
import Orders from './components/orders/Orders'
import Payments from './components/payments/Payments'
import Dispatch from './components/dispatch/Dispatch'
import Branches from './components/branches/Branches'
import Settings from './components/settings/Settings'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <MainNav />
          <div className="app-content-area">
            <div className="app-content-inwrap">

              <AppBar />
              <div className="content-body">

                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/orders" component={Orders} />
                  <Route exact path="/payments" component={Payments} />
                  <Route exact path="/dispatch" component={Dispatch} />
                  <Route exact path="/branches" component={Branches} />
                  <Route exact path="/settings" component={Settings} />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
