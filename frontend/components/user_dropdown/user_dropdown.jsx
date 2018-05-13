import React from 'react';

const UserDropdown = (props) => {
  return (
    <ul id="user-dropdown" className="user-dropdown hidden">
			<li><a href="#">My Profile</a></li>
			<li><a href="#">Manage Avatar</a></li>
			<li><a href="#" onClick={props.logout} className='logout-button'>Log out</a></li>
  </ul>
  );
};

export default UserDropdown;
