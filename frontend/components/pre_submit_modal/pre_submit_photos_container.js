import PreSubitPhotos from './pre_submit_photos';
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
    closeModal: () => dispatch(closeModal()),
    openModal: (modalType) => dispatch(openModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);
