import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {} }
  }

  getUserInformation() {
    let login = "dmsapereira";

    //fetch the user and change the state
    fetch(`https://api.github.com/users/${login}`)
      .then((data) => data.blob())
      .then((blob) => blob.text())
      .then((text) => JSON.parse(text))
      .then((userData) => this.setState({user: userData}))
      .then(() => document.getElementById("tutorial").hidden = true);
    
    

    /*
      TODO: fetch a user from the GitHub API

      TIPS:
       1) The Fetch API provides an interface for
         fetching resources (including across the network).
       2) Maybe you want to update the state here.
    */
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
        <div id="tutorial" className="App-intro">
          <hr />
          <p>Click on the button to fetch the user information</p>
          <button onClick={this.getUserInformation.bind(this)}>
            Click me
          </button>
        </div>
        <UserInformation user={this.state.user}/>
      </div>
    );
  }
}

export default App;
