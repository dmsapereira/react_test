import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfoControl from './user/UserInfoControl';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div className="App-intro">
          <p>Click on the button to fetch the user information</p>
          <br/>
          <UserInfoControl />
        </div>
      </div>
    );
  }
}

export default App;
