import HomeFeed from './home_feed';
import { connect } from 'react-redux';

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
