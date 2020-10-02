import React from 'react';

const UserInformation = props => (
  <div>
    <img src={props.user.avatar_url} alt="Missing Avatar"/>
    <p></p>
    <b>Login: </b>{props.user === undefined ? "?" : props.user.login}
    <p></p>
    <b>Name: </b>{props.user === undefined ? "?" : props.user.name}
    <b>Coompany</b>
  </div>
);

export default UserInformation;
