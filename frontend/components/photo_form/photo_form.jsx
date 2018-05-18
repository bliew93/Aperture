import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photoStates;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps, prevState) {

    if(this.props.formType === 'edit' && prevProps.photoStates !== this.props.photoStates) {
      this.setState(this.props.photoStates);
    }
  }

  update(field){
    let newState = merge({}, this.state);
    return e => this.setState( merge(newState, {[this.props.selectedPhoto]: { [field]: e.currentTarget.value }}) );
  }

  handleSubmit(e) {
    e.preventDefault();
    // will need to improve this. Independent hits to backend not efficient
    if(this.props.formType === 'create') {
      let uploadCount = 0;

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
    else {
      const updatedPhoto = this.state[this.props.selectedPhoto];
      updatedPhoto.id = this.props.selectedPhoto;
      this.props.processForm(updatedPhoto);
    }
  }


  render(){
    const errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>;
    });

    const edit = this.props.formType === 'edit' ? 'edit-' : '';

    return (
      <div className={`${edit}photo-form-container`} >
        <ul className="errors">
          {errors}
        </ul>

        <form className="photo-form-contents">

          <h2 className="photo-form-header">
            {this.props.formType[0].toUpperCase() + this.props.formType.slice(1, this.props.formType.length)} Photos
          </h2>
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

          <input type="submit" onClick={this.handleSubmit} value={'Submit Photos'}></input>
        </form>

      </div>
    );
  }
}

export default withRouter(PhotoForm);
