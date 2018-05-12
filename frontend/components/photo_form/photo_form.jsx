import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const photo = Object.assign({}, this.state);

    const file = window.tempPhotoState[0].imageFile;

    const formData = new FormData();
    formData.append("photo[title]", this.state.title);
    formData.append("photo[body]", this.state.body);

    if (file) {
      formData.append("photo[image]", file);
    }

    this.props.processForm(formData, this.setState({ title: "", body: "" }));
    this.props.closeModal();    
    // this.props.processForm(photo);
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
          <input type="text" onChange={this.update("title")} value={this.state.title}></input>

          <br></br>
          <br></br>

          <label>Body</label>
          <br></br>
          <textarea onChange={this.update("body")} value={this.state.body}></textarea>

          <br></br>
          <br></br>

          <input type="submit" onClick={this.handleSubmit} value={'Submit Photo'}></input>
        </form>

      </div>
    );
  }
}

export default withRouter(PhotoForm);
