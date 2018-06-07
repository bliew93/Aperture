import React from 'react';
import EditPhotoForm from '../photo_form/photo_edit_form_container';
import FormPhotosGrid from '../photo_grid/form_photos_grid';
import { isEmpty } from 'lodash';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPhoto: 0 };
    this.updateSelectedPhoto = this.updateSelectedPhoto.bind(this);

  }
  componentDidMount() {
    if(_.isEmpty(this.props.photos)) {
      this.props.fetchUser(this.props.currentUserId);
    }
  }

  componentDidUpdate() {
    $( document ).ready( () => {
      var grid = document.querySelector('.photo-grid-contents');

      var msnry = new Masonry( grid, {
        columnWidth: '.photo-grid-sizer',
        gutter: '.photo-gutter-sizer',
        itemSelector: '.photo-grid-item-unselected, .photo-grid-item-selected',
        percentPosition: true,
      });

      imagesLoaded( grid ).on( 'progress', function() {
        // layout Masonry after each image loads
        msnry.layout();
      });
    });
  }

  updateSelectedPhoto(photoId) {
    this.setState({ selectedPhoto: photoId });
  }

  render() {
    return (
      <div className="manage-photos-container">
        <div className="manage-photos-contents">

          <div className="photo-type">
            <h2>PHOTOS</h2>
            <ul>
              <li className="photo-type-item">
                <a>All Photos</a>
                <span>{Object.keys(this.props.photos).length}</span>
              </li>
            </ul>
          </div>
          <div className="manage-photo-images">
            <FormPhotosGrid
              photos={Object.values(this.props.photos)}
              updateSelectedPhoto={this.updateSelectedPhoto}
              selectedPhoto={this.state.selectedPhoto}
            />
          </div>

          <div className="edit-photo-form">
            <EditPhotoForm
              photos={this.props.photos}
              selectedPhoto={this.state.selectedPhoto}
              />
          </div>
        </div>


      </div>
    );
  }
}

export default ManagePhotos;
