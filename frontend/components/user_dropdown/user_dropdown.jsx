import React from 'react';
import { Link } from 'react-router-dom';

const UserDropdown = (props) => {
  return (
    <ul id="user-dropdown" className="user-dropdown hidden">
			<li><Link to={`/users/${props.currentUser.id}`}>My Profile</Link></li>
      <li><a href="#">Manage Avatar</a></li>
			<li><a href="#" onClick={props.logout} className='logout-button'>Log out</a></li>
  </ul>
  );
};

export default UserDropdown;
