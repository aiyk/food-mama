import React, { Component } from 'react';
import './App.scss';
import MainNav from './components/layout/MainNav';
import AppBar from './components/layout/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <div className="app-content-area">
          <div className="app-content-inwrap">
            <AppBar />
            <div className="content-body"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
