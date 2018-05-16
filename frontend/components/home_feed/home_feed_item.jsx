import React from 'react';
import { Link } from 'react-router-dom';

const HomeFeedItem = ({ photo, user }) => {
  return (
    <div className="followed-photo-container" key={photo.id}>
      <div className="followed-photo-header">
        <Link to={`/users/${user.id}`}>
          <img src={user.image_url}></img>
        </Link>
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </div>

      <div className="followed-photo-img">
        <Link to={`/photo/${photo.id}`}>
          <img src={photo.image_url}></img>
        </Link>
      </div>

      <div className="followed-photo-footer">
        <h3>{photo.title}</h3>
        <span>{photo.body}</span>
      </div>
    </div>
  );
};

export default HomeFeedItem;
