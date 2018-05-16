import React from 'react';
import { withRouter } from 'react-router-dom';
class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
     this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentDidUpdate() {
    this.props.openModal({
      modalType: this.props.modalType,
      photo: this.props.photo,
      comments: this.props.comments,
      createComment: this.props.createComment
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withRouter(PhotoShow);
