import React from 'react';

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {title: '', body: ''};
  }

  render(){
    return (
      <div className="upload-photo-container">
        <span>upload your photos here!</span>
      </div>
    );
  }
}

export default UploadPhoto;
