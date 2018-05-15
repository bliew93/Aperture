import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, RECEIVE_UNFOLLOW } from '../actions/user_actions';
import { merge } from 'lodash';

const defaultSessionState = { currentUser: null };

const sessionReducer = (state = defaultSessionState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_FOLLOW:
       newState = merge({}, state);
      newState.currentUser.followee_ids = newState.currentUser.followee_ids.concat([action.followeeId]);
      return newState;
    case RECEIVE_UNFOLLOW:
      newState = merge({}, state);
      const deleteFolloweeIdIdx = newState.currentUser.followee_ids.indexOf(action.followeeId);
      newState.currentUser.followee_ids.splice(deleteFolloweeIdIdx, 1);
      return newState;
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.payload.users };
    case LOGOUT_CURRENT_USER:
      return defaultSessionState;
    default:
      return state;
  }
};

export default sessionReducer;
