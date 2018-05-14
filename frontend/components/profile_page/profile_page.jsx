import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
    const allUserPhotos = this.props.photos.map( (photo) => {
      return (
        <div className="photo-grid-item" key={photo.id}>
          <img src={photo.image_url}></img>
        </div>
      );
    });

    return (
      <div>
        <h1>{this.props.user ? this.props.user.username : ''}</h1>
        {allUserPhotos}
      </div>
    );
  }

}

export default withRouter(ProfilePage);
