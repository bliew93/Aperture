import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser, followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    user: state.entities.users[ownProps.match.params.userId],
    photos: state.entities.photos,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
