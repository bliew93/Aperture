import React from 'react';
import { Link } from 'react-router-dom';

class PhotoGrid extends React.Component  {
  constructor(props) {
    super(props);
  }

  render(){
    const photos = this.props.photos;
    const photosArr = Object.values(photos);

    const allPhotos = photosArr.map( (photo) => {
      return (
        <div className="photo-grid-item" key={photo.id}>
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.image_url}></img>
          </Link>
        </div>
      );
    });

    return (
      <div className="photo-grid-container">
        <div className="photo-grid-contents" >
          <div className='photo-grid-sizer'></div>
          <div className='photo-gutter-sizer'></div>
          {allPhotos}
        </div>
      </div>
    );

  }
}

export default PhotoGrid;
