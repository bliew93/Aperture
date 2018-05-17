import ManageProfile from './manage_profile';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { updateUser, fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentUserPhotos: state.entities.photos,
    errors: state.errors.session,
    modalType: 'manage-profile'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    updateCurrentUser: (currentUserId) => dispatch(updateUser(currentUserId)),
    fetchCurrentUser: (currentUserId) => dispatch(fetchUser(currentUserId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfile);
