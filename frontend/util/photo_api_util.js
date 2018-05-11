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

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'post',
    url: 'api/photos',
    data: { photo }
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
