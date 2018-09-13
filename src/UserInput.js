import React from 'react';
import './UserInput.css'

const UserInput = ({usernameHandle, username}) => {
  return (
    <div className="userInput">
      <input className="input" onChange={usernameHandle} value={username}></input>
    </div>
  );
};

export default UserInput;