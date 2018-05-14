import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    photo: state.entities.photos[ownProps.match.params.photoId],
    modalType: 'photo-show'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () =>  dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
