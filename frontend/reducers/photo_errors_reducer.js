import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTO, RECEIVE_PHOTOS, CLEAR_ERRORS } from '../actions/photo_actions';

const defaultErrorState = [];

const photoErrorsReducer = (state = defaultErrorState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO:
      return defaultErrorState;
    case RECEIVE_PHOTOS:
      return defaultErrorState;
    case CLEAR_ERRORS:
      return defaultErrorState;
    default:
      return state;
  }
};

export default photoErrorsReducer;
