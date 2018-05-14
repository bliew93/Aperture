import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserDropdown from '../user_dropdown/user_dropdown';

// maybe have it be part of a navbar container later
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.revealDropdown = this.revealDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);

    this.rightNav = '';
  }

   revealDropdown(e) {
    e.stopPropagation(); // prevent event from being picked up by body
  	$('#user-dropdown').removeClass('hidden');
    $('#user-dropdown-btn').off('mouseenter', this.revealDropdown);
    $('#user-dropdown-btn').on('mouseleave', this.hideDropdown);
  }

  // add "hidden" class to dropdown and update event listeners
  hideDropdown () {
  	$('#user-dropdown').addClass('hidden');
    $('#user-dropdown-btn').on('mouseenter', this.revealDropdown);
    $(document).off('mouseleave', this.hideDropdown);
  }

  loggedInUser()  {
    return (
      <nav className="right-nav">
        <h2>{this.props.currentUser.username}</h2>
        <div id="user-dropdown-btn" onMouseOver={(e) => this.revealDropdown(e)}>
          <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
          <img src={this.props.currentUser.image_url} className="profile-picture"></img>
        </div>

        <div className='upload-button'>
          <button onClick={() => this.props.openModal({ modalType: 'upload' })}>
            <i className="material-icons">cloud_upload</i><span>Upload</span>
          </button>
        </div>
      </nav>
    );
  }

  loggedOutUser()  {
    return (
      <nav className="right-nav">
        <Link to="/login" className='login'>Log in</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </nav>
    );
  }

  render() {
    this.props.currentUser ? this.rightNav = this.loggedInUser() : this.rightNav = this.loggedOutUser(); // jshint ignore:line

    return (
      <header className="main-nav">
        <nav className="left-nav">
          <Link to="/"><img className="logo" src={window.staticImages.logo}></img></Link>
          <ul className="nav-links">
          </ul>
        </nav>

        {this.rightNav}
      </header>
    );
  }
}

export default withRouter(Navbar);
