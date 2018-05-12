import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { createPhoto, clearErrors } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.photo,
    formType: 'create',
    photo: { title: '', body: ''}
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
