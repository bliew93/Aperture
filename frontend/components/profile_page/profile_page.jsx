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
    const coverPhoto = (this.props.user && Boolean(this.props.user.coverPhotoId) && !_.isEmpty(this.props.photos)) ?
       this.props.photos[this.props.user.coverPhotoId].image_url : '';

    const avatarImg = (this.props.user && Boolean(this.props.user.image_url)) ?
      this.props.user.image_url : '';

    const aboutYou = (this.props.user && Boolean(this.props.user.aboutYou)) ?
      this.props.user.aboutYou : '';

    const followeeIds = (this.props.user && Boolean(this.props.user.followee_ids)) ?
      this.props.user.followee_ids : [];

    const followersIds = (this.props.user && Boolean(this.props.user.followers_ids)) ?
      this.props.user.followee_ids : [];


    return (
      <div className="profile-container" >
        <div className="profile-contents">

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


          <PhotoGrid photos={this.props.photos} />
        </div>
      </div>
    );
  }

}

export default withRouter(ProfilePage);
