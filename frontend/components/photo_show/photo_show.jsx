import React from 'react';
import { withRouter } from 'react-router-dom';
class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }
  // props.history.goBack to go back to profile page
  componentDidMount(){
    if(!Boolean(this.props.photo)){
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
    else {
      this.props.openModal({modalType: this.props.modalType, photo: this.props.photo});
    }
  }

  componentDidUpdate() {
    this.props.openModal({modalType: this.props.modalType, photo: this.props.photo});
  }

  render() {
    return (
      <div>
        <span>This is the photo page</span>
      </div>
    );
  }
}

export default withRouter(PhotoShow);
