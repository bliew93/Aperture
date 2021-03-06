import UploadPhoto from './upload_photo';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.photo,
    modalType: 'upload'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);
