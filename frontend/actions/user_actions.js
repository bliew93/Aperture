import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_UNFOLLOW = 'RECEIVE_UNFOLLOW';

export const fetchUser = (userId) => dispatch => {
  return UserApiUtil.fetchUser(userId).then ( (payload) => {
    return dispatch(receiveUser(payload));
  });
};

export const followUser = (followeeId) => dispatch => {
  return UserApiUtil.followUser(followeeId).then( () => {
    return dispatch(receiveFollow(followeeId));
  });
};

export const unfollowUser = (followeeId) => dispatch => {
  return UserApiUtil.unfollowUser(followeeId).then(() => {
    return dispatch(receiveUnfollow(followeeId));
  });
};

export const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    payload
  };
};

export const receiveFollow = (followeeId) => {
  return {
    type: RECEIVE_FOLLOW,
    followeeId
  };
};

export const receiveUnfollow = (followeeId) => {
  return {
    type: RECEIVE_UNFOLLOW,
    followeeId
  };
};
