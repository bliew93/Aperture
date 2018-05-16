import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoShowModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { body: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textareaEnterSubmit = this.textareaEnterSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.history.goBack();
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

  render() {
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
            <div className="photo-title">
              <h2>Title</h2>
              <span>{this.props.photo.title}</span>
            </div>

            <div className='photo-body'>
              <h2>Description</h2>
              <span>{this.props.photo.body}</span>
            </div>
          </div>

          <div className='photo-comments'>
            <ul>
              {allComments}
            </ul>
          </div>

          <form className="photo-comments-form">
            <textarea
              onKeyDown={this.textareaEnterSubmit}
              onChange={this.update("body")}
              value={this.state.body}
              ></textarea>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoShowModal);
