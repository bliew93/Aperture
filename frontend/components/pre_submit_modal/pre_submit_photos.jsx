import React from 'react';
import ImageModal from '../image_modal/image_modal';
import PhotoCreateFormContainer from '../photo_form/photo_create_form_container';

const PreSubmitPhotos = (props) => {
  // instead of this, implement the photo grid
  const allPhotos = window.tempPhotoState.map( (photo, idx) => {
    return <img src={photo.imageUrl} key={idx} className="grid-photo"></img>;
  });

  // on submit, delete window.tempPhotoState
  // change this to the photo grid
  return (
    <div className='pre-submit-photos'>
      <div className='photo-images'>
        {allPhotos}
      </div>
      <div className='CreateForm'>
        <PhotoCreateFormContainer />
      </div>
    </div>
  );
};

export default PreSubmitPhotos;
