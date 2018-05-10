import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Welcome from './welcome/welcome';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => {

  return (
    <div className="home">
        <NavbarContainer />

      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={Welcome} />
      </Switch>
    </div>
  );
};

export default App;
