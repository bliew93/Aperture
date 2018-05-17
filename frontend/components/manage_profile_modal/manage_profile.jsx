import React from 'react';

//about_you, cover_photo_id, and avatar

class ManageProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentUser;
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateFile(e) {
    const file = e.currentTarget.files;
    this.parseFile(file);
  }

  parseFile(file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.tempPhotoState = { image_url: reader.result, imageFile: file};
    };

    if (file) { reader.readAsDataURL(file); }
  }

  render(){
    return (
      <div className="manage-profile-container">
        <form className="manage-profile-form">

          <div className="upload-btn-wrapper">
            <button className="select-photos-upload"
              onClick={() => document.getElementById('file').click()}>Select Photos
            </button>
            <input type="file" id="file" onChange={this.updateFile}></input>
          </div>

          <label>About You</label>
          <textarea onChange={this.update("about_you")} value={this.state.about_you}></textarea>
        </form>


      </div>

    );
  }
}

export default ManageProfile;
