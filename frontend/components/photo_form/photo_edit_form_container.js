import React from 'react';
import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { updatePhoto, fetchPhoto, clearErrors } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultPhoto = { title: '', body: '' };
  const photo = state.photos[ownProps.match.params.photoId] || defaultPhoto;
  const formType = 'EditPhoto';

  return { post, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    clearErrors: () => dispatch(clearErrors()),
    processForm: photo => dispatch(updatePhoto(photo)),
    closeModal: () => dispatch(closeModal())
  };
};

class EditiPhotoForm extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.match.params.photoId) {
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  render() {
    const { processForm, formType, photo, closeModal, clearErrors } = this.props;
    return (
      <PhotoForm
        processForm={processForm}
        formType={formType}
        photo={photo}
        closeModal={closeModal}
        clearErrors={clearErrors} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditiPhotoForm);
