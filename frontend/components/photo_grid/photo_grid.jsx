import React from 'react';

// change later
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
const PhotoGrid = (props) => {
  const allPhotos = props.photos.map( (photo) => {
    return <li key={photo.id}>{photo}</li>;
  });
  return (
    <ul>
      {allPhotos}
    </ul>
  );
};

export default PhotoGrid;
