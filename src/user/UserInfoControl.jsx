import React from 'react';
import RepoList from './RepoList';
import UserInformation from "./UserInformation"

function isObjectInitialized(obj){
    return Object.keys(obj).length !== 0;
}

class UserInfoControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: "",
            user : {},
            repos : {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({login: event.target.value})
    }

    handleSubmit(event){
        //fetch the user and change the state
        fetch(`https://api.github.com/users/${this.state.login}`)
        .then((response) => {
            if(response.ok)
                return response.json()
            else
                throw new Error('User does not exist!')
        })
        .then((userData) => this.setState({user: userData}))
        .then(() => fetch(this.state.user.repos_url))
        .then((response) => response.json())
        .then((repoList) => this.setState({repos: repoList}))
        .catch((error) => alert(error.message))
        event.preventDefault();
    }    

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Github Username: 
                        <input type="text" value={this.state.login} onChange={this.handleChange} /> 
                    </label>
                    <p />
                    <input type="submit" value="Click Me"/>
                </form>
                <br />
                {isObjectInitialized(this.state.user) && <UserInformation user={this.state.user} />}
                {isObjectInitialized(this.state.repos) && <RepoList repos={this.state.repos} />} 
            </div>
        );
    }
}

export default UserInfoControl;
