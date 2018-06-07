import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { merge, isEmpty } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_USERS:
      if(_.isEmpty(action.payload.users)) { return state; }
      return action.payload.users;
    case RECEIVE_USER:
    return { [action.payload.users.id]: action.payload.users };
    case RECEIVE_PHOTO:
      return action.payload.users;
    default:
      return state;
  }
};

export default usersReducer;
