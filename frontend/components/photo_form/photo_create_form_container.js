import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { createPhoto, clearErrors } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let photoStates = {};
  if(ownProps.photos) {
    for (var i = 0; i < ownProps.photos.length; i++) {
      Object.assign(photoStates, {[ownProps.photos[i].id]: {title: '', body: ''}});
    }
  }

  return {
    errors: state.errors.photo,
    formType: 'create',
    photoStates: photoStates || { 0: {title: '', body: ''} },
    photos: ownProps.photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (photo) => dispatch(createPhoto(photo)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
