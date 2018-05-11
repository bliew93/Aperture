import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Sync
export const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

export const receivePhotos = (photos) => {
  return {
    type: RECEIVE_PHOTOS,
    photos
  };
};

export const removePhoto = (photoId) => {
  return {
    type: REMOVE_PHOTO,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};


// Async
export const fetchPhotos = () => dispatch => {
  return PhotoApiUtil.fetchPhotos().then( (photos) => {
    return dispatch(receivePhotos(photos));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
  });
};

export const fetchPhoto = (photoId) => dispatch => {
  return PhotoApiUtil.fetchPhoto(photoId).then( (photo) => {
    return dispatch(receivePhoto(photo));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
  });
};

export const createPhoto = (photo) => dispatch => {
  return PhotoApiUtil.createPhoto(photo).then( (photo) => {
    return dispatch(receivePhoto(photo));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
  });
};

export const updatePhoto = (photo) => dispatch => {
  return PhotoApiUtil.updatePhoto(photo).then( (photo) => {
    return dispatch(receivePhoto(photo));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
  });
};

export const deletePhoto = (photoId) => dispatch => {
  return PhotoApiUtil.deletePhoto(photoId).then( () => {
    return dispatch(removePhoto(photoId));
  },
  (errs) => {
    dispatch(receiveErrors(errs.responseJSON));
  });
};
