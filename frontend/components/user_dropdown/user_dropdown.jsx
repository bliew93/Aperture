import React from 'react';
import { Link } from 'react-router-dom';

const UserDropdown = (props) => {
  return (
    <ul id="user-dropdown" className="user-dropdown hidden">
			<li><Link to={`/users/${props.currentUser.id}`}>My Profile</Link></li>
      <li className="manage-profile"><a href="#">Manage Profile</a></li>
      <li className="manage-photos"><a href="#">Manage Photos</a></li>
			<li className='logout-button'><a href="#" onClick={props.logout}>Log out</a></li>
  </ul>
  );
};

export default UserDropdown;
