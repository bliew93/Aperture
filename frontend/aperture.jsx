import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchUser, followUser, unfollowUser } from './actions/user_actions';
document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  let store;

  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUser = fetchUser;
  window.followUser = followUser;
  window.unfollowUser = unfollowUser;

  ReactDOM.render(<Root store={store} />, root);
});
