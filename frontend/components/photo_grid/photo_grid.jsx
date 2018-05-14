import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGrid = ({ photos }) => {
  const allPhotos = photos.map( (photo) => {
    return (
      <div className="photo-grid-item$" key={photo.id}>
        <Link to={`/photo/${photo.id}`}></Link>
        <img src={photo.imageUrl}></img>
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
