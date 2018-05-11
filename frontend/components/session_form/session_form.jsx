import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.location.state) {
      this.state = this.props.location.state;
    }
    else {
      this.state = { username: "", password: "" };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // .then( () => {
    //   // this.props.history.push("/"); //use this for redirection
    // });
    this.setState({ username: "", password: "" });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    if(this.props.location.pathname === '/login'){
      this.setState({ username: 'guest', password: "password" });
    }
    else {
      this.props.history.push({
        pathname: "/login",
        state: { username: 'guest', password: "password" }
      });
    }
  }

  render(){
    const header = this.props.formType === 'login' ? 'Log In to Aperture' : 'Join Aperture';
    const submitText = this.props.formType === 'login' ? 'Log in' : 'Sign up';
    let altLink;
    if(this.props.formType === 'login'){
      altLink = (
        <div className='alt-form-link'>
          <span>Don't have an account? </span><Link to='/signup'>Sign up</Link>
        </div>
      );
    }
    else {
      altLink = (
        <div className='alt-form-link'>
          <span>Already have an account? </span><Link to='/login'>Log in</Link>
        </div>
      );
    }

    const errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>;
    });

    return (
      <div className="form-container" >
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

          <hr className="line-divider"></hr>

          <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
          {altLink}
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
