import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultSessionState = { currentUser: null };

const sessionReducer = (state = defaultSessionState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.payload.users };
    case LOGOUT_CURRENT_USER:
      return defaultSessionState;
    default:
      return state;
  }
};

export default sessionReducer;
