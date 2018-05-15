import ManagePhotos from './manage_photos';
import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    photos: state.entities.photos,
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePhotos);
