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
    const allFollowedPhotos = this.props.photos.map( (photo) => {
      
      const user = (!_.isEmpty(this.props.users) && !_.isEmpty(this.props.photos)) ?
        this.props.users[photo.user_id] : {username: ''};

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
