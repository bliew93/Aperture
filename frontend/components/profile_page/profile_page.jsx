import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PhotoGrid from '../photo_grid/photo_grid';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-contents">
          <div className="profile-cover-photo"></div>
          <div className="profile-user-avatar">
            <img src={this.props.user.image_url}></img>
          </div>
          <h1 className="profile-page-user">{this.props.user ? this.props.user.username : ''}</h1>
          <div className="profile-user-details"></div>

          <PhotoGrid photos={this.props.photos} />
        </div>
      </div>
    );
  }

}

export default withRouter(ProfilePage);
