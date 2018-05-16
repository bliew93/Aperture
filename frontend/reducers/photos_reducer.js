import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const defaultPhotoState = {};

const photosReducer = (state = defaultPhotoState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
    case RECEIVE_USERS:
      if(!action.payload.photos) { return defaultPhotoState; }
      return action.payload.photos;
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return { [action.photo.id]: action.photo };
    case REMOVE_PHOTO:
      const newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
