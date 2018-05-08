import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user).then( (user) => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const logout = () => {
  return SessionApiUtil.logout().then( () => {
    return dispatch(logoutCurrentUser());
  });
};

export const signup = (user) => {
  return SessionApiUtil.signup(user).then( (user) => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};


export const logoutCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
