import React from 'react';
// change later
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
const PhotoGrid = (props) => {
  let allRows;
  const allPhotos = props.photos.forEach( (photo, idx) => {


  });

  return (
    <div className="photo-grid">
      {allPhotos}
    </div>
  );
};

export default PhotoGrid;
