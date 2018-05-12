import React from 'react';
import ImageModal from '../image_modal/image_modal';
import PhotoCreateFormContainer from '../photo_form/photo_create_form_container';
import UploadPhotosGrid from '../photo_grid/upload_photos_grid';

class PreSubmitPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPhoto: 0 };
    this.updateSelectedPhoto = this.updateSelectedPhoto.bind(this);
  }

  updateSelectedPhoto(photoId) {
    this.setState({ selectedPhoto: photoId });
  }

  // on submit, delete window.tempPhotoState
  render(){
    return (
      <div className='pre-submit-photos'>
        <div className='photo-images'>
          <UploadPhotosGrid photos={window.tempPhotoState}
            updateSelectedPhoto={this.updateSelectedPhoto}
            selectedPhoto={this.state.selectedPhoto}/>
        </div>
        <div className='CreateForm'>
          <PhotoCreateFormContainer selectedPhoto={this.state.selectedPhoto}/>
        </div>
      </div>
    );

  }
}

export default PreSubmitPhotos;
