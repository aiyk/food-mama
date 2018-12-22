import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import MainNav from './components/layout/MainNav';
import AppBar from './components/layout/AppBar';

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';

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
