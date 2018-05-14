import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { merge } from 'lodash';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photoStates;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field){
    let newState = merge({}, this.state);
    return e => this.setState( merge(newState, {[this.props.selectedPhoto]: { [field]: e.currentTarget.value }}) );
  }

  handleSubmit(e) {
    e.preventDefault();
    // will need to improve this. Independent hits to backend not efficient
    for(let photo in this.state){
      const file = this.props.photos[photo].imageFile;

      const formData = new FormData();
      formData.append("photo[title]", this.state[photo].title);
      formData.append("photo[body]", this.state[photo].body);

      if (file) {
        formData.append("photo[image]", file);
      }

      this.props.processForm(formData);
    }
    this.props.closeModal();
  }


  render(){

    const errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>;
    });

    return (
      <div className="photo-form-container" >
        <ul className="errors">
          {errors}
        </ul>

        <form className="photo-form-contents">

          <h2 className="photo-form-header">{'Create Photo'}</h2>
          <label>Title</label>

          <br></br>
          <input type="text" onChange={this.update("title")} value={this.state[this.props.selectedPhoto].title}></input>

          <br></br>
          <br></br>

          <label>Body</label>
          <br></br>
          <textarea onChange={this.update("body")} value={this.state[this.props.selectedPhoto].body}></textarea>

          <br></br>
          <br></br>

          <input type="submit" onClick={this.handleSubmit} value={'Submit Photo(s)'}></input>
        </form>

      </div>
    );
  }
}

export default withRouter(PhotoForm);
