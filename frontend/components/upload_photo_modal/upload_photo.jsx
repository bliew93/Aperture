import React from 'react';
import { merge } from 'lodash';

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.updateFiles = this.updateFiles.bind(this);
    this.parseFiles = this.parseFiles.bind(this);
    this.tempPhotoState = [];
  }

  // set state and store the state on the window to use temporarily
  // remove from window once it's either submitted or submit is cancelled
  updateFiles(e) {
    const files = e.currentTarget.files;
    for (var i = 0; i < files.length; i++) {
      this.parseFiles(files[i], i, files.length);
    }
  }

  parseFiles(file, idx, filesCount) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.tempPhotoState = this.tempPhotoState.concat( { id: idx, image_url: reader.result, imageFile: file} );

      if(filesCount === this.tempPhotoState.length){
        this.props.openModal({ modalType: 'pre-submit', photos: this.tempPhotoState });
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render(){
    return (
      <div className="upload-photo-container">
        <div className="upload-btn-wrapper">
          <button className="select-photos-upload"
            onClick={() => document.getElementById('file').click()}>Select Photos
          </button>
          <input type="file" id="file" multiple="multiple" onChange={this.updateFiles}></input>
        </div>
      </div>
    );
  }
}

export default UploadPhoto;
