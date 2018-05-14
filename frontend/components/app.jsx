import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Welcome from './welcome/welcome';
import ProfilePageContainer from './profile_page/profile_page_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => {

  return (
    <div className="home">
        <NavbarContainer />
        <Modal />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={Welcome} />
        <ProtectedRoute exact path="/users/:userId" component={ProfilePageContainer}/>
      </Switch>
    </div>
  );
};

// <ProtectedRoute exact path="/" component={HomeFeed}/> //Will be added later to switch
export default App;
