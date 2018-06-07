import React from 'react';
// change later
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
const FormPhotoGrid = ({ photos, updateSelectedPhoto, selectedPhoto }) => {
  const allPhotos = photos.map( (photo, idx) => {
    let selected;
    selectedPhoto === photo.id ? selected = '-selected' : selected = '-unselected'
    return (
      <div className={`photo-grid-item${selected}`} key={idx}>
        <a className="photo-link" onClick={() => updateSelectedPhoto(photo.id)}>
          <img src={photo.image_url}></img>
        </a>
      </div>
    )
  });

  return (
    <div className="photo-grid-container">
      <div className="photo-grid-contents">
        <div className='photo-grid-sizer'></div>
        <div className='photo-gutter-sizer'></div>
        {allPhotos}
      </div>
    </div>
  );
};

export default FormPhotoGrid;
