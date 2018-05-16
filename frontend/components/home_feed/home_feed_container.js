import HomeFeed from './home_feed';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
const mapStateToProps = (state) => {
  return {
    photos: Object.values(state.entities.photos),
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);
