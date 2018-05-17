import React from 'react';
import { Link } from 'react-router-dom';

const UserDropdown = (props) => {

  return (
    <ul id="user-dropdown" className="user-dropdown hidden">
			<li><Link to={`/users/${props.currentUser.id}`}>My Profile</Link></li>
      <li className="manage-profile">
        <a onClick={() => props.openModal({modalType: 'manage-profile'})}>
          Manage Profile
        </a>
      </li>
      <li className="manage-photos"><Link to='/manage'>Manage Photos</Link></li>
			<li className='logout-button'><a href="#" onClick={props.logout}>Log out</a></li>
  </ul>
  );
};

export default UserDropdown;
