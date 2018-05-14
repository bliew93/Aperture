import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    photo: state.entities.photos[ownProps.match.params.photoId],
    modalType: 'photo-show'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
