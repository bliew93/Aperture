import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    user: state.entities.users[ownProps.match.params.userId],
    photos: Object.values(state.entities.photos)
  };
};

//fetch user's photos
// fetch the specific user. Get the photos
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
