import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user).then( (user) => {
    return dispatch(receiveCurrentUser(user));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then( () => {
    return dispatch(logoutCurrentUser());
  });
};

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user).then( (user) => {
    return dispatch(receiveCurrentUser(user));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
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
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
