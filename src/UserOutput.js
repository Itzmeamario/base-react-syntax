import React from 'react';
import './UserOutput.css';

const UserOutput = ({username}) => {
  return (
    <div className="UserOutput">
      <p className="Username">{username}</p>
      <p className="SecondText">Testing: This test should overflow the div in so many ways checking if height is resizable</p>
    </div>
  );
};

export default UserOutput;