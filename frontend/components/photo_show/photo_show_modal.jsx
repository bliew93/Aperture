import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PhotoShowModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { body: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textareaEnterSubmit = this.textareaEnterSubmit.bind(this);
  }

  componentWillUnmount() {
    const currentLocation = this.props.history.location.pathname;

    // if current location isn't a user's profile page (via Link), goes back a page
    if(!Boolean(currentLocation.match(/\/users\//))) {
      this.props.history.goBack();
    }
  }

  componentDidUpdate() {
    // scroll to bottom of comments after new comment is created
    const el = this.refs.comments;
    el.scrollTop = el.scrollHeight;
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state.body);
    this.setState({ body: '' });
  }

  textareaEnterSubmit(e) {
    if (e.keyCode == 13) {
      this.handleSubmit(e);
      return false;
    }
  }


  followButton(){
    const currentUserFolloweeIds = this.props.currentUser.followee_ids;
    const userId = parseInt(this.props.user.id);

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
  }

  render() {
    const user = this.props.user || {id: '', image_url: ''};
    const comments = Object.values(this.props.comments);
    const allComments = comments.map( (comment) => {
      return <li key={comment.id}>{comment.body}</li>;
    });

    return (
      <div className='photo-show-container'>
        <div className='photo-image-container'>
          <img src={this.props.photo.image_url} className="photo-img"></img>
        </div>

        <div className='photo-text-container'>
          <div className='photo-show-info'>
            <div className="profile-img">
              <Link to={`/users/${user.id}`} onClick={() => this.props.closeModal()}>
                <img src={user.image_url}></img>
              </Link>
              <Link to={`/users/${user.id}`} onClick={() => this.props.closeModal()}>
                {user.username}
              </Link>
              <div className="follow-state-button">
                {this.profileButton()}
              </div>
            </div>


            <div className="photo-title">
              <h2>{this.props.photo.title}</h2>
            </div>

            <div className='photo-body'>
              <span>{this.props.photo.body}</span>
            </div>
          </div>

          <div className='photo-comments' ref='comments'>
            <ul>
              {allComments}
            </ul>
          </div>

          <form className="photo-comments-form">
            <textarea
              onKeyDown={this.textareaEnterSubmit}
              onChange={this.update("body")}
              value={this.state.body}
              placeholder="Add a comment"
              ></textarea>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoShowModal);
