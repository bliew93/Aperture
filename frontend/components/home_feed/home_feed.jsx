import React from 'react';

const HomeFeed = (props) => {

  const allFollowedPhotos = props.photos.map( (photo) => {
    return (
      <div className="followed-photo-container" key={photo.id}>
        <div className="followed-photo-header">
          <a>
            <img></img>
          </a>
        </div>

        <div className="followed-photo-img">
          <a>
            <img></img>
          </a>
        </div>

        <div className="followed-photo-footer">

        </div>
      </div>
    );
  });

  return (
    <div className="home-feed-container">
      {allFollowedPhotos}
    </div>
  );
};

export default HomeFeed;
