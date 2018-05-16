export const fetchPhotos = () => {
  return $.ajax({
    method: 'get',
    url: 'api/photos/'
  });
};

export const fetchPhoto = (photoId) => {
  return $.ajax({
    method: 'get',
    url: `api/photos/${photoId}`
  });
};

export const createPhoto = (formData) => {
  return $.ajax({
    method: 'post',
    url: 'api/photos',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'patch',
    url: `api/photos/${photo.id}`,
    data: { photo }
  });
};

export const deletePhoto = (photoId) => {
  return $.ajax({
    method: 'delete',
    url: `api/photos/${photoId}`
  });
};

export const createComment = (photoId, comment) => {
  return $.ajax({
    method: 'post',
    url: `/api/photos/${photoId}/create_comment`,
    data: { comment: { body: comment } }
  });
};
