import React from 'react';

const PreSubmitPhotos = (props) => {
  // instead of this, implement the photo grid 
  const allPhotos = window.tempPhotoState.map( (photo) => {
    return <img src={photo.imageUrl} key={photo.id}></img>;
  });

  // on submit, delete window.tempPhotoState
  return (
    <div className='image-container'>
      {allPhotos}
    </div>
  );
};

export default PreSubmitPhotos;
