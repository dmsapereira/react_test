import React from 'react';
import RepoList from './RepoList'

const UserInformation = props => (
  <div>
    <img src={props.user.avatar_url} alt="Missing Avatar"/>
    <p/>
    <b>Login: </b>{props.user.login}
    <p/>
    <b>Name: </b>{props.user.name}
    <p/>
    <b>Company: </b>{props.user.name}
    <p/>
    <b>Location: </b>{props.user.location}
    <p/>
    <b>Bio: </b> {props.user.bio}
    <p/>
    <b>Followers: </b> {props.user.followers}
    <p/>
    <b>Following: </b> {props.user.following}
    <hr/>
    <h1>Repos</h1>
    <RepoList repos={props.repos}/>
  </div>
);

export default UserInformation;
