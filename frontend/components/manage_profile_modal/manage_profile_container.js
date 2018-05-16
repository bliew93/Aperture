import ManageProfile from './manage_profile';
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
    openModal: (modalType) => dispatch(openModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfile);
