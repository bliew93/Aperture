import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PhotoGrid from '../photo_grid/photo_grid';
import { isEmpty } from 'lodash';

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

  followButton(){
    const currentUserFolloweeIds = this.props.currentUser.followee_ids;
    const userId = parseInt(this.props.match.params.userId);

    if(currentUserFolloweeIds.indexOf(userId) === -1) {
      return <button onClick={() => this.props.followUser(userId)}>Follow User</button>;
    }
    else {
      return <button onClick={() => this.props.unfollowUser(userId)}>Unfollow User</button>;
    }
  }

  profileButton(){
    if(parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
      return this.followButton();
    }
    else {
      return (
        <button>Manage Profile</button>
      );
    }
  }

  render() {
    const user = this.props.user;
    const photos = this.props.photos;

    const coverPhoto = (user && Boolean(user.cover_photo_id) && (photos[user.cover_photo_id] !== undefined)) ?
       photos[user.cover_photo_id].image_url : '';

    const avatarImg = (user && Boolean(user.image_url)) ?
      user.image_url : '';

    const aboutYou = (user && Boolean(user.about_you)) ?
      user.about_you : '';

    const followeeIds = (user && Boolean(user.followee_ids)) ?
      user.followee_ids : [];

    const followersIds = (user && Boolean(user.followers_ids)) ?
      user.followee_ids : [];


    return (
      <div className="profile-container" >
        <div className="profile-contents">


          <div className='test'>
            <div className="profile-cover-photo">
              <img src={coverPhoto}></img>
            </div>
            <div className="profile-user-avatar">
              <img src={avatarImg}></img>
            </div>

            <div className="profile-button">
              {this.profileButton()}
            </div>

            <h1 className="profile-page-user">{this.props.user ? this.props.user.username : ''}</h1>
            <div className="profile-user-details">
              {aboutYou}

              <div className="follow-stats">
                <span>{followersIds.length} Followers</span>
                <span>{followeeIds.length} Following</span>
              </div>
            </div>
          </div>


          <PhotoGrid photos={this.props.photos} />
        </div>
      </div>
    );
  }

}

export default withRouter(ProfilePage);
