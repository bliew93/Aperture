import React from 'react';
import { Link } from 'react-router-dom';

// maybe have it be part of a navbar container later
const Navbar = (props) =>  {
  let rightNav;

  // user will need a drop down menu later
  // there will need an upload photo button here
  const loggedInUser = () => {
    return (
      <div className="right-nav">
        <h2>{props.currentUser.username}</h2>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  };

  const loggedOutUser = () => {
    return (
      <div className="right-nav">
        <Link to="/login">Log In</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    );
  };

  props.currentUser ? rightNav = loggedInUser() : rightNav = loggedOutUser(); // jshint ignore:line
  return (
    <div className="navbar">
      <nav className="navbar-contents">
        <Link to="/"><img className="logo" src="/assets/logo_trans.png" ></img>

        </Link>
        <ul className="nav-links">
          <li>Discover</li>
        </ul>
        {rightNav}
      </nav>
    </div>
  );
};

export default Navbar;
