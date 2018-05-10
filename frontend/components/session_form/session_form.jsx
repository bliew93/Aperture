import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () => {
      this.props.history.push("/"); //use this for redirection
    });
    this.setState({ username: "", password: "" });
  }

  render(){
    const header = this.props.formType === 'login' ? 'Log In to Aperture' : 'Join Aperture';
    const submitText = this.props.formType === 'login' ? 'Log in' : 'Sign up';
    const errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>;
    });
    return (
      <div className="form-container">
        <ul className="errors">
          {errors}
        </ul>

        <form className="form-contents">

          <h2 className="form-header">{header}</h2>
          <label>Username</label>

          <br></br>
          <input type="text" onChange={this.update("username")} value={this.state.username}></input>

          <br></br>
          <br></br>

          <label>Password</label>
          <br></br>
          <input type="password" onChange={this.update("password")} value={this.state.password}></input>

          <br></br>
          <br></br>

          <input type="submit" onClick={this.handleSubmit} value={submitText}></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
