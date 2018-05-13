import React from 'react';
// change later
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
const UploadPhotoGrid = ({ photos, updateSelectedPhoto, selectedPhoto }) => {
  const allPhotos = photos.map( (photo, idx) => {
    let selected;
    selectedPhoto === photo.id ? selected = '-selected' : selected = ''
    return (
      <div className={`photo-grid-item${selected}`} key={idx}>
        <a className="photo-link" href='#' onClick={() => updateSelectedPhoto(photo.id)}>
          <img src={photo.imageUrl}></img>
        </a>
      </div>
    )
  });

  return (
    <div className="photo-grid-container">
      <div className="photo-grid-contents">
        {allPhotos}
      </div>
    </div>
  );
};

export default UploadPhotoGrid;
