import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPhoto, createComment } from '../../actions/photo_actions';
import { followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    photo: state.entities.photos[ownProps.match.params.photoId],
    comments: state.entities.comments,
    user: state.entities.users[Object.keys(state.entities.users)[0]],
    currentUser: state.session.currentUser,
    modalType: 'photo-show'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    createComment: (comment) => dispatch(createComment(ownProps.match.params.photoId, comment)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () =>  dispatch(closeModal()),
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
