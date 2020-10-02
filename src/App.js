import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {} , repos:  {}}
  }

  getUserInformation() {

    //fetch the user and change the state
    fetch(`https://api.github.com/users/${document.getElementById("login").value}`)
      .then((response) => response.json())
      .then((userData) => this.setState({user: userData}))
      .then(() => document.getElementById("tutorial").hidden = true)
      .then(() => fetch(this.state.user.repos_url))
      .then((response) => response.json())
      .then((repoList) => this.setState({user: this.state.user, repos: repoList}));
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
        <div id="tutorial" className="App-intro">
          <p>Click on the button to fetch the user information</p>
          Github username: <input id="login"></input>
          <br/><br/>
          <button onClick={this.getUserInformation.bind(this)}>
            Click me
          </button>
        </div>
        <UserInformation user={this.state.user} repos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
