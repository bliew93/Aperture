import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


export const fetchUser = (userId) => dispatch => {
  return UserApiUtil.fetchUser(userId).then ( (payload) => {
    return dispatch(receiveUser(payload));
  });
};

export const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    payload
  };
};
