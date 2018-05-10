import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// maybe have it be part of a navbar container later
const Navbar = (props) =>  {
  let rightNav;

  // user will need a drop down menu later
  // there will need an upload photo button here
  const loggedInUser = () => {
    return (
      <nav className="right-nav">
        <h2>{props.currentUser.username}</h2>
        <img src={props.currentUser.image_url}></img>
          <Link to="/">Upload Photo</Link>
        <button onClick={props.logout}>Log Out</button>
      </nav>
    );
  };

  const loggedOutUser = () => {
    return (
      <nav className="right-nav">
        <Link to="/login">Log in</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </nav>
    );
  };

  props.currentUser ? rightNav = loggedInUser() : rightNav = loggedOutUser(); // jshint ignore:line
  return (
    <header className="main-nav">
      <nav className="left-nav">
        <Link to="/"><img className="logo" src={window.staticImages.logo}></img></Link>
        <ul className="nav-links">
        </ul>
      </nav>

      {rightNav}
    </header>
  );
};

export default withRouter(Navbar);
