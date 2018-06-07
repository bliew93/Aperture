import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPhoto, createComment } from '../../actions/photo_actions';
import { followUser, unfollowUser } from '../../actions/user_actions';
import { isEmpty } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  let photosUser, commentUserIds, commentUsers;
  const currentPhoto = state.entities.photos[ownProps.match.params.photoId];

  if(currentPhoto) {
    photosUser = state.entities.users[currentPhoto.user_id];

    if(!_.isEmpty(state.entities.comments)) {
      commentUserIds = Object.keys(state.entities.users).filter(el => el !== currentPhoto.user_id.toString());
      commentUsers = commentUserIds.reduce((acc, el) => {acc[el] = state.entities.users[el]; return acc;}, {});
    }
    else {
      commentUsers = {};
    }
  }
  else {
    photosUser = {};
  }

  return{
    photo: currentPhoto,
    comments: state.entities.comments,
    user: photosUser,
    currentUser: state.session.currentUser,
    commentUsers: commentUsers,
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
