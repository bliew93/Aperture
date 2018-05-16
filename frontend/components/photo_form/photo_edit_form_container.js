import React from 'react';
import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { updatePhoto, fetchPhoto, clearErrors } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import { isEmpty } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  let photoStates = {0: {title: '', body: ''}};

  if(ownProps.photos) {
    const photosArr = Object.values(ownProps.photos);

    for (var i = 0; i < photosArr.length; i++) {
      Object.assign(photoStates, {[photosArr[i].id]: {title: photosArr[i].title, body: photosArr[i].body}});
    }
  }

  return {
    photoStates: photoStates,
    errors: state.errors.photo,
    formType: 'edit',
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    clearErrors: () => dispatch(clearErrors()),
    processForm: photo => dispatch(updatePhoto(photo)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

class EditiPhotoForm extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    const { processForm, clearErrors, fetchPhoto, photoStates, errors, formType, photos, selectedPhoto } = this.props;
    return (
      <PhotoForm
        processForm={processForm}
        clearErrors={clearErrors}
        fetchPhoto={fetchPhoto}
        photoStates={photoStates}
        errors={errors}
        formType={formType}
        photos={photos}
        selectedPhoto={selectedPhoto}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditiPhotoForm);
