import React from 'react';
import { withRouter } from 'react-router-dom';
import { isEqual } from 'lodash';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
     this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentDidUpdate(prevProps, prevState) {
    if(!_.isEqual(this.props, prevProps)) {
      this.props.openModal({
        modalType: this.props.modalType,
        user: this.props.user,
        photo: this.props.photo,
        comments: this.props.comments,
        createComment: this.props.createComment,
        closeModal: this.props.closeModal,
        currentUser: this.props.currentUser,
        commentUsers: this.props.commentUsers,
        followUser: this.props.followUser,
        unfollowUser: this.props.unfollowUser
      });
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withRouter(PhotoShow);
