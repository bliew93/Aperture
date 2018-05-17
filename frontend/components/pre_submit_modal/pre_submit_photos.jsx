import React from 'react';
import PhotoCreateFormContainer from '../photo_form/photo_create_form_container';
import FormPhotosGrid from '../photo_grid/form_photos_grid';

class PreSubmitPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPhoto: 0 };
    this.updateSelectedPhoto = this.updateSelectedPhoto.bind(this);
  }

  updateSelectedPhoto(photoId) {
    this.setState({ selectedPhoto: photoId });
  }

  render() {
    return (
      <div className='pre-submit-photos'>
        <div className='photo-images'>
          <FormPhotosGrid photos={this.props.photos}
            updateSelectedPhoto={this.updateSelectedPhoto}
            selectedPhoto={this.state.selectedPhoto}/>
        </div>
        <div className='CreateForm'>
          <PhotoCreateFormContainer selectedPhoto={this.state.selectedPhoto} photos={this.props.photos}/>
        </div>
      </div>
    );

  }
}

export default PreSubmitPhotos;
