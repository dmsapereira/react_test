import React from 'react';
import RepoList from './RepoList';
import UserInformation from "./UserInformation"

function isObjectInitialized(obj){
    return Object.entries(obj).length !== 0;
}

class UserInfoControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {user : {}, repos : {}};
    }

    handleButtonClick(){
        //fetch the user and change the state
        fetch(`https://api.github.com/users/${document.getElementById("login").value}`)
        .then((response) => response.json())
        .then((userData) => this.setState({user: userData}))
        .then(() => fetch(this.state.user.repos_url))
        .then((response) => response.json())
        .then((repoList) => this.setState({repos: repoList}));
    }    

    render(){
        return (
            <div>
                <button onClick={this.handleButtonClick.bind(this)}>
                Click me
                </button>
                {isObjectInitialized(this.state.user) && <UserInformation user={this.state.user} />}
                {isObjectInitialized(this.state.repos) && <RepoList repos={this.state.repos} />} 
            </div>
        );
    }
}

export default UserInfoControl;
