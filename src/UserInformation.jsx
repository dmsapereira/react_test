import React from 'react';

const UserInformation = props => (
  <div>
    <img src={props.user.avatar_url} alt="Missing Avatar"/>
    <p></p>
    <b>Login: </b>{props.user.login}
    <p></p>
    <b>Name: </b>{props.user.name}
    <p></p>
    <b>Company: </b>{props.user.name}
    <p></p>
    <b>Location: </b>{props.user.location}
    <p></p>
    <b>Bio: </b> {props.user.bio}
    <p></p>
    <b>Followers: </b> {props.user.followers}
    <p></p>
    <b>Following: </b> {props.user.following}
  </div>
);

export default UserInformation;
