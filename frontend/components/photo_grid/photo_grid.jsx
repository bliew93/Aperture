import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGrid = ({ photos }) => {

  const photosArr = Object.values(photos);

  const allPhotos = photosArr.map( (photo) => {
    return (
      <div className="photo-grid-item$" key={photo.id}>
        <Link to={`/photo/${photo.id}`}></Link>
        <img src={photo.image_url}></img>
      </div>
    );
  });

  return (
    <div className="photo-grid-container">
      <div className="photo-grid-contents">
        {allPhotos}
      </div>
    </div>
  );
};

export default PhotoGrid;
