import React from 'react';
import HomeFeedItem from './home_feed_item';
import { isEmpty } from 'lodash';

class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const photos = this.props.photos;
    const users = this.props.users;

    const allFollowedPhotos = photos.map( (photo) => {
      let user;
      if (!_.isEmpty(users) && !_.isEmpty(photos)) {
        user = users[photo.user_id];
      }
      else {
        user = {id: 0, username: ''};
      }

      return <HomeFeedItem key={photo.id} photo={photo} user={user}/>;
    });

    return (
      <div className="home-feed-container">
        {allFollowedPhotos}
      </div>
    );
  }

}

export default HomeFeed;
