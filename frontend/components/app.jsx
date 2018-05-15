import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Welcome from './welcome/welcome';
import ProfilePageContainer from './profile_page/profile_page_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import ManagePhotosContainer from './manage_photos/manage_photos_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => {

  return (
    <div className="home">
        <NavbarContainer />
        <Modal />
      <Switch>
        <AuthRoute exact path="/" component={Welcome} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/feed" component={HomeFeedContainer}/>
        <ProtectedRoute exact path="/users/:userId" component={ProfilePageContainer}/>
        <ProtectedRoute exact path="/photo/:photoId" component={PhotoShowContainer}/>
        <ProtectedRoute exact path="/manage" component={ManagePhotosContainer}/>
      </Switch>
    </div>
  );
};

export default App;
